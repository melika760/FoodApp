import React,{Fragment, useState} from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  const[CartIsShown, setCartIsShown]=useState(false)
  function hideCartHandler(){
    setCartIsShown(false)
  }
  function ShowCartHandler(){
    setCartIsShown(true)
  }
  return (
  <Fragment>
    {CartIsShown && <Cart onClose={hideCartHandler}/>}
    <Header onShow={ShowCartHandler}/>
    <main> <Meals/></main>
   
  </Fragment>
  );
}

export default App;
