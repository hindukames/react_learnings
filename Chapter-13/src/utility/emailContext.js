import { createContext } from "react"; 

const emailContext = createContext([
    { id: 1, text: "My first email" },
    { id: 2, text: "My second email" }
  ]); 

  export default emailContext;