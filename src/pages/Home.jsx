import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Home = () => {
  const { updateCartCount } = useContext(CartContext);

  const handleBuyTokens = () => {
    updateCartCount((prev) => prev + 1);
  };

  return (
    <div className="text-center mt-5">
      <button className="btn btn-primary" onClick={handleBuyTokens}>
        Buy Tokens
      </button>
    </div>
  );
};

export default Home;
