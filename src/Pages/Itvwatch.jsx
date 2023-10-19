import { FaApple } from 'react-icons/fa';


const Itvwatch = () => {
    return (
        <div className="mt-24 ">
            <h1 className="text-center flex justify-center items-center text-5xl font-bold"><FaApple></FaApple> tv+</h1>
            <p className='font-medium text-xl mb-8 text-center'>Watch Now</p>
            <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    
    <img src="https://i.ibb.co/RTbS1pD/5841d7002d3e3433a1b34302464da494053ff32e4333e74bf85546e5e172f6b1.jpg" className="w-full h-[600px] relative" />
    <h1 className='absolute text-5xl font-bold flex '><FaApple></FaApple> tv+</h1>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/LSg0XYz/messi-meets-america-apple-tv-plus.webp" className="w-full h-[600px] relative" />
    <h1 className='absolute text-5xl font-bold flex '><FaApple></FaApple> tv+</h1>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/BfWWxVt/p17567908-b-h8-af.jpg" className="w-full h-[600px] relative" />
    <h1 className='absolute text-5xl font-bold flex '><FaApple></FaApple> tv+</h1>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/YcB9y5t/qae-BGgbv-O34-OJce4-Qm-Qjrgfr7md.jpg" className="w-full h-[600px] relative" />
    <h1 className='absolute text-5xl font-bold flex '><FaApple></FaApple> tv+</h1>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Itvwatch;