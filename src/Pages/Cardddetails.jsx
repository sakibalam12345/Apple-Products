import { FaApple } from "react-icons/fa";
import { useLoaderData,  } from "react-router-dom";
import Swal from "sweetalert2";



const Cardddetails = () => {

  
    const singledata = useLoaderData();
    const {name,image,color,camera,display,price,chip,capacity,type,brand_name,sensor} = singledata;
    console.log(singledata)
    const postdata = {name,image,color,camera,display,price,chip,capacity,type,brand_name,sensor}

    const handlepostdata =()=>{
        fetch('http://localhost:5000/data',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(postdata)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Successfully Added To Cart',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            console.log(data)
        })
    }
    
    return (
        <div className="bg-black text-gray-400">
            <h1 className="flex justify-center text-white items-center font-bold text-3xl underline pb-10"><FaApple></FaApple>{brand_name}</h1>
            <p className="font-medium text-base text-center pb-3 underline">{name}</p>
          <img className="w-[600px] mx-auto pb-8" src={image} alt="" />
          <p className="font-medium text-base text-center pb-2"> {type}</p>
          <p className="font-medium text-base text-center pb-2"> {color}</p>
          <p className="font-medium text-base text-center pb-2"> {capacity}</p>
          <p className="font-medium text-base text-center pb-2"> {camera}</p>
          <p className="font-medium text-base text-center pb-2"> {display}</p>
          <p className="font-medium text-base text-center pb-2"> {sensor}</p>
          <p className="font-medium text-base text-center pb-2"> {chip}</p>
          <p className="font-medium text-base text-center pb-2">$ {price}</p>
          <div className="flex justify-center items-center pb-32 pt-4">
          <button onClick={handlepostdata} className="btn ">ADD TO CART</button>
          </div>

          
            
        </div>
    );
};

export default Cardddetails;