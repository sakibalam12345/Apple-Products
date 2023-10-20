import { useLoaderData } from "react-router-dom";
import Cardview from "./Cardview";



const Cardproducts = () => {

    
    const allproducts = useLoaderData();
    // console.log(brand_name,allproducts)
    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold text-center mt-16 underline mb-6">Explore Our New Models Here</h1>
                <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    
    <img src="https://i.ibb.co/1MGQ8YJ/i-Phone-Hero-0.jpg" className="w-full h-[600px] " />
   
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/P6C9dqc/56002-114567-Series-9-features-xl.jpg" className="w-full h-[600px] " />
   
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/hfPXJPJ/Screen-Shot-2023-06-05-at-1-10-19-PM.png" className="w-full h-[600px] " />
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/ynN6yPx/Apple-Air-Pods-Pro-2nd-gen-hero-220907-big-jpg-large.jpg" className="w-full h-[600px]" />
   
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
            </div>
            </div>
            
            <div className="grid grid-rows-1 justify-center space-y-11">
                {
                    allproducts.map(products=> <Cardview key={products._id} products={products}></Cardview>)
                }
            </div>
        </div>
    );
};

export default Cardproducts;