import React  from "react"; 

class ProfileClass extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            userInfo:{
                login:"Dummy",
                avatar_url:"Dummy",
            },
        };
        console.log("child constructor "+this.props.name);
    } 
    async componentDidMount(){ 


        this.timer = setInterval(()=>{
            console.log("This is a Timer Message");
        },1000);

        const data = await fetch(" https://api.github.com/users/hindukames"); 
        const json = await data.json(); 
        this.setState({
            userInfo: json,
        });
        console.log(json);
        console.log(this.state.userInfo);

        console.log(" child Component Did Mount "+this.props.name)
    }
    componentDidUpdate(){
        console.log("Child Component Did Update")
    } 
    componentWillUnmount(){ 
        clearInterval(this.timer);
        console.log("Component Unmount");
    }
    // We dont immutate the state varaibales directly. It is only by the setState to let know of the react to change the state
    render(){ 
        console.log("child render "+this.props.name);
        return (
             <>
                <h1>This is a Profile Class Component {this.state.userInfo.login} clicked </h1>
                <img src={this.state.userInfo.avatar_url}></img>
    
            </>
           
            )
    }
} 
export default ProfileClass;