import { useState } from "react";

const CountryDetails = ({ countryData , listHandler , imageHandler }) => {
    const { name, flags , cca3 , subregion , area} = countryData
    
    // console.log(imageHandler);
    const [isVisited , setVisited] = useState(true)

    const toggleHandler = () => {
        setVisited(!isVisited)
    }
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 h-96 shadow-xl">
                <figure>
                    <img className="w-64 h-40 object-cover"
                        src={flags?.png}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name?.common}</h2>
                    <p>{subregion}</p>
                    <p>Area : {area}</p>
                    <p><small>CCA3 : {cca3}</small></p>
                    
                    <div className="card-actions justify-between">
                        <button onClick={() => listHandler(countryData)} className="btn btn-info text-white">Mark as Visit</button>
                        <button className="btn btn-outline btn-success" onClick={() => imageHandler(countryData.flags?.png)}>Add image</button>
                        <button onClick={toggleHandler} className ={isVisited ? 'btn btn-primary' : 'btn btn-error text-white'}>{isVisited ? 'Visited' : 'To Visit'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetails;