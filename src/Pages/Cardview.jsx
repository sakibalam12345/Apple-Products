import { FaApple } from 'react-icons/fa';

const Cardview = ({products}) => {
    console.log(products);
    const {name,brand_name,image,type,price} = products;
    return (
        <div> 
            <p className="text-center font-semibold text-2xl mb-2">{name}</p>
            <div className="card w-full lg:card-side bg-base-100 shadow-xl">
  <figure><img className="w-96 h-96"  src={image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title pt-20 font-medium text-lg"><FaApple></FaApple> {brand_name}</h2>
    <p className='font-medium text-lg'>{name}</p>
    <p className='font-medium text-lg'>{type}</p>
    <p className='font-medium text-lg'>$ {price}</p>
    <div className="rating">
  <input type="radio" name="rating-1" className="mask mask-star" checked />
  <input type="radio" name="rating-1" className="mask mask-star" checked />
  <input type="radio" name="rating-1" className="mask mask-star" checked />
  <input type="radio" name="rating-1" className="mask mask-star"  checked/>
  <input type="radio" name="rating-1" className="mask mask-star" checked />
</div>
    <div className="card-actions justify-end">
      <button className="btn ">DETAILS</button>
      <button className="btn ">UPDATE</button>
    </div>
  </div>
</div>
     
        </div>
    );
};

export default Cardview;