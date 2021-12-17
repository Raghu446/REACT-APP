import React from "react";
import { usePagination, useTable, useFilters,} from "react-table";
import {Nanoid} from "nanoid"
import { style } from "react";
import './table.css';
import { useState, Fragment } from "react";
import App from "../App";
import AdmissionTable from "./AdmissionTable";
import Readonlyrow from "./Readonlyrow";
import EditableRow from "./EditableRow";
import Dropdown from "./Dropdown";
import Universities from './MOCK_DATA (1).json'

export function MyTableForAdmission ( {columns, data} ) {
  const [value, setValue] = useState('null')
  const [Newdata, setNewdata] = useState(data);
const[searchTerm, setsearchTerm] = useState('');
const [addFormData, setAddFormData] = useState({
  student_name: '',
  student_cutoff: '',
  student_address: '',
  university: '',
  state: '',
})  

const [editFormData, setEditFormData] = useState({
  student_name: '',
  student_cutoff: '',
  student_address: '',
  university: '',
  state: '',
})
const [editNewdataId, setEditNewdataId] = useState(null);

const handleAddFormChange =(event) =>{
  event.preventDefault();
  const fieldName = event.target.getAttribute('name');
  const fieldValue = event.target.Value;

  const newFarmData = {...addFormData};
  newFarmData[fieldName] = fieldValue;

  setAddFormData(newFarmData);
};

const handleEditFarmChange = (event) => {
event.preventDefault();

const fieldName = event.target.getAttribute('sl_no');
const fieldValue = event.target.value;

const newFarmData = {...editFormData };
newFarmData[fieldName] = fieldValue;
setEditFormData(newFarmData);
}

const handleAddFormSubmit = (event) => {
  event.preventDefault();

  const newAdmission = {
    sl_no: addFormData.sl_no,
    student_name: addFormData.student_name,
    student_cutoff: addFormData.student_cutoff,
    student_address: addFormData.student_address,
    university: addFormData.university,
    state: addFormData.state,
  };
  const NewAdmissions = [...Newdata,newAdmission];
  setnewAdmission(NewAdmissions);
};
const handleEditFarmSubmit = (event) => {
event.preventDefault();

const editedData = {
  id: editNewdataId,
  student_name: editFormData.student_name,
  student_cutoff: editFormData.student_cutoff,
  student_address: editFormData.student_address,
  university: editFormData.university,
  state: editFormData.state
}

const newAdmissions = Newdata;
const index = newAdmissions.findIndex((Newdata)=> Newdata.id === editNewdataId );
newAdmissions[index] = editedData;

setNewdata(newAdmissions);
setEditNewdataId (null)
}

const handleEditClick = (event, Newdata)=> {
  event.preventDefault();
  setEditNewdataId (Newdata.id);

const formValues = {
student_name: Newdata.student_name,
student_address: Newdata.student_address,
student_cutoff: Newdata.student_cutoff,
university: Newdata.university,
state: Newdata.state,  
}
setEditFormData(formValues);
};

const handleCancelClick = () => {
  setEditNewdataId(null);
};

const handleDeleteClick = (NewdataId) => {
  const NewDatas = [...Newdata];

  const index = NewDatas.findIndex((Newdata)=> Newdata.id === NewdataId );

  Newdata.splice(index, 1);

  setNewdata (NewDatas);
}

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
    <div>
      <Dropdown options={Universities} 
      prompt='Select university....'
      id='id'
      label='university'
      value={value}
      onChange={val => setValue(val)}
      />
    </div>
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
    <form onSubmit={handleEditFarmSubmit}> 
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
         {Newdata.map((Newdata => ((
            <Fragment>
              {editNewdataId === Newdata.id ? (
              <EditableRow editFormData={editFormData} 
              handleEditFarmChange={handleEditFarmChange}
              handleCancelClick={handleCancelClick}
              />
              ) : (<Readonlyrow 
            Newdata = {Newdata}
            handleEditClick = {handleEditClick}
            handleDeleteClick = {handleDeleteClick}
            /> ) }
            
             </Fragment>
                    )

        )))}
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
                  value.student_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  value.university.toLowerCase().includes(searchTerm.toLowerCase())
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
    </form> 
    <h2>newAdmission</h2>
    <form onSubmit={handleAddFormSubmit}>
      <input
      type='number'
      name='sl_no'
      required='required'
      placeholder='enter a sl.no....'
      onChange={handleAddFormChange}
      />
      <input
      type='text'
      name='student_name'
      required='required'
      placeholder='enter a name....'
      onChange={handleAddFormChange}
      />
      <input
      type='number'
      name='student_cutoff'
      required='required'
      placeholder='enter a student_cutoff....'
      onChange={handleAddFormChange}
      />
      <input
      type='text'
      name='student_address'
      required='required'
      placeholder='enter a student_address....'
      onChange={handleAddFormChange}
      />
      <input
      type='text'
      name='university'
      required='required'
      placeholder='enter a university....'
      onChange={handleAddFormChange}
      />
      <input
      type='text'
      name='state'
      required='required'
      placeholder='enter a state....'
      onChange={handleAddFormChange}
      />
      <button type='submit'>Add</button>
    </form>

</>
);
          }
export default MyTableForAdmission;