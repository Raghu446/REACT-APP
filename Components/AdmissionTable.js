import React from 'react'
import MockData from './MOCK_DATA (1).json'
import {admincolumns} from './admission column'
import MyTableForAdmission from './Table-for-Admission';
function AdmissionTable() {

    const data = React.useMemo(() => MockData, [])

    return (
        <div>
          <MyTableForAdmission columns={admincolumns} data={data} />
        </div>
      );
   
}

export default AdmissionTable
