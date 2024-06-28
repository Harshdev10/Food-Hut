import React ,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";    
import Body from "./components/Body"; 
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet, Link} from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/ProfileClass";
import ProfileFunctionalComponent from "./components/Profile";
import Shimmer from "./components/Shimmer";
// import Instamart from "./components/Instamart";

const Instamart = lazy(()=> import("./components/Instamart"));

const About = lazy(() => import("./components/About"));


const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <Suspense>
           <About />
           </Suspense>,
        children: [
          {
            path: "profile",
            element: <Profile/>,
          },
        ],
      }, 
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/instamart",
        element: ( 
          <Suspense fallback={<Shimmer />}>
           <Instamart/>
          </Suspense>
        )
      }
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


