

const Cardview = ({products}) => {
    console.log(products);
    const {name,brand_name,image,type,price} = products;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img className="w-[300px] h-[300px]" src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cardview;