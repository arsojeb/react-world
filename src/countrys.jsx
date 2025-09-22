import React, { use } from 'react';
import Country from './assets/country/country';  
import country from './assets/country/country';
import "./countryTwo.css"

const Countrys = ({ countryPromis }) => {
    const countrisData = use(countryPromis);       
    const countries = countrisData.countries || [];

    console.log(countries);

    return (
        <div>
            
            <h1>In The Country: {countries.length}</h1>
            <div className='countries'>{countries.map(country => (
                <Country key={country.cca3.cca3} country={country}></Country>
            ))}</div>
            
        </div>
    );
};

export default Countrys;
