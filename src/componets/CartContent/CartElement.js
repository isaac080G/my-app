import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import React from 'react'
import Products from "../Products/Products";

const CartElement = () => {
    const{cart}=useContext(dataContext)
  return (

      cart.map((product)=>{
        return(
            <div className="cartContent" key={product.id}>
                <img src={product.img} alt="photo"></img>
                <h3 className="name">{product.name}</h3>
                <h4 className="price">{product.price}$</h4>

            </div>
        )
      })

  )
}

export default CartElement
