import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Addproduct from './Pages/Addproduct';
import Cart from './Pages/Cart';
import Login from './Authentication/Login/Login';
import Root from './Root';
import AuthProviders from './Providers/AuthProviders';
import Signup from './Authentication/Signup/Signup';
import Privateroutes from './Privateroutes';
import Brands from './Pages/Brands';
import Productform from './Pages/Productform';
import Category from './Pages/Category';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/addproduct",
        element:<Privateroutes><Addproduct></Addproduct></Privateroutes>,
        children:[
          {
            path:"brands",
            element:<Brands/>,
            loader:()=>fetch('http://localhost:5000/brands')
          },
          {
            path:"category",
            element:<Category/>,
            loader:()=>fetch('http://localhost:5000/category')
          },
          {
            path:"productform",
            element:<Productform/>,
            
          }
        ]
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup/>
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
