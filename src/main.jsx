import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';

import Category from './Pages/Category/Category';

import Products from './Pages/Products';
import AuthProviders from './Providers/AuthProviders';


import Login from './Authentication/Login/Login';
import Signup from './Authentication/Signup/Signup';
import ItemDetails from './Pages/ItemCard/ItemDetails';
import Cart from './Pages/Cart/Cart';


import ProductForm from './Pages/Product/ProductForm';
import Root from './Root';
import AddProduct from './Pages/Product/AddProduct';
import PrivateRoutes from './PrivateRoutes';
import UpdateProduct from './Pages/Product/UpdateProduct';
import ErrorPage from './ErrorPage';
import Brands from './Pages/Brandadd/Brands';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/addproduct",
        element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>,
        children: [
          {
            path: "brands",
            element: <Brands />,
            loader: () => fetch('https://b8a10-brandshop-server-side-moshiur-rahman-mirage.vercel.app/brands')
          },
          {
            path: "category",
            element: <Category />,
            loader: () => fetch('https://b8a10-brandshop-server-side-moshiur-rahman-mirage.vercel.app/category')
          },
          {
            path: "productform",
            element: <ProductForm />,

          },


        ]
      },
      {
        path: "/cart/:email",
        element: <PrivateRoutes><Cart /></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-moshiur-rahman-mirage.vercel.app/cart/${params.email}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/products/:brandname",
        element: <Products />,
        loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-moshiur-rahman-mirage.vercel.app/products/${params.brandname}`),
      },
      {
        path: "/products/:brandname/:_id",
        element: <PrivateRoutes><ItemDetails /></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-moshiur-rahman-mirage.vercel.app/products/${params.brandname}/${params._id}`),
      },
      {
        path: "products/:brandname/updateproduct:_id",
        element: <UpdateProduct />,
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
