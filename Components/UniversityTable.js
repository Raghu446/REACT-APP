import React, { useState, useEffect } from "react";
import axios from "axios";
import {MyTableForUniversity} from './Table-for-university'
import { columns } from './column';
import './table.css';

export function UniversityTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('res')
       axios.get('http://universities.hipolabs.com/search?country=India').then((res) => {
        setData(res.data); 
       console.log(res);
      });
      // console.log(result);
      
    
  }, []);







  return (
    <div>
      <MyTableForUniversity columns={columns} data={data} />
    </div>
  );
}