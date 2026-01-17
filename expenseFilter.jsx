 import React from 'react'
 import {categories} from '../src/App';
 function ExpenseFilter({onSelectCategory}) {
    
   return (
     <div>
      <select className="form-select"   aria-label="Default select example" onChange={(event)=>onSelectCategory(event.target.value)}  style={{marginBottom:"10px"}}>
        <option value="">All categories</option>
        {categories.map(category=><option key={category} value={category}>{category}</option>)}

        </select> 
     </div>
   )
 }
 
 export default ExpenseFilter;
 