import { useContext } from "react";
import { dataContext } from "../context/DataContext";

const CartTotal = () => {
    const{cart}=useContext(dataContext)
    const Total=cart.reduce((acc,element)=>acc+element.price,0)
  return <div className="cartTotal">
    <h3>Total: {Total} $</h3>
  </div>
}

export default CartTotal
