import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./layout/AppLayout.jsx";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter(
[
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <SignIn /> },
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/profile", element: <User /> },
        ],
      },
      { path: "404", element: <NotFound /> },
      { path: "*", element: <NotFound /> },
    ],
  },
],
{
  basename: "/ArgentBank-Frontend",
}
);