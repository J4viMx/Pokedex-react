import { useState } from 'react'
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Estadisticas from './components/Estadisticas';
import Logo from './img/logo-pokedex.png';

const ContenedorImagen = styled.div`
  
  background-color: #f1f2d3;
  position: absolute;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 2rem;

`

const ContenedorPokemonFinal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`

const Imagen = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 70%;
`

const ParrafoNombrePokemon = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-55%);
  margin: 0;
  margin-top: -4rem;
  font-weight: 700;
  font-size: 1.8rem;
  font-family: cursive;
  text-transform: uppercase;
`

const BotonRegresar = styled.button`
  position: absolute;
  top: 2%;
  left: 2%;
  border-radius: 100%;
  font-weight: bold;
  font-size: 2.5rem;
  border: none;
  cursor: pointer;
  background-color: black;
  color: white;
`


const EstadisticasVacias = styled.div`
  position: absolute;
  width: 80%;
  height: 30%;
  top: 21%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2rem;
  background-color: #032d29;
`


function App() {

  const[pokemon, setPokemon] = useState ([]);

  const regresar = () =>{
    setPokemon('')
  }

  return (
    <>
    <header>
        <img className="logo" src={Logo} alt="logo pokedex"/>
        <p className="mi-nombre"> de Javier Juárez</p>
    </header>

    <div className="contenedor-pokedex">
        
        <div className="parte-izquierda">
            
            <div className="parte-arriba">
                <div className="parte-arriba-circulos">
                    
                    <div className="circulo-grande">
                        <div className="circulo-mediano">
                            <div className="circulo-chico">
                            </div>
                        </div>
                    </div>

                    <div className="circulos-grande">
                        <div className="circulos-chicos">
                            <div className="circulos-mini"></div>
                        </div>
                    </div>

                    <div className="circulos-grande segundo-circulo">
                        <div className="circulos-chicos">
                            <div className="circulos-mini"></div>
                        </div>
                    </div>

                    <div className="circulos-grande segundo-circulo tercer-circulo">
                        <div className="circulos-chicos">
                            <div className="circulos-mini"></div>
                        </div>
                    </div>
                        
                </div>
            </div> {/* .Parte-arriba */}

            <div className="contenido-parte-izquierda">
                <div className="contenido-izquierda">
                    <div className="pantalla">
                    <ContenedorImagen>
                      {pokemon == '' ? <Formulario
                        setPokemon = {setPokemon}
                      /> 
                      : 
                      <ContenedorPokemonFinal>  
                        <BotonRegresar onClick={regresar}>&lt;</BotonRegresar>
                        <Imagen
                        src={pokemon.imagenPokemon}
                        alt= "Imagen pokemon"
                      />
                        <ParrafoNombrePokemon>{pokemon.nombre}</ParrafoNombrePokemon>
                      </ContenedorPokemonFinal>
                    }
                  </ContenedorImagen>
                    </div>

                    <div className="parte-abajo">
                        <div className="circulo-negro"></div>
                        <div className="luz-roja"></div>
                        <div className="luz-azul"></div>
                        <div className="cuadrado-verde"></div>

                        <div className="flechitas">
                            <div className="arriba-abajo"></div>
                            <div className="izquierda-derecha"></div>
                            <div className="circulo-enmedio">
                                <div className="circulo-oculto"></div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>

        <div className="barra-enmedio">
            <div className="engrane-arriba"></div>
            <div className="engrane-medio"></div>
            <div className="engrane-abajo"></div>
        </div>


        <div className="parte-derecha">
            <div className="contenido-parte-derecha">
                <div className="parte-arriba-derecha"></div>
                  {pokemon != '' ? <Estadisticas
                    pokemon = {pokemon}
                  />
                    :
                  <EstadisticasVacias/>
                }
                <div className="cuadrados-azules">
                    <div className="cuadrado-azul"></div>
                    <div className="cuadrado-azul"></div>
                    <div className="cuadrado-azul"></div>
                    <div className="cuadrado-azul"></div>
                    <div className="cuadrado-azul"></div>
                    <div className="cuadrado-azul"></div>
                    <div className="cuadrado-azul"></div>
                    <div className="cuadrado-azul"></div>
                    <div className="cuadrado-azul"></div>
                    <div className="cuadrado-azul"></div>
                </div>
    
                <div className="luces-negras">
                    <div className="luz-negra"></div>
                    <div className="luz-negra"></div>
                </div>
    
                <div className="cuadrados-blancos">
                    <div className="cuadrado-blanco"></div>
                    <div className="cuadrado-blanco"></div>
                </div>
    
                <div className="circulo-cafe">
                    <div className="mini-circulo-cafe"></div>
                </div>
    

            </div>

        </div>
    </div>
      


    </>
  )
}

export default App
