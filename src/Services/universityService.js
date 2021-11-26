import {useState, useEffect } from 'react';
import axios from 'axios'

function GetUniverities() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      (async () => {
        const result = await axios('http://universities.hipolabs.com/search?country=India');
        console.log(result.data);
        setData(result.data);
      })();
    }, []);
    console.log(data);
    return data;
  }
       
 
   
export default GetUniverities;
