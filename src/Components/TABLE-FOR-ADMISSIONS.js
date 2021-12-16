import React, {useState, Fragment, usePagination, useTable, useFilters} from 'react';
import { nanoid } from 'nanoid';
import './table.css';
import data from './mokdata.json'
import Readonlyrow from './Readonlyrow';
import EditableRow from './EditableRow';
import Dropdown from './Dropdown';
import Universities from './mokdata.json'
import Pagination from './pagination';

const TABLEFORADMISSIONS = () => {
    const [value, setValue] = useState('null');
    const[searchTerm, setsearchTerm] = useState('');
    const [contacts, setContacts] = useState(data);
   const [addFormData, setAddFormData] = useState({
      student_name: '',
      student_cutoff: '',
      student_address: '',
      university: '',
      state: ''
   });
   const [editFormData, setEditFormData] = useState({
    student_name: '',
    student_cutoff: '',
    student_address: '',
    university: '',
    state: ''   
   });

   const[editContactId, setEditContactId] = useState(null);


const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData [fieldName] = fieldValue;

    setAddFormData(newFormData);
};

const handleEditFormChange = (event) => {
   event.preventDefault(); 

   const fieldName = event.target.getAttribute('name');
   const fieldValue = event.target.value;

   const newFormData = { ...editFormData };
newFormData[fieldName] = fieldValue;

setEditFormData(newFormData);
};

const handleAddFormSubmit = (event) => {
event.preventDefault();

const newContact = {
    sl_no : nanoid(),
    student_name: addFormData.student_name,
    student_cutoff: addFormData.student_cutoff,
    student_address: addFormData.student_address,
    university: addFormData.university,
    state: addFormData.state
};
const newContacts = [...contacts, newContact];
setContacts(newContacts);
};

const handleEditFormSubmit = (event) => {
event.preventDefault();

const editedContact = {
  sl_no: editContactId,
  student_name: editFormData.student_name,
  student_cutoff: editFormData.student_cutoff,
  student_address: editFormData.student_address,
  university: editFormData.university,
  state: editFormData.state
};
const newContacts = [...contacts];

const index = contacts.findIndex((contact)=> contact.id === editContactId);

newContacts[index] = editedContact;

setContacts(newContacts);
setEditContactId(null);
};

const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
        student_name: contact.student_name,
        student_cutoff: contact.student_cutoff,
        student_address: contact.student_address,
        university: contact.university,
        state: contact.state
    };

    setEditFormData(formValues);
};

const handleCancelClick = () => {
    setEditContactId(null);
};

const handleDeleteClick = (contactId) => {
const newContacts = [...contacts];

const index = contacts.findIndex((contact) => contact.id === contactId);

newContacts.splice(index, 1);

setContacts(newContacts);
};

const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage] = useState(10);
  const indexOfLastcontacts = currentPage * contactsPerPage;
  const indexOfFirstcontacts = indexOfLastcontacts - contactsPerPage;
  const currentcontacts = contacts.slice (indexOfFirstcontacts, indexOfLastcontacts);
  const paginate = pageNumber => setCurrentPage(pageNumber);
    
  
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
        <div className='app-container'>
            <form onSubmit={handleEditFormSubmit}>
            <table>
                <thead>
                    <tr>
                        <th>Studentname</th>
                        <th>Student Cutoff</th>
                        <th>Student Address</th>
                        <th>University</th>
                        <th>State</th>
                        <th>Actions</th>                        
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) =>(
                       <Fragment>
                       { editContactId === contact.id ? (
                       <EditableRow 
                       editFormData={editFormData} 
                       handleEditFarmChange={handleEditFormChange} 
                       handleCancelClick ={handleCancelClick}
                       /> 
                       ) : (
                       <Readonlyrow 
                       contact={contact} 
                       handleEditClick={handleEditClick}
                       handleDeleteClick={handleDeleteClick}
                        />
                       )}
                       </Fragment>  

                    ) )}
                   
                </tbody>
                
            </table>
            <Pagination
        contactsPerPage={contactsPerPage}
        totalcontacts={contacts.length}
        paginate={paginate}
      />
            </form>
            <h2>newAdmission</h2>
    <form onSubmit={handleAddFormSubmit}>
      
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
        </div>
        </>
    )
}

export default TABLEFORADMISSIONS
