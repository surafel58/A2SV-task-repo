import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root, { loader as rootLoader, action as rootAction, loader, action } from "./routes/root";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader } from "./routes/contact";
import EditContact, {action as editAction} from "./routes/edit";
import {action as deleteAction} from "./routes/delete";
import Intro from "./routes/intro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    action: rootAction,
    children: [
      { 
        index: true, element: <Intro/> 
      },

      {
        path: "contacts/:contactId",
        element: <Contact/>,
        loader: contactLoader
      },

      {
        path: "contacts/:contactId/edit",
        element: <EditContact/>,
        loader: contactLoader,
        action: editAction
      },

      {
        path: "contacts/:contactId/destroy",
        action: deleteAction
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);