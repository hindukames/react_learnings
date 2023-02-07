import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";
import { Component} from "react";
import UserContext from "../utility/userContext";

class About extends Component{
    constructor(props){
        super(props); 
        console.log("Parent Constructor");
    }  
    componentDidMount(){
        console.log("Parent DidMount");
    }
    render(){ 
        console.log("Parent render");
        return (
            <>
            <ProfileClass name={"FirstChild"}/>
            <Profile/>
            <h1> This is my About page</h1>
            <UserContext.Consumer>
                {({user})=> <h4>Hi, all this is {user.name} </h4>}
            </UserContext.Consumer>
            </>
           
        )
    }
}
export default About;