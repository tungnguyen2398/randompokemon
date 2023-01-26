import React, { useState } from 'react';
import axios from "axios"

export default function Pokemon() {
  const [pokemon, setPokemon] = useState({});
  let randomIndex = Math.floor(Math.random() * 155) + 1;

  const handleClick = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${randomIndex}`)
      .then((res) => { 
        setPokemon(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='container ml-96 mt-32'>
      <div className='bg-gray-400 w-80 h-80 text-center rounded-lg' >
        <p className='text-lg font-bold mb-10 pt-5 bg-red-500 pt-2'>{pokemon.name}</p> 
        {pokemon.sprites ? (<div className="ml-20 bg-green-300 rounded-full w-[170px] mb-5"> <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-[170px] h-[170px] ml-2"/> </div>) : 
          ( null )
        }
        {
          pokemon.types ? (<p className='font-bold'>Type: {pokemon.types[0].type.name}</p>) : ( null )
        }
        <button onClick={handleClick} className="text-center w-[320px] bg-yellow-400 rounded-lg mt-3 font-bold">Get Pokemon</button>
      </div>
    </div>
  );
}

