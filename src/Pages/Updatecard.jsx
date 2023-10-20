import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";




const Updatecard = () => {

    const updatedata = useLoaderData();
    console.log(updatedata)

    const handleupdate = e =>{
        e.preventDefault();
        const form = e.target;
        const brand = form.brand.value;
        const model = form.model.value;
        const type = form.type.value;
        const price = form.price.value;
        const photo = form.photo.value
      
        const updateinfo = {brand,model,type,price,photo}
        console.log(updateinfo)
        fetch(`http://localhost:5000/products/updatecard/${updatedata._id}`,{
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updateinfo)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'successfully updated',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  
            }
           
        })
     return   form.reset()
    }

    
    return (
        <div>
            <h1 className="font-bold text-lg text-center pt-7 pb-2 underline">Update your Products</h1>
            
          
            <form onSubmit={handleupdate}>
            <div className="flex justify-around items-center mt-10" >
                <div >
                    <p className="font-medium text-base">Brand Name</p>
                <input className="border-2 w-[500px] py-1 rounded-md pl-2" name="brand" defaultValue={updatedata.brand_name} type="text" />
                </div>
                <div>
                    <p className="font-medium text-base">Model Name</p>
                <input className="border-2 w-[500px] py-1 rounded-md pl-2" name="model" defaultValue={updatedata.name} type="text" />
                </div>
             
            </div>
            <div className="flex justify-around items-center mt-5" >
                <div >
                    <p className="font-medium text-base">Type</p>
                <input className="border-2 w-[500px] py-1 rounded-md pl-2" name="type" defaultValue={updatedata.type} type="text" />
                </div>
                <div>
                    <p className="font-medium text-base">Price</p>
                <input className="border-2 w-[500px] py-1 rounded-md pl-2" name="price" defaultValue={updatedata.price} type="text" />
                </div>
               
              
            </div>
            <div className="ml-32 mt-2">
            <p className="font-medium text-base">Photo</p>
                <input className="border-2 w-[500px] py-1 rounded-md pl-2 "  placeholder="Photo Url" name="photo" defaultValue={updatedata.image} type="text" />
            </div>
          <div className="flex justify-center items-center mt-10">
            <button className="btn">Submit</button>
          </div>
          </form>
        </div>
    );
};

export default Updatecard;