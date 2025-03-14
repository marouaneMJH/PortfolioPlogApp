import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import About from "./pages/about.tsx";

const router= createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <h1>Error dude</h1>
    },
    {
        path: "/about",
        element: <About />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
