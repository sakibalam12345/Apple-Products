import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Errorpage from "../Pages/Errorpage";
import Cardproducts from "../Pages/Cardproducts";





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

           }
          
        ]
    }
])

export default router;