import React from 'react'
const Readonlyrow = ({ Newdata, handleEditClick, handleDeleteClick }) => {
    return (
                 
              <tr>
                <td>{Newdata.id}</td>
                <td>{Newdata.student_name}</td>
                <td>{Newdata.student_cutoff}</td>
                <td>{Newdata.student_address}</td>
                <td>{Newdata.university}</td>
                <td>{Newdata.state}</td>
                <td>
                    <button 
                    type='button' onClick={(event)=> handleEditClick(event, Newdata )}
                    >
                        Update
                        </button>
                        <button type='button' onClick={()=> handleDeleteClick(Newdata.id)}>Delete</button>
                </td>
                </tr>
    
    );
};

export default Readonlyrow
