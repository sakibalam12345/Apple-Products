import { useLoaderData, useParams } from "react-router-dom";


const Cardproducts = () => {

    const {brand_name} = useParams();
    const alldata = useLoaderData();
    console.log(brand_name,alldata)
    return (
        <div>
            <h1>card products here{alldata.length}</h1>
        </div>
    );
};

export default Cardproducts;