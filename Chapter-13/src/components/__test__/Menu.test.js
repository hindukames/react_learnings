import Body from "../Body.js";
import { fireEvent, render, waitFor} from "@testing-library/react"; 
import { StaticRouter } from "react-router-dom/server.js";
import { Provider } from "react-redux";
import store from "../../utility/store.js";
import { MENU_DATA } from "../../mocks/data.js";
import "@testing-library/dom";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
            json: ()=>{
                return Promise.resolve(MENU_DATA);
            }
    });
});


test("Adding items to the cart should reflect on the MenuPage",async()=>{
  
    const body = render(<StaticRouter>
    <Provider store={store}>
        <Header/>
        <RestaurantMenu/> 
    </Provider>
   </StaticRouter>); 

await waitFor(()=> expect(body.getByTestId("menu")));

const addBtn = body.getAllByTestId("addBtn");
fireEvent.click(addBtn[0]);
fireEvent.click(addBtn[2]);
const cart = body.getByTestId("cart");

expect(cart.innerHTML).toBe("cart 2");

});