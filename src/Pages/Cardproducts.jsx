import { useLoaderData, useParams } from "react-router-dom";
import Cardview from "./Cardview";


const Cardproducts = () => {

    const {brand_name} = useParams();
    const allproducts = useLoaderData();
    console.log(brand_name,allproducts)
    return (
        <div>
            
            <div className="grid grid-rows-1 justify-center space-y-11">
                {
                    allproducts.map(products=> <Cardview key={products._id} products={products}></Cardview>)
                }
            </div>
        </div>
    );
};

export default Cardproducts;