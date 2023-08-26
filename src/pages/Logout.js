import { redirect } from "react-router-dom";

export function logoutAction({ request }) {
  localStorage.removeItem("expiration");
  localStorage.removeItem("token");
  return redirect("/");
}
