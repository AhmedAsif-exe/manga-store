import { json, redirect, useLoaderData, defer, Await } from "react-router-dom";
import { getAuthToken } from "../components/utils/auth";
import { Suspense } from "react";
import Loading from "../components/utils/Loading";
import OrdersContainer from "../components/OrdersPage/OrdersContainer";
const OrdersHistory = (props) => {
  const { response } = useLoaderData();
  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={response}>
        {(orders) => <OrdersContainer orders={orders} />}
      </Await>
    </Suspense>
  );
};

export default OrdersHistory;

const deferLoader = async (request) => {
  const url = new URL(request.url);
  const mode = url.pathname;
  const token = getAuthToken();
  if (!token || token === "EXPIRED") {
    return redirect("/auth");
  }

  const email = localStorage.getItem("email");

  try {
    const response = await fetch("http://localhost:8080" + mode, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
      mode: "cors",
    });
    if (!response.ok) {
      throw json({ status: 500 }, { message: "Something Went Wrong" });
    }
    const data = await response.json();
    return data.orders;
  } catch (e) {
    throw json({ status: 500 }, { message: "Something Went Wrong" });
  }
};
export function loader({ request }) {
  return defer({ response: deferLoader(request) });
}

export async function action({ request }) {
  const order = Object.fromEntries(await request.formData());
  const email = localStorage.getItem("email");
  const response = await fetch("http://localhost:8080/add-orders", {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, order }),
    mode: "cors",
  });
  return null;
}
