import {useState,useEffect} from 'react';

import './todoapp.css';


function AppList(){


    //input side 
    const [input,setInput]=useState("");

    //task state
    const [task,setTask]=useState([]);


    // date and time
    const [time,setTime]=useState(new Date());


    useEffect(()=>{
        const interval= setInterval(()=>{
            setTime(new Date());
        },1000);// for time update

        return ()=>clearInterval(interval);
    },[])


    function Inputtext(event){
         setInput(event.target.value);// inpute value
    } 


    function add(){
        setTask([...task,input])
        setInput("");// add button
    }

    function remove(index){
        setTask(task.filter((_,i)=>i !== index));//remove button

    }




    return(
        <>
        <div className="container">
            <h1>TO-Do-list</h1>
               <p>{time.toLocaleTimeString()}</p>{/*clean method to display date  current date */}

           <p>{time.toLocaleDateString("en-US", { weekday: "long" ,
                                                  year: "numeric",
                                                  month: "long",
                                                  day: "numeric" })}</p>
            <div>
            <input type='text' value={input} placeholder='Enter ur task' onChange={Inputtext}></input>
            <button onClick={add}>Add</button>
            </div>
            <ol>
                {task.map((task,index)=>
                    <li key={index}>
                        <span>{task}</span>
                        <button onClick={()=>remove(index)}>Delete</button>
                    </li>
                )}
            </ol>
        </div>
       
        </>
    )
}


export default AppList