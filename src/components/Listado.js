import React, { useEffect, useState } from 'react'
import { Editar } from './Editar'

export const Listado = ({listadoState, setListadoState}) => {

    //const [listadoState, setListadoState] = useState([])

    const [editar, setEditar] = useState(0)

    useEffect(() => {
        conseguirPeliculas()
    }, [])

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem('pelis'))
        setListadoState(peliculas)
        return peliculas
    }

    const borrarPeli = (id) => {
        //conseguir peliculas almacenadas
        let pelis_almacenadas = conseguirPeliculas()

        // filtrar las peliculas para que elimine del array
        let nuevoListadoPeliculas = pelis_almacenadas.filter(peli => peli.id !== parseInt(id))

        // actualizar listadoState
        setListadoState(nuevoListadoPeliculas)

        //actualizar datos localstorage
        localStorage.setItem('pelis', JSON.stringify(nuevoListadoPeliculas))

    }

    return (
        <>
            {listadoState != null ?
                listadoState.map(peli => {
                    return (
                        <article key={peli.id} className="peli-item">
                            <h3 className="title">{peli.titulo}</h3>
                            <p className="description">{peli.descripcion}</p>
                            <button className="edit" onClick={()=>{
                                setEditar(peli.id)
                            }}>Editar</button>
                            <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>
                        {/*Aparece formulario editar*/}
                        {editar === peli.id && (
                            <Editar peli = {peli}
                            conseguirPeliculas={conseguirPeliculas}
                            setEditar={setEditar}
                            setListadoState={setListadoState}
                            />
                        )}
                        
                        </article>
                    )
                })
                : <h2>No hay películas para mostrar</h2>
            }

        </>
    )
}
