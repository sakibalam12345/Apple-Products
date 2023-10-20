import { useLoaderData } from "react-router-dom";
import Cartview from "./Cartview";


const Mycart = () => {


    const uploadeddata = useLoaderData();
    console.log(uploadeddata)
    return (
        <div className="bg-black text-gray-400 ">
            <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-center pt-6 pb-10">My Cart</h1>
            <p className="text-2xl font-semibold text-center pb-6">Items Added({uploadeddata.length})</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
                {
                    uploadeddata.map(item => <Cartview key={item._id} item={item}></Cartview>)
                }
            </div>
           
        </div>
    );
};

export default Mycart;