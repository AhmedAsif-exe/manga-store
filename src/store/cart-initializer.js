export function cartInitializer() {
  const cart = localStorage.getItem("cart");
  return JSON.parse(cart);
}
