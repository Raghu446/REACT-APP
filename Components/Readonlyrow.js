import React from 'react'
const Readonlyrow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
                 
              <tr>
                <td>{contact.student_name}</td>
                <td>{contact.student_cutoff}</td>
                <td>{contact.student_address}</td>
                <td>{contact.university}</td>
                <td>{contact.state}</td>
                <td>
                    <button 
                    type='button' 
                    onClick={(event)=> handleEditClick(event, contact )}
                    >
                        Update
                        </button>
                        <button type='button' onClick={()=> handleDeleteClick(contact.id)}>
                            Delete
                            </button>
                </td>
                </tr>
    
    );
};

export default Readonlyrow;
