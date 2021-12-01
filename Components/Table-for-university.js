import React from "react";
import { usePagination, useTable, useFilters,} from "react-table";
import { style } from "react";
import './table.css';
import { useState } from "react";
import App from "../App";

export function MyTableForUniversity ( {columns, data} ) {
const[searchTerm, setsearchTerm] = useState('');
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
    columns,
    data,
    initialState: {pageIndex: 2 },
  },
  usePagination
  )


  return (
    <> 
    <div className= 'container'>
      <input
      type='text'
      placeholder='Search..' 
      className='farm-control'
      onChange={(e) => {
        setsearchTerm(e.target.value);
      }}
      style={ { marginTop: '50px', marginBottom: '20px', width: '40%' } }  
      >

</input>
</div>
      
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.filter((val) => {
                let value= val.row.values
              console.log(value);
                if (searchTerm === '') {
                  return value;
                } else if(
                  value.name.toLowerCase().includes(searchTerm.toLowerCase()) 
                ){
                  return value;
                }
              }).map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </table>
   

</>
)
          }
export default MyTableForUniversity;