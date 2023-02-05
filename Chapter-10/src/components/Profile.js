import { useEffect, useState } from "react";

const Profile =(props)=>{ 
    const [count,setCount] = useState(0);

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("This is a functional timer");
        },1000);

        return()=>{
            clearInterval(timer);
        }
    },[]);
    
    return(
        <>
           <h1>This is my profile page {props.name} clicked {count}</h1>
           <button onClick={()=>setCount(1)}>Click</button>
        </>
      
    )
}

export default Profile;