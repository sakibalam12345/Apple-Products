import { useLoaderData } from "react-router-dom";
import Homecard from "./Homecard";


const Brandcard = () => {
    const allbrandcard = useLoaderData()
    return (
        <div>
            <h1 className="text-black font-bold text-4xl text-center pb-28 underline">Explore Our Products</h1>
            <div className="grid grid-cols-2 gap-3">
               {
                allbrandcard.map(card=> <Homecard key={card._id} card={card}></Homecard>)
               }
            </div>
        </div>
    );
};

export default Brandcard;