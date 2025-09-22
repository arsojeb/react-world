import React, { useState } from 'react';
import "./countryOne.css"

const country = ({country, handelVisitedCountries}) => { 
    const [visited, setVisited] = useState(false);
    //console.log(country.population.population)
    //console.log(handelVisitedCountries)
    const handelVisited = () =>{

        //basic

        //if(visited){
            //setVisited(false)
        //}
        //else{
            //setVisited(true)
        //}

        //mid
        
        //setVisited(visited? false : true);

        //final

        setVisited(!visited);
        handelVisitedCountries(country)
    }

    return (
        <div className= {`country ${visited && "country-visited"}`} >
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name:{country.name.common}  </h3>
            <h4>Population: {country.population.population}</h4>
            <h4>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"} </h4>
            <button onClick={handelVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button>
        </div>
    );
};

export default country;  
