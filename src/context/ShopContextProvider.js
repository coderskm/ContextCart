import React, { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";
export const ShopContext = createContext();

const getDefaultcart = () => {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

function ShopContextProvider(props) {
  let storedCartItems = localStorage.getItem("cartItems");
  const [cartItems, setCartItems] = useState(JSON.parse(storedCartItems) || getDefaultcart());

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };
  const removeFromCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };
  const updateCartItems = (newAmount, id) => {
    setCartItems((prev) => ({ ...prev, [id]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const contextValue = { cartItems, addToCart, removeFromCart, updateCartItems, getTotalCartAmount };

  return <ShopContext.Provider value={contextValue}> {props.children} </ShopContext.Provider>;
}

export default ShopContextProvider;
