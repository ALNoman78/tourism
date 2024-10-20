import { useEffect } from "react";
import { useState } from "react";
import CountryDetails from "./CountryDetails";

const Card = () => {

    const [country, setCountry] = useState([])
    const[countryList , setCountryList] = useState([])

    const listHandler = (country) => {
        const newCountryList = [...countryList , country]
        setCountryList(newCountryList)
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])

    return (
        <div>
            <h2 className="text-3xl text-black text-center font-bold my-12">The whole world country Data : {country.length}</h2>
            <div className="w-10/12 mx-auto border border-emerald-600 m-5 p-5 rounded-xl">
                <h3>Country Visited Count : {countryList.length}</h3>
                <ul className="mx-10 list-disc">
                    {
                        countryList.map((country , idx) => <li key={idx}>{country.name?.common}</li>)
                    }
                </ul>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-5 w-10/12 mx-auto">
                {
                    country.map((country, idx) => <CountryDetails 
                    key={idx} 
                    countryData={country}
                    listHandler = {listHandler}></CountryDetails>)
                }
            </div>
        </div>
    );
};

export default Card;