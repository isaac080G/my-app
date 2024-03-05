import { useContext } from "react";
import { dataContext } from "../context/DataContext";

import CartElement from "./CartElement"
import CartTotal from "./CartTotal"
import "./CartContent.css"

const CartContent = () => {
  const{cart}=useContext(dataContext)
  

  
  return cart.lenght > 0? (
    <>
      <CartElement></CartElement>
      <CartTotal></CartTotal>
    </>
  ):(
    <h2 className="cart-message-center">Carrito vacio</h2>
  )
}

export default CartContent
