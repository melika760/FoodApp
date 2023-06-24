import React,{ useState} from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
  const[CartIsShown, setCartIsShown]=useState(false)
  function hideCartHandler(){
    setCartIsShown(false)
  }
  function ShowCartHandler(){
    setCartIsShown(true)
  }
  return (
  <CartProvider>
    {CartIsShown && <Cart onClose={hideCartHandler}/>}
    <Header onShow={ShowCartHandler}/>
    <main> <Meals/></main>
   
  </CartProvider>
  );
}

export default App;
