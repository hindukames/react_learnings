const Title = ()=>(
    <a href="/">
    <img 
    className="logo" 
    src ="https://png.pngtree.com/png-vector/20190830/ourmid/pngtree-crossed-spoon-and-fork-restaurant-and-food-logo-design-png-image_1716397.jpg" 
    alt="Food Logo"></img>
    </a>
 ); 

 
const HeaderComponent =() =>{
    return (
    <div className="header">
       <Title/>
       <div className="nav-items">
          <ul>
             <li>Home</li>
             <li>About</li>
             <li>Contact</li>
             <li>cart</li>
          </ul>
       </div>
       
    </div>  );
 } 
export default HeaderComponent;
