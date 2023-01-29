import { useRouteError } from "react-router-dom";


const Error=()=>{ 
    const err = useRouteError(); 
    const {status, statusText} = err;
    return(
        <>
        <h1>oops!! Something went wrong</h1>
        <p>{ status +" : " +statusText}</p>
        </>
    )
}

export default Error;