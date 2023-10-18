import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Errorpage from "../Pages/Errorpage";




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
            
        ]
    }
])

export default router;