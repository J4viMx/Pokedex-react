import { useEffect, useState } from 'react'
import styled from '@emotion/styled'


const ContenedorEstadadisticas = styled.div`
  position: absolute;
  width: 80%;
  height: 30%;
  top: 21%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2rem;
  background-color: #032d29;
`

const Parrafo = styled.p`
    font-weight: 600;
    font-size: 1.8rem;
    color: #aeba3a;
    margin: 1rem;
`

const ParrafoStats = styled.p`
    font-weight: 600;
    font-size: 1.8rem;
    color: #aeba3a;
    margin: 0;
`

const ContenedorTipo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const ContenedorStats = styled.div`
    display: flex;
    justify-content: space-around;
`

const Span1 = styled.span`
    padding: 1rem;
    color: #FFF;
    background-color: #dcc46c;
    margin-left: 1rem;
    `

const Span2 = styled.span`
    padding: 1rem;
    color: #FFF;
    background-color: #8cbc82;
    margin-left: 1rem;
`

const Span3 = styled.span`
    padding: 1rem;
    color: #FFF;
    background-color: #4372dc;
`

const Estadistica = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: center;
`

const Progress = styled.progress`
    margin-top: 1.5rem;
    padding: 2rem;
    width: 5rem;
    accent-color: #267292;
    transform: rotate(-90deg);
`


const Estadisticas = ({pokemon}) => {
  return (
    <>
    <ContenedorEstadadisticas>
        <ContenedorTipo>

            <Parrafo>
                Tipo:
                <Span1>
                    {pokemon.tipo}
                </Span1>
            </Parrafo>


            <Parrafo>
                Fraqueza:
                <Span1>
                    {pokemon.movimiento1.name}
                </Span1>
                <Span2>
                    {pokemon.movimiento2.name}
                </Span2>
            </Parrafo>

        </ContenedorTipo>


        <ContenedorStats>
            <Estadistica>
                <Progress
                    value={pokemon.hp.base_stat}
                    max="100"
                />
                <ParrafoStats>
                    PS
                </ParrafoStats>
            </Estadistica>
            
            <Estadistica>
                <Progress
                    value={pokemon.attack.base_stat}
                    max="100"
                />
                <ParrafoStats>
                    ATK
                </ParrafoStats>
            </Estadistica>

            <Estadistica>
                <Progress
                    value={pokemon.defense.base_stat}
                    max="100"
                />
                <ParrafoStats>
                    DEF
                </ParrafoStats>
            </Estadistica>

            <Estadistica>
                <Progress
                    value={pokemon.specialAttacke.base_stat}
                    max="100"
                />
                <ParrafoStats>
                    SP.ATK
                </ParrafoStats>
            </Estadistica>

            <Estadistica>
                <Progress
                    value={pokemon.specialDefense.base_stat}
                    max="100"
                />
                <ParrafoStats>
                    SP.DEF
                </ParrafoStats>
            </Estadistica>

            <Estadistica>
                <Progress
                    value={pokemon.speed.base_stat}
                    max="100"
                />
                <ParrafoStats>
                    SPEED
                </ParrafoStats>
            </Estadistica>

        </ContenedorStats>

        



    </ContenedorEstadadisticas>

    <div className='altura'>
        <Parrafo>
            Altura: {(pokemon.altura)/10}M
        </Parrafo>

    </div>
    <div className='peso'>
        <Parrafo>
                Peso: {(pokemon.peso)/10}Kg
        </Parrafo>
    </div>
    </>
  )
}

export default Estadisticas