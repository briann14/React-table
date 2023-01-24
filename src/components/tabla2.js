import React, { Fragment, useMemo, useState } from 'react';
import {Column , useTable, useGlobalFilter} from "react-table";//globalfilter darnos un filtro global
import ReactTable from 'react-table';
import { useContext } from 'react'; //para usar el use context
import context from '../context/context'; //lo importo
import Tablita from './tablita';
const Tabla2 = () => {
    const value = useContext(context) //lo hago variable al usecontext
    const data = React.useMemo(
        () => [
            {
                id: "1",
                name: "jose",
                email: "pffffgmail.com",
                profesion: 'akaka',
                edad: 1000

            },
            {
                id: "2",
                name: "caramba",
                email: "pepe@gmail.com",
                profesion: 'abogado',
                edad: 30

            },
            {
                id: "3",
                name: "lolo",
                email: "pepe@gmail.com",
                profesion: 'abogado',
                edad: 28

            },
            
        
        ] 
    )

  

    const columns = React.useMemo( //las columnas que van a definir la tabla 
        () => [
            {Header: "Informacion Personal",
            Footer: "Informacion Personal",
        columns:[
            {
                Header: 'ID',
                Footer: 'ID',
                accessor: 'id',
                Cell: ({ value }) => <strong>{value}</strong>
            },
            {
                Header: 'Nombres',
                Footer: 'Nombres',
                accessor: 'name',
                Cell : ({value}) => <strong>{value}</strong>
            },
            {
                
                Header: 'Edad',
                Footer: (info) => {
                    const average = useMemo( //Calcula el rango de edad
                        () => info.data.reduce((sum , data) => data.edad + sum, 0), 
                        [info.data]
                    );
                    return <>Media: {average / info.data.length}</>
                },
                accessor: 'edad'
            },
               //Hacer una nueva colum
            {
                Header: 'Profesion',
                Footer: 'Profesion', 
                accessor: 'profesion'
            },
            {
                Header: 'Email',
                Footer: 'Email' , 
                accessor: 'email'
            }
        ]
        }
        ],
        []
    )

    


return(
    <Fragment>
        <h1>hola</h1>//nos devuelve role todos los atributos que tiene que tener la tabla
        <Tablita data={data} columns={columns} />
      
            <h1>{value}</h1>
    </Fragment>
)



}
 
export default Tabla2;