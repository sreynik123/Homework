
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";





import './index.css'
import { Provider } from "react-redux";
import Login from "./pages/Login.jsx";
import People from "./pages/People.jsx";
import AppMainlayout from "./layouts/Mainlayout.jsx";
import { store } from "./store.js";
import Home from "./pages/Home.jsx";
import { createBrowserRouter, RouterProvider, } from "react-router";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContectUs.jsx";
import TopRated from "./pages/TopRate.jsx";

import Upcomming from "./pages/Upcomming.jsx";

import NowPlaying from "./pages/NowPlaying.jsx";
import Moviepopular from "./pages/Moviepopular.jsx";

import Movidetail from "./pages/MovieDetail.jsx";





const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <AppMainlayout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/movie/:id",
        element: <Movidetail/>,
      },
      {
        path: "/Popular",
        element: <Moviepopular/>,
      },

      {
        path: "/People",
        element: <People/>,
      },
      {
          path:"/login",
          element:<Login/>
      },
      {
        path :"/contectUs",
        element:<ContactUs/>
      },
      
      {
        path:"/now-playing", 
        element:<NowPlaying/>,
      },
      {
        path:"/Top-rate",
        element:<TopRated/>
      },
      {
        path:"/up-comming",
        element:<Upcomming/>,
        
      
      },
      {
        path:"/aboutUs",
        element:<AboutUs/>
      },
      {
        path:"/Toprate",
        element:<Moviepopular/>
      },
      
      
      


    ],
  errorElement:<Error/>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>

    </Provider>
  </StrictMode>
);
