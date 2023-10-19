import { useLoaderData, useParams } from "react-router-dom";
import Cardview from "./Cardview";


const Cardproducts = () => {

    const {brand_name} = useParams();
    const allproducts = useLoaderData();
    console.log(brand_name,allproducts)
    return (
        <div>
            <h1>card products here{allproducts.length}</h1>
            <div className="grid grid-cols-2">
                {
                    allproducts.map(products=> <Cardview key={products._id} products={products}></Cardview>)
                }
            </div>
        </div>
    );
};

export default Cardproducts;