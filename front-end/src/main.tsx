import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import About from "./pages/About.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Contact from "./pages/Contact.tsx";
import Posts from "./pages/Posts.tsx";
import Home from "./pages/Home.tsx";
import DashBord from "./pages/AdminDashBord.tsx";
import Post from "./components/plog/Post.tsx";

// import {
//     CreatePostSection,
//     // CreateProjectSection,
// } from "./dialogs/admin/AddProject.tsx";

import CreateProjectSection from "./dialogs/admin/addProjectModal.tsx";
import CreatePostSection from "./dialogs/admin/addPostModal.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <h1>Error dude</h1>,

        children: [
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/posts",
                children: [
                    { index: true, element: <Posts /> },
                    { path: ":postId", element: <Post /> },
                ],
            },
            {
                path: "/",
                element: <Home />,
            },
            {
                // todo auth with JWT
                path: "dash-bord",
                element: <DashBord />,
                children: [
                    {
                        path: "new-project",
                        element: <CreateProjectSection />,
                    },
                    {
                        path: "new-post",
                        element: <CreatePostSection />,
                    },
                ],
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
