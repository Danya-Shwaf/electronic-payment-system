import { createBrowserRouter , RouterProvider } from "react-router-dom"
import Login from '../pages/login'
import Main from '../pages/main'
import Register from '../pages/register';
import Home from '../pages/home'
import Wallet from '../pages/wallet'
import Notification from '../pages/notification';
import Transfer from "../pages/transfer";
import TransferForm from '../pages/transferForm';

const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/Login", element: <Login /> },
  { path: "/Register", element: <Register /> },
  { path: "/Home", element: <Home /> },
  { path: "/Notification", element: <Notification /> },
  { path: "/Wallet", element: <Wallet /> },
  { path: "/Transfer", element: <Transfer /> },
  { path: "/TransferForm", element: <TransferForm /> },
]);

  
export default function AppRouter() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
