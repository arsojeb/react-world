import React from 'react';
import "./countryOne.css"

const country = ({country}) => {  
    console.log(country.population.population)
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name:{country.name.common}  </h3>
            <h4>Population: {country.population.population}</h4>
            <h4>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"} </h4>
            <button>Not Visited</button>
        </div>
    );
};

export default country;  
