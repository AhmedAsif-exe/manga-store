import { useReducer } from "react";
import { cartInitializer } from "./cart-initializer";
import CartContext from "./cart-context";

const defaultCartState = cartInitializer() || { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  let cartState = {};
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    cartState = {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
    localStorage.setItem("cart", JSON.stringify(cartState));
    return cartState;
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    cartState = {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
    localStorage.setItem("cart", JSON.stringify(cartState));
    return cartState;
  }

  if (action.type === "CLEAR") {
    localStorage.removeItem("cart");
    return { items: [], totalAmount: 0 };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const incrementItemToCartHandler = (item) => {
    if (
      cartState.items.reduce(
        (totalItems, product) => totalItems + product.amount,
        0
      ) +
        1 >
      10
    ) {
      return;
    }
    dispatchCartAction({
      type: "ADD",
      item: { ...item, amount: 1, price: item.price },
    });
  };
  const addItemToCartHandler = (item) => {
    if (
      cartState.items.reduce(
        (totalItems, product) => totalItems + product.amount,
        0
      ) +
        item.amount >
      10
    ) {
      return "Can Not Exceed Limit(10 Orders)";
    }
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const generateSummaryHandler = () => {
    let summary = cartContext.items.reduce(
      (accumilator, item) =>
        accumilator +
        `${item.amount} ${item.amount === 1 ? "copy" : "copies"} of "${
          item.title
        }($${item.price.toFixed(2)})". `,
      ""
    );
    const moment = new Date();
    const date = moment.toLocaleDateString();
    const time = moment.toLocaleTimeString();

    return {
      summary: summary,
      time,
      date,
      total: `$${cartContext.totalAmount}`,
    };
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
    incrementItem: incrementItemToCartHandler,
    generateSummary: generateSummaryHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
