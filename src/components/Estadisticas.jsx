import { useEffect, useState } from 'react'
import styled from '@emotion/styled'


const ContenedorEstadadisticas = styled.div`
  background-color: #032d29;
`

const Parrafo = styled.p`
    font-weight: 600;
    font-size: 1.8rem;
    color: #aeba3a;
`

const ContenedorTipo = styled.div`
    display: flex;
`

const Span1 = styled.span`
    padding: 1rem;
    color: #FFF;
    background-color: #dcc46c;

`

const Span2 = styled.span`
    padding: 1rem;
    color: #FFF;
    background-color: #8cbc82;
`

const Span3 = styled.span`
    padding: 1rem;
    color: #FFF;
    background-color: #4372dc;
`

const Estadistica = styled.div`
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
`

const Progress = styled.progress`
    margin-top: 4rem;
    padding: 2rem;
    width: 10rem;
    accent-color: #267292;
    transform: rotate(-90deg);
`


const Estadisticas = ({pokemon}) => {
  return (
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

            <Estadistica>
                <Progress
                    value={pokemon.hp.base_stat}
                    max="100"
                />
                <Parrafo>
                    PS
                </Parrafo>
            </Estadistica>
            
            <Estadistica>
                <Progress
                    value={pokemon.attack.base_stat}
                    max="100"
                />
                <Parrafo>
                    ATK
                </Parrafo>
            </Estadistica>

            <Estadistica>
                <Progress
                    value={pokemon.defense.base_stat}
                    max="100"
                />
                <Parrafo>
                    DEF
                </Parrafo>
            </Estadistica>

            <Estadistica>
                <Progress
                    value={pokemon.specialAttacke.base_stat}
                    max="100"
                />
                <Parrafo>
                    SP.ATK
                </Parrafo>
            </Estadistica>

            <Estadistica>
                <Progress
                    value={pokemon.specialDefense.base_stat}
                    max="100"
                />
                <Parrafo>
                    SP.DEF
                </Parrafo>
            </Estadistica>

            <Estadistica>
                <Progress
                    value={pokemon.speed.base_stat}
                    max="100"
                />
                <Parrafo>
                    SPEED
                </Parrafo>
            </Estadistica>

            <div>
                <Parrafo>
                    Altura: {pokemon.altura}M
                </Parrafo>

            </div>
            <div>
                <Parrafo>
                        Peso: {pokemon.peso}Kg
                </Parrafo>
            </div>


        



    </ContenedorEstadadisticas>

  )
}

export default Estadisticas