import { useEffect, useState } from 'react'
import styled from '@emotion/styled'


const InputDato = styled.input`
    background-color: 	rgba(255, 250, 250, .6);
    width: 80%;
    border: 1px solid white;
    font-size: 2rem;
    text-transform: uppercase;
    border-radius: .5rem;
    margin: 0 auto;
`

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 1rem;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 2rem;
    border-radius: .5rem;
    transition: background-color .3s ease;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Formulario = ({setPokemon}) => {

    const[pokemonBuscar, setPokemonBuscar] = useState ('');

    useEffect(() => {

    }, [])


    const consultarAPI = async ()  =>{
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonBuscar}`
        const respuesta = await fetch(url);
        const resultado = await respuesta.json()
        console.log(resultado)

        const arrayDatos = {
            nombre: resultado.name,
            imagenPokemon: resultado.sprites.front_default,
            tipo: resultado.types[0].type.name,
            hp: resultado.stats[0],
            attack: resultado.stats[1],
            defense: resultado.stats[2],
            specialAttacke: resultado.stats[3],
            specialDefense: resultado.stats[4],
            speed: resultado.stats[5],
            movimiento1: resultado.abilities[0].ability,
            movimiento2: resultado.abilities[1].ability,
            altura: resultado.height,
            peso: resultado.weight
        }
        setPokemon(arrayDatos);
    }

    
    
    const buscarPokemon = e =>{
        e.preventDefault();
        consultarAPI()
    }

  return (
    <form onSubmit={buscarPokemon}>
        <InputDato
            type="text"
            value={pokemonBuscar}
            onChange={ (e) => setPokemonBuscar(e.target.value.toLowerCase())}
        />


        <InputSubmit 
            type="submit"
            value="Buscar"
        />

    </form>
  )
}

export default Formulario