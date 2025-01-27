import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/app/dashboard";
import { SigIn } from "./pages/auth/sign-in";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { SigUp } from "./pages/auth/sign-up";
import { Orders } from "./pages/app/orders/orders";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            { path: '/', element: <Dashboard />},
            { path: '/orders', element: <Orders />}
        ]
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            { path: '/sign-in', element: <SigIn />},
            { path: '/sign-up', element: <SigUp />}
        ]
    }
])