import Body from "../Body.js";
import { fireEvent, render, waitFor} from "@testing-library/react"; 
import { StaticRouter } from "react-router-dom/server.js";
import { Provider } from "react-redux";
import store from "../../utility/store.js";
import { RESTAURANT_DATA } from "../../mocks/data.js";
import "@testing-library/dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
            json: ()=>{
                return Promise.resolve(RESTAURANT_DATA);
            }
    });
});


test("Shimmer should load on the HomePage",()=>{
  
    const body = render(<StaticRouter>
    <Provider store={store}>
        <Body/> 
    </Provider>
   </StaticRouter>); 
   //console.log(body);
   const shimmer = body.getByTestId("shimmer"); 
   expect(shimmer.children.length).toBe(10);
   //console.log(shimmer);

});


test("Restaurants should load on the HomePage",async()=>{
  
    const body = render(<StaticRouter>
    <Provider store={store}>
        <Body/> 
    </Provider>
   </StaticRouter>); 

   await waitFor (()=> expect(body.getByTestId("Search-Btn")));
   
   const resList = body.getByTestId("res-list");
   expect(resList.children.length).toBe(15);
   

}); 

test("search for string(food) on the HomePage",async()=>{
  
  const body = render(<StaticRouter>
  <Provider store={store}>
      <Body/> 
  </Provider>
 </StaticRouter>); 

 await waitFor (()=> expect(body.getByTestId("search-input")));
 
 const searchInput = body.getByTestId("search-input");
 fireEvent.change ( searchInput,{ target:{
        value: "food",
 }
}); 
const searchBtn = body.getByTestId("Search-Btn"); 
fireEvent.click(searchBtn);
const resList = body.getByTestId("res-list");
expect(resList.children.length).toBe(1);

 

});