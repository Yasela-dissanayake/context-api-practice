import React, { createContext, useState } from "react";

export const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = (count) => {
    setCartCount(count);
  };

  return (
    <CartContext.Provider value={{ cartCount, updateCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
