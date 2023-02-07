import Logo from "./assets/img/Food Villa.png";
import { useContext } from "react";
import UserContext from "../utility/userContext"; 

const FooterComponent =()=>{ 

   const { user } = useContext(UserContext);
    return(
       <h4>This site is developed by {user.name}</h4>
    )
 
 }

 export default FooterComponent;