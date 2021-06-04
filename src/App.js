import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
var action="fa fa-edit add-btn";
function App() {
  const [inputData,setInputData] = useState('');
  const [items,setItems]=useState([]);
  var action="fa fa-plus add-btn";
  const addItems = () => {
    if(!inputData){

    } else {
      setItems((oldIt) =>{
        return [...oldIt,inputData]
      }
  ); 
  setInputData("");
 }
   
 };
 
 const deletItem =(id)=>{
   const updated = items.filter((ele,ind)=>{
     return ind!==id;
   }
   );
   setItems(updated);
 }
 const editItem = (index,it) =>{
   if(!inputData){
    setInputData(it[index]);
    action="fa fa-edit add-btn";
    deletItem(index);

   }
 }

  return (
     <div className="main-div">
        <div className="container">
            <div className="na">
                 <h1> <span className="na1">To</span><span className="na2">Do</span><span className="na3">List</span></h1>
            </div>
           <div className="datItem" >
                <input  type="text" placeholder="Add Task...."
                    value={inputData}
                   onChange = {(e) =>setInputData(e.target.value)}
                            />
                            <i className={action}   title="Add Item" onClick={addItems}> </i>
                 
            </div>
           <div className="showItems">  
           
                         
              {
                 items.map((ele,index) =>{
                   return (
                    <div className="eachItem" >      
             
             <h3  id={index}>{ele}</h3> 
             <div className="btns">
               <i className="fa fa-edit add-btn" onClick={()=>editItem(index,items)}>    </i>
             <i className="fa fa-trash-o del-btn" onClick={()=>deletItem(index)}	> </i>
             </div>
            </div>
                      )}
                   )}
                    
                    
           </div>
         </div>
      </div>
  );
}

export default App;
