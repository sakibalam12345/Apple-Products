import { useLoaderData } from "react-router-dom";
import Cartview from "./Cartview";
import { useState } from "react";


const Mycart = () => {


    const cartdata = useLoaderData();
    const [uploadeddata,setuploadeddata] = useState(cartdata)
   
    return (
        <div className=" text-black ">
            <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-center pt-6 pb-10">My Cart</h1>
            <p className="text-2xl font-semibold text-center pb-6">Items Added({uploadeddata.length})</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
                {
                    uploadeddata.map(item => <Cartview 
                        key={item._id}
                        uploadeddata={uploadeddata}
                        setuploadeddata={setuploadeddata}
                         item={item}>

                         </Cartview>)
                }
            </div>
           
        </div>
    );
};

export default Mycart;