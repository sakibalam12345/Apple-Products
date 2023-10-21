import Swal from "sweetalert2";



const Cartview = ({item,uploadeddata,setuploadeddata}) => {

    const {name,image,price,type,brand_name,_id} = item;

    const handledelete = _id =>{
      

      fetch(`http://localhost:5000/data/${_id}`,{
        method : 'DELETE',
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.deletedCount > 0){
          Swal.fire({
            title: 'success!',
            text: 'Successfully Removed',
            icon: 'Success',
            confirmButtonText: 'Cool'
          })
          const remaining = uploadeddata.filter(item=> item._id !== _id);
          setuploadeddata(remaining)

        }
       
      })
    }
    return (
        <div>
             <div className="overflow-x-auto text-black mt-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
      
        <th>Photo</th>
        <th>Brand Name</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
       
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{type}</div>
              <div className="text-sm opacity-50">{name}</div>
            </div>
          </div>
        </td>
        <td>
          {brand_name}
        
          
        </td>
        <td>{price}</td>
        <th>
          <button onClick={()=>handledelete(_id)} className="btn btn-ghost btn-xs">REMOVE</button>
        </th>
      </tr>
  
    </tbody>
  
    
  </table>
</div>
        </div>
    );
};

export default Cartview;