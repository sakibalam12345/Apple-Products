import { Link } from "react-router-dom";


const Homecard = ({card}) => {
    const {brand_name,image,details} = card;
    return (
        <div >
    <Link to={`/cardproducts/${brand_name}`}>   
   <div className="card w-full bg-base-100 shadow-xl" >
  <figure >
  <img  src={image} alt="" className="rounded-xl h-[400px]" />
  </figure>
  <div className="card-body items-center text-center">
  <h2 className="card-title font-extrabold text-4xl">{brand_name}</h2>
   <p className="text-2xl font-medium">{details}</p>
    
  </div>
</div>
</Link>
        </div>
    );
};

export default Homecard;