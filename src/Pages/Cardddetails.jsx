import { FaApple } from "react-icons/fa";
import { useLoaderData,  } from "react-router-dom";



const Cardddetails = () => {

  
    const singledata = useLoaderData();
    console.log(singledata)
    
    return (
        <div className="bg-black text-gray-400">
            <h1 className="flex justify-center text-white items-center font-bold text-3xl underline pb-10"><FaApple></FaApple>{singledata.brand_name}</h1>
            <p className="font-medium text-base text-center pb-3 underline">{singledata.name}</p>
          <img className="w-[600px] mx-auto pb-8" src={singledata.image} alt="" />
          <p className="font-medium text-base text-center pb-2">Available Color : {singledata.color}</p>
          <p className="font-medium text-base text-center pb-2">Camera : {singledata.camera}</p>
          <p className="font-medium text-base text-center pb-2">Display: {singledata.display}</p>
          <p className="font-medium text-base text-center pb-2">$ {singledata.price}</p>
          <div className="flex justify-center items-center pb-32 pt-4">
          <button className="btn ">ADD TO CART</button>
          </div>

          
            
        </div>
    );
};

export default Cardddetails;