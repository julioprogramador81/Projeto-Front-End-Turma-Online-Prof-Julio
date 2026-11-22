
import React from "react";
import "../assets/FilterGroup.css"


function FilterGroup({ title, inputType, options, selected, onChange }) {

  return (
    <div className="filter-group">
      <h3>{title}</h3>

      {options.map((option, index) => (
        <label key={`${option.text}-${index}`}>
          <input style={{width:"22px", height:"22px"}}
            type={inputType}
            value={option.value ?? option.text}
            name={title}
            checked={selected.includes(option.value)}
            onChange={() => onChange(option.value)}
          />

          <span>{option.text}</span>
        </label>
      ))}
    </div>
  );
}

export default FilterGroup;
 
 /*<div className="filter-group">
   
 <h3>{title}</h3>      
{options.map((option, index) => (    
 <label key={index}>  
     <input 
        type={inputType}
         value={option.value || option.text}
       />
        {option.text}
  
</label>    
))}    
</div>*/

 