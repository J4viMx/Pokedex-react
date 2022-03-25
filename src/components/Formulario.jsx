import { useEffect, useState } from 'react'
import styled from '@emotion/styled'


const FormularioContenedor = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
`

const ParrafoInstruccion = styled.p`
    font-weight: 700;
    font-size: 2rem;
    font-family: cursive;
`

const Error = styled.p`
    position: absolute;
    top: 20%;
    font-weight: 700;
    font-size: 1.8rem;
    color: red;
    margin: 0;
`

const InputDato = styled.input`
    background-color: #0000006c;
    width: 80%;
    border: 1px solid white;
    font-size: 2rem;
    text-transform: uppercase;
    border-radius: .5rem;
    margin: 0 auto;
    padding: 1rem;
    color: #FFF;
    

    &::placeholder{
        color: #fdfdfdaf;
    }
`

const InputSubmit = styled.input`
    background-color: #31a7f1;
    border: none;
    width: 80%;
    padding: 1rem;
    margin-top: 2rem;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 2rem;
    border-radius: .5rem;
    transition: background-color .3s ease;

    &:hover{
        background-color: #2165ec;
        cursor: pointer;
    }
`

const Formulario = ({setPokemon}) => {

    const[pokemonBuscar, setPokemonBuscar] = useState ('');
    const[noExiste, setnoExiste] = useState('');

    useEffect(() => {

    }, [])


    const consultarAPI = async ()  =>{

        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonBuscar}`

        try{
            const respuesta = await fetch(url);
            const resultado = await respuesta.json()
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
        }catch(error){
            setnoExiste('El pokemon que buscaste no existe')
            return;
        }
        

    }

    
    
    const buscarPokemon = e =>{
        e.preventDefault();
        consultarAPI()
    }

  return (
    <FormularioContenedor>
        <ParrafoInstruccion>Buscar Pokemon</ParrafoInstruccion>
        {noExiste != '' &&  <Error>{noExiste}</Error>}
        <form onSubmit={buscarPokemon}>
            <InputDato
                type="text"
                value={pokemonBuscar}
                placeholder="nombre pokemon"
                onChange={ (e) => setPokemonBuscar(e.target.value.toLowerCase())}
            />
            <InputSubmit 
                type="submit"
                value="Buscar"
            />

        </form>
    </FormularioContenedor>
  )
}

export default Formulario