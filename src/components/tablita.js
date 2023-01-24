import React, { Fragment, useMemo, useState } from 'react';
import {Column , useTable, useGlobalFilter} from "react-table";//globalfilter darnos un filtro global
import ReactTable from 'react-table';

function Tablita({columns,data}){
   
    const tableInstance = useTable({columns, data})//Como primer argumento objeto con info de la tabla las columnas y los datos para pintar, el resto plugins hooks que necesitamos
        //tableinstance nos devuelve una instancia que va a tener mucha propiedad y nos permite pintar la tabla abstraida 
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
         prepareRow,
        // preGlobalFilteredRows,
        // setGlobalFilter,
        // state
    } = tableInstance;
    

    return(

<table {...getTableProps()} className="table table-bordered border-primary"> 
<thead className='table-dark'>//nos permite agrupar las cabeceras
    {headerGroups.map((headerGroups) => (   
        <tr {...headerGroups.getHeaderGroupProps()}>
            {headerGroups.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
        </tr>
    ))}
</thead>
<tbody {...getTableBodyProps()}>
    {rows.map((row) => {
        prepareRow(row);
        return (
            <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                    return(
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    )
                })}
            </tr>
        )
    })}
</tbody>
<tfoot className=' table table-dark'>
    {footerGroups.map((group) => (
        <tr {...group.getFooterGroupProps()}>
            {group.headers.map((column) => (
                <td {...column.getFooterProps()}>
                    {column.render("Footer")}
                </td>
            ))}
        </tr>
    ))}
</tfoot>
</table>
    )
}
export default Tablita
