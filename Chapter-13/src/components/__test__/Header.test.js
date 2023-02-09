import Header from "../Header.js";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../../utility/store";
import {StaticRouter} from "react-router-dom/server";
 
test("Logo should be loaded on rendering",()=>{

    //Load Loader
    const header = render ( 
    <StaticRouter>
    <Provider store = {store}>
        <Header/>
    </Provider>
    </StaticRouter>
    );
    //console.log(header);
    const logo = header.getAllByTestId("Logo"); 
    //console.log(logo);
    expect (logo[0].src).toBe("http://localhost/dummy.png");


}) 

test("Online status should be green on rendering",()=>{

    const header = render ( 
    <StaticRouter>
    <Provider store = {store}>
        <Header/>
    </Provider>
    </StaticRouter>
    );
    const onlineStatus = header.getByTestId("online-status");
    expect (onlineStatus.innerHTML).toBe("Online");

    
}); 

test("Cart items should be default to 0 on rendering header",()=>{

    const header = render ( 
    <StaticRouter>
    <Provider store = {store}>
        <Header/>
    </Provider>
    </StaticRouter>
    );
    const cart= header.getByTestId("cart");
    expect (cart.innerHTML).toBe("cart 0");

    
});