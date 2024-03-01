import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Balance from "./pages/Balance";
import UserProfile from "./pages/UserProfile";
import Investments from "./pages/Investments";
import Cart from "./pages/Cart";
import BaseLayout from "./components/BaseLayout";
import CartContextProvider from "./context/CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/userprofile",
    element: <BaseLayout />,
    children: [{ index: true, element: <UserProfile /> }],
  },
  {
    path: "/wallet/current-investments",
    element: <BaseLayout />,
    children: [{ index: true, element: <Investments /> }],
  },
  {
    path: "/wallet/balance",
    element: <BaseLayout />,
    children: [{ index: true, element: <Balance /> }],
  },
  {
    path: "/cart",
    element: <BaseLayout />,
    children: [{ index: true, element: <Cart /> }],
  },
]);

function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

export default App;
