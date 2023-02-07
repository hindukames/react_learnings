import { useState } from "react";

const Section =({title, description, isVisible, setIsVisible})=>{ 

 

    return(
       <div className=" border-2 border-black p-2 m-2"> 
            <h2 className="font-bold text-md">{title}</h2>
            { isVisible?  (<button className="underline p-1 m-1 cursor-pointer " onClick={()=> setIsVisible(false)}>Hide</button>):
            (<button className="underline p-1 m-1 cursor-pointer" onClick={()=> setIsVisible(true)}>show</button>)}
          
            { isVisible &&  <h3>{description}</h3> }
            
        </div>
    
    )
}

const Instamart =()=>{ 
    const [visibleSection,setVisibleSection] = useState("");
return(
    <div>
        <Section title={"About Instamart"} description={"This is my description page "} isVisible={visibleSection==="About Instamart"} setIsVisible={(value)=>{ value ? setVisibleSection("About Instamart"): setVisibleSection("")}}/>
        <Section title={"Team "} description={"This is my Team page "} isVisible={visibleSection==="Team"} setIsVisible={(value)=>{ value ? setVisibleSection("Team"): setVisibleSection("")}}/>
        <Section title={"Careers"} description={"This is my careers page "} isVisible={visibleSection==="Careers"} setIsVisible={(value)=>{value ? setVisibleSection("Careers"): setVisibleSection("")}}/>
    </div>
);

}; 

export default Instamart;