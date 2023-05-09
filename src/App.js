import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';



 const App=()=> {
   const[robots,setRobots]=useState([])
   const[searchfield,setSearchfeild]=useState('')

    const onSearchChange=(event)=>{
        setSearchfeild(event.target.value) 
    }
   

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(products=>setRobots(products))
    })
        const filterRobots=robots.filter(robots=>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        });
       
        return ( 
            <div className="tc">
                <h1>ROBOFRIENDS</h1>
                <SearchBox searchfield={onSearchChange}/>
                <CardList robots={filterRobots} />
                 {/* <CardList robots={filterEmail} /> */}
            </div>
        )
    }

export default App;