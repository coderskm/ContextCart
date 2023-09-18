import React from 'react'
import { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/ShopContextProvider';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="subtotal-style">
            Total: <b>${totalAmount}</b>
          </p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart Is Empty</h1>
      )}
    </div>
  );
}

export default Cart