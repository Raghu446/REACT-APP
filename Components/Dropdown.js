import React, {useState, useRef, useEffect, useFilter } from 'react'
import './styles.css';

function Dropdown({
    options, 
    prompt, 
    value, 
    onChange,
    label,
    id
}) {

    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("")
    const ref  = useRef(null);
    
    useEffect(() => {
     document.addEventListener("click", close)
     return() => document.removeEventListener("click", close);  
    }, []);

    function close (e) {
        setOpen(e && e.target === ref.current);
    }
    function filter(options) {
        return options.filter(option => 
            option[label].toLowerCase().indexOf(query.toLowerCase() > -1
            ));
    }
   
    function displayValue() {
        if(query.length > 0) return query;
        if (value) return value[label];
        return "";
       }
   
    return (
    
        <div className='dropdown'>
         <div className='control' 
         onClick={() => setOpen((prev) => !prev)}>
             <div className='selected-value' >
                 <input type="text"
                 ref={ref}
                 placeholder={value ? value[label] : prompt}
                 value={displayValue}
                 onChange={e => {
                     setQuery(e.target.value)
                     onChange(null)
                 }}

                 onClick={() => setOpen(prev => !prev)}
             />
             </div>
             <div className={`arrow ${open ? "open" : null}`} />
             </div>   
        <div className={`options ${open ? "open" : null}`}>
        
            {
               options.map(option => 
                <div 
                key={options[id]}
                className={`option $ {value === option ? "selected" : null}`} 
                onClick={() => {
                    setQuery("")
                    onChange(option);
                    setOpen(false)
                }}
                >
                    {option[label]}</div>)
            }
        
        </div>
        </div>
    
    )
}

export default Dropdown
