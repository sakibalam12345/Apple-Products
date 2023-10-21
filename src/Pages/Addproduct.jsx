import Swal from "sweetalert2";


const Addproduct = () => {

    const handlesubmit = (e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const type = form.type.value;
        const description = form.short.value;
        const price = form.price.value;
        const photo = form.photo.value;
        console.log(name,brand_name,type,description,price,photo)

        const addproduct = {brand_name,name,type,description,price,photo}

        fetch('http://localhost:5000/products',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(addproduct)
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Products Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
           }
        })

    }
    return (
        <div>
            <h1 className="text-center text-3xl font-semibold mt-4 underline">Add Your Product</h1>


           
                <form onSubmit={handlesubmit}>

 <div className=" lg:flex justify-around items-center mt-10">
            
  <div className="form-control w-full max-w-xs ">
  <span className="label-text">Brand Name</span>
  <select name="brand_name" className="select select-bordered">
    <option  disabled selected>Pick Brand</option>
    <option >iPhone</option>
    <option>Watch</option>
    <option>iPad</option>
    <option>Vision Pro</option>
    <option>MacBook Air</option>
    <option>AirPods Pro</option>
  </select>
  </div> 
  <div className="form-control w-full max-w-xs ">
  <span className="label-text">Type</span>
  <select name="type" className="select select-bordered">
    <option  disabled selected>Pick Type</option>
    <option >AirPods</option>
    <option>phone</option>
    <option>Watch</option>
    <option>iPad</option>
    <option>Vision Pro</option>
    <option>Laptop</option>
  </select>
  </div> 

</div>

 <div className="lg:flex justify-around items-center mt-10">
            
  <div className="form-control w-full max-w-xs ">
  <span className="label-text">Name</span>
 <input className="border-2 py-3 rounded-lg pl-3" name="name" type="text" />
  </div> 
  <div className="form-control w-full max-w-xs ">
  <span className="label-text">Price</span>
  <input className="border-2 py-3 rounded-lg pl-3" name="price" type="text" />
  </div> 

</div>

 <div className="lg:flex justify-around items-center mt-10">
            
  <div className="form-control w-full max-w-xs ">
  <span className="label-text">Short Description</span>
  <input className="border-2 py-3 rounded-lg pl-3" name="short" type="text" />
  </div> 
  <div className="form-control w-full max-w-xs ">
  <span className="label-text">Photo Url</span>
  <input className="border-2 py-3 rounded-lg pl-3" name="photo" type="text" />
  </div> 

</div>
<div className="flex justify-center mt-20">
<button className="btn">submit</button>
</div>

</form>

            </div>
            
       

    );
};

export default Addproduct;