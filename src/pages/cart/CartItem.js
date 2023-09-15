import React, {useContext} from "react";
import {ShopContext} from "../../context/ShopContextProvider";


function CartItem(props) {
  const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItems } = useContext(ShopContext);
  return (
    <div className="cartItem" key={id}>
      <img src={productImage} alt="product" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input value={cartItems[id]} onChange={(e) => updateCartItems(Number(e.target.value), id)} />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
