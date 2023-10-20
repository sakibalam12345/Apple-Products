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





const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        errorElement : <Errorpage></Errorpage>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : ()=> fetch('http://localhost:5000/brandcard')
            },
           {
            path : '/cardproducts/:brand_name',
            element : <Cardproducts></Cardproducts>,
            loader : ({params})=> fetch(`http://localhost:5000/products/${params.brand_name}`)
           },
           { 
            path : '/carddetails/:id',
            element : <Cardddetails></Cardddetails>,
            loader : ({params})=>fetch(`http://localhost:5000/products/carddetails/${params.id}`)

           },
           {
            path : '/updatecard/:id',
            element : <Updatecard></Updatecard>,
            loader : ({params})=> fetch(`http://localhost:5000/products/updatecard/${params.id}`)

           },
           {
            path : '/mycart',
            element : <Mycart></Mycart>
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