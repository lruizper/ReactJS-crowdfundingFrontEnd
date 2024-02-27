import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SigninPage from "./pages/SigninPage.jsx";
import NewProjPage from "./pages/NewProjPage.jsx";

import App from "./components/App.jsx";


const router = createBrowserRouter(
  [{
    path: "/", element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/project/:id", element: <ProjectPage /> },
      { path: "/about", element: <AboutPage />},
      { path : "/contact", element: <ContactPage />},
      { path: "/login", element: <LoginPage />},
      { path: "/signin", element: <SigninPage />},
      { path: "/createproject", element: <NewProjPage />},
    ],},
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Here we wrap our app in the router provider so they render */}
    <RouterProvider router={router} />
  </React.StrictMode>);
