import React ,{useContext}from 'react';
import {PRODUCTS} from "../../products";
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import './cart.css';

import {useNavigate} from "react-router-dom"

export const Cart =() =>{
    const {cartItems, getTotalCartAmount} = useContext(ShopContext)
    let totalAmount=getTotalCartAmount();

    const navigate=useNavigate();
    return (
        <div className ="cart"> 
        <div>
          <h1> Your cart item </h1>
        </div>
        <div className="cartItems">
            {PRODUCTS.map((product) => {
                if(cartItems[product.id] !== 0){
                    return <CartItem data = {product} />;
                }
            })}
        </div>
        {totalAmount>0 ?(
        <div className=" chackout">
          
            <p> SubTotal: ${totalAmount}</p>
            <button onClick={() => navigate('/')}> Continue Shopping</button>
            <button onClick={() =>{
             navigate("/checkout")
            }}> {" "} Checkout {" "}</button>
        </div>
        ): (<h1> Your cart is empty </h1>)
        }
    </div>
   )
}