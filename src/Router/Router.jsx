import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Errorpage from "../Pages/Errorpage";
import Cardproducts from "../Pages/Cardproducts";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Cardddetails from "../Pages/Cardddetails";
import Updatecard from "../Pages/Updatecard";
import Mycart from "../Pages/Mycart";

import Addproduct from "../Pages/Addproduct";
import Privateroute from "../Pages/Privateroute";





const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        errorElement : <Errorpage></Errorpage>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : ()=> fetch('https://apple-server-kappa.vercel.app/brandcard')
            },
            {
                path : '/addproduct',
                element : <Privateroute><Addproduct></Addproduct></Privateroute>
            },
           {
            path : '/cardproducts/:brand_name',
            element : <Cardproducts></Cardproducts>,
            loader : ({params})=> fetch(`https://apple-server-kappa.vercel.app/products/${params.brand_name}`)
           },
           { 
            path : '/carddetails/:id',
            element : <Privateroute><Cardddetails></Cardddetails></Privateroute>,
            loader : ({params})=>fetch(`https://apple-server-kappa.vercel.app/products/carddetails/${params.id}`)

           },
           {
            path : '/updatecard/:id',
            element : <Privateroute><Updatecard></Updatecard></Privateroute>,
            loader : ({params})=> fetch(`https://apple-server-kappa.vercel.app/products/updatecard/${params.id}`)

           },
           {
            path : '/mycart',
            element : <Privateroute><Mycart></Mycart></Privateroute>,
            loader : ()=>fetch('https://apple-server-kappa.vercel.app/data')
           },
           {
            path : '/login',
            element : <Login></Login>
           },
           {
            path : '/register',
            element : <Register></Register>
           }
          
        ]
    }
])

export default router;