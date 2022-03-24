import { useState } from 'react'
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Estadisticas from './components/Estadisticas';

const ContenedorImagen = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background-color: #ddd;
  text-align: center;
`

const Imagen = styled.img`
  display: block;
`





function App() {

  const[pokemon, setPokemon] = useState ([]);


  return (
    <>
      <ContenedorImagen>
        {pokemon == '' ? <Formulario
          setPokemon = {setPokemon}
        /> : <Imagen
        src={pokemon.imagenPokemon}
        alt= "Imagen pokemon"
      />}
      </ContenedorImagen>

      {pokemon != '' && <Estadisticas
        pokemon = {pokemon}
      />}
      


    </>
  )
}

export default App
