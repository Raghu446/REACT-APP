import React from 'react'

const EditableRow = ({ 
    editFormData, 
    handleEditFarmChange, 
    handleCancelClick 
}) => {
    return (
    
        <tr>
            <td>
            <input
      type='text'
      required='required'
      placeholder='enter a name....'
      name='student_name'
      value={editFormData.student_name}
      onChange={handleEditFarmChange}
      />
    </td>
<td>
    <input
      type='number'
      required='required'
      placeholder='enter a student_cutoff....'
      name='student_cutoff'
      value={editFormData.student_cutoff}
      onChange={handleEditFarmChange}
      />
            </td>
<td>
 <input
      type='text'
      required='required'
      placeholder='enter a student_address....'
      name='student_address'
      value={editFormData.student_address}
      onChange={handleEditFarmChange}
      />
</td>
 <td>
    <input
      type='text'
      required='required'
      placeholder='enter a university....'
      name='university'
      value={editFormData.university}
      onChange={handleEditFarmChange}
      />
</td>
<td> 
     <input
      type='text'
      required='required'
      placeholder='enter a state....'
      name='state'
      value={editFormData.state}
      onChange={handleEditFarmChange}
       />
            </td>
            <td>
                <button type='submit'>Save</button>
                <button type='button' onClick={handleCancelClick}>
                    Cancel
                    </button>
            </td>
        </tr>

    );
};

export default EditableRow
