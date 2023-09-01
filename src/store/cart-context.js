import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
  incrementItem: (item) => {},
  generateSummary: () => {},
});

export default CartContext;
