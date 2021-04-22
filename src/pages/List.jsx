import React, { useState, useEffect } from 'react'
import './list.css'
import { FaRegTrashAlt } from "react-icons/fa";



function List() {
    const [clients, setClients] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(()=>{
        fetch(process.env.REACT_APP_API)
            .then(response => response.json())
            .then(data=> setClients(data))
    },[count])

    const deleteClient = async (e) => {
        
        await fetch(process.env.REACT_APP_API+e, {
            method: "DELETE",
    
        })
        setCount(count+1);
        console.log(e)
    }
   

    return (
        <div className="list-clients">
            <h1>Clients List</h1> 
            <ul className="list-container">
                {clients.map((item)=>(
                        <li key={item._id}>
                            <input type="text" value= {item.name} readOnly/>    
                            <input type="text" value= {item.contact} readOnly/> 
                            <input type="text" value= {item.telephone} readOnly/> 
                            <button className="del-btn" value={item._id} onClick={(e)=>deleteClient(e.target.value)}><FaRegTrashAlt />delete</button>
                            <hr/>
                        </li>
                ))}
               
               
            </ul>
        </div>
    )
}

export default List
