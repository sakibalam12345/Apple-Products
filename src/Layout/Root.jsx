import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";


const Root = () => {
    return (
        <div className="font-roboto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;