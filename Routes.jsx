import { createBrowserRouter } from "react-router-dom";
import Root from "./src/components/Root";
import Home from "./src/components/Pages/Home/Home";
import Coffee from "./src/components/Pages/Coffee/Coffee";
import About from "./src/components/Pages/About/About";
import AddCoffee from "./src/components/Pages/AddCoffee/AddCoffee";
import UpdateCoffee from "./src/components/Pages/UpadateCoffee/UpdateCoffee";
import CoffeeDetails from "./src/components/Pages/CoffeeDetails/CoffeeDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=>fetch('http://localhost:5000/coffee')
        },
        {
            path: '/coffee',
            element: <Coffee></Coffee>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
          path: '/addCoffee',
          element: <AddCoffee></AddCoffee>
        },
        {
          path: '/updateCoffee/:id',
          element: <UpdateCoffee></UpdateCoffee>,
          loader: ({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
        },
        {
          path: '/detailsCoffee/:id',
          element: <CoffeeDetails></CoffeeDetails>,
          loader: ({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
        }
      ]
    },
  ]);

const Routes = () => {
    return (
        <div>
            
        </div>
    );
};

export default Routes;