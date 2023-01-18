import "./authorHeader.css"

import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import authorActions from "../../store/authors/actions.js"
import { useParams } from "react-router"

const { get_author } = authorActions

const AuthorHeader = () => {
    const store = useSelector((store) => store.author)
    const authors = store.authors
    const author = store.authors[0]
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        if (authors.length === 0) {
            dispatch(get_author(params.id))
        }
    })

    return (
        <>
            {authors.length > 0 && (
                <div className="containerHeader">
                    <div className="container2">
                        <div className="fotoAuthor">
                            <img
                                className="imgAuthor"
                                src="https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg"
                                alt="autora"
                            />
                        </div>
                        <div className="containerAuthorDetails">
                            <h2 className="nombreAuthor p-author">
                                {author.name} {author.last_name}
                            </h2>
                            <div className="div-detail">
                                <div>
                                    <p className="localidad p-author">
                                        <img
                                            className="iconLocalidad"
                                            src="../../iconUbicacion.png"
                                            alt="icono localidad"
                                        />
                                        {author.city}, {author.country}
                                    </p>

                                    <p className="fechaNacimiento">
                                        {author.date && (
                                            <>
                                                <img
                                                    className="iconCumple"
                                                    src="../../iconCumpleaños.png"
                                                    alt="icono cumpleaños"
                                                />
                                                {author.date}
                                            </>
                                        )}
                                    </p>
                                </div>
                                <div>
                                    <img
                                        className="icon-editar"
                                        src="../../editar-documento.png"
                                        alt="editar documento"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="descripcionAuthor">
                        Estudiante de programación, fanático de minga. Acuario,
                        creo en Dios y es Argentino...{author.descripcion}
                    </p>
                </div>
            )}
        </>
    )
}

export default AuthorHeader
