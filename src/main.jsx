import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Root } from "./Layout/Root";


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {index: true, element: <Home/>}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={routes} />
);
