import React from 'react'

const EditableRow = ({ editFormData, handleEditFarmChange, handleCancelClick }) => {
    return (
        <div>
        <tr>
            <td>
                <input 
                type='number'
                name='sl_no'
                required='required'
                placeholder='enter a sl.no....'
                value={editFormData.sl_no}
                onChange={handleEditFarmChange}
                ></input>
            </td>
            <td>
            <input
      type='text'
      name='student_name'
      required='required'
      placeholder='enter a name....'
      value={editFormData.student_name}
      onChange={handleEditFarmChange}
      />
    </td>
<td>
    <input
      type='number'
      name='student_cutoff'
      required='required'
      placeholder='enter a student_cutoff....'
      value={editFormData.student_cutoff}
      onChange={handleEditFarmChange}
      />
            </td>
<td>
 <input
      type='text'
      name='student_address'
      required='required'
      placeholder='enter a student_address....'
      value={editFormData.student_address}
      onChange={handleEditFarmChange}
      />
</td>
 <td>
    <input
      type='text'
      name='university'
      required='required'
      placeholder='enter a university....'
      value={editFormData.university}
      onChange={handleEditFarmChange}
      />
</td>
<td> 
     <input
      type='text'
      name='state'
      required='required'
      placeholder='enter a state....'
      value={editFormData.state}
      onChange={handleEditFarmChange}
       />
            </td>
            <td>
                <button type='submit'>Save</button>
                <button type='button' onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
</div>
    )
}

export default EditableRow
