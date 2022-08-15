import React, { useState } from 'react';
import ToDoList from './ToDoList';
    
const App =() => {
   
    
   const [inputList , setinputList] = useState("");
   const [Items, setItems] =  useState([]);
   const iteamEvent = (event) => {
      setinputList(event.target.value);
    
   };
    const listofItems = () =>{
         setItems((oldItems) => {
            return[...oldItems, inputList];
         });
      setinputList("");   
    };
    const deleteItems = (id) => {
      console.log("deleted");
    
      setItems((oldItems) =>{
        return oldItems.filter((arrElem, index) => {
            return index !== id;
        });

      });
   };
    return (
      <>
        <div className='main-div'>
            <div className='center-div'>
                <br/>
                <h1> ToDo List</h1>
                <br/>
                 
               <input type="text" 
               placeholder='Add a Iteam' 
               onChange={iteamEvent} 
                value={inputList} 
                 />   
              
               <button onClick={listofItems}>+</button>
             <ol>
               {  <li> {inputList} </li> }
              {Items.map((itemval,index) => {
                 
                return  <ToDoList key={index} 
                id={index} 
                text={itemval}
                  onSelect={deleteItems}
                />
             } )}
             </ol>
           
           </div>

        </div>

    </> 
   )
}



export default App;
