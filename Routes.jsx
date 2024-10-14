import { createBrowserRouter } from "react-router-dom";
import Root from "./src/components/Root";
import Home from "./src/components/Pages/Home/Home";
import Coffee from "./src/components/Pages/Coffee/Coffee";
import About from "./src/components/Pages/About/About";
import AddCoffee from "./src/components/Pages/AddCoffee/AddCoffee";
import UpdateCoffee from "./src/components/Pages/UpadateCoffee/UpdateCoffee";
import CoffeeDetails from "./src/components/Pages/CoffeeDetails/CoffeeDetails";
import Register from "./src/components/Pages/Register/Register";
import Login from "./src/components/Pages/Login/Login";
import Users from "./src/components/Pages/Users/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://coffee-store-server-kxuqsdl2n-mahedes-projects-fb0c4014.vercel.app/coffee')
      },
      {
        path: '/coffee',
        element: <Coffee></Coffee>,
        loader: () => fetch('https://coffee-store-server-kxuqsdl2n-mahedes-projects-fb0c4014.vercel.app/coffee')
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
        loader: ({ params }) => fetch(`https://coffee-store-server-kxuqsdl2n-mahedes-projects-fb0c4014.vercel.app/coffee/${params.id}`)
      },
      {
        path: '/detailsCoffee/:id',
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) => fetch(`https://coffee-store-server-kxuqsdl2n-mahedes-projects-fb0c4014.vercel.app/coffee/${params.id}`)
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('https://coffee-store-server-kxuqsdl2n-mahedes-projects-fb0c4014.vercel.app/users')
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