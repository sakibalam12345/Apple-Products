import { useLoaderData,  } from "react-router-dom";



const Cardddetails = () => {

  
    const singledata = useLoaderData();
    console.log(singledata)
    
    return (
        <div>
            <h1>all card details here</h1>
          <p>{singledata.name}</p>
          
            
        </div>
    );
};

export default Cardddetails;