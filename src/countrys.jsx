import React, { use, useState } from 'react';
import Country from './assets/country/country';  
import country from './assets/country/country';
import "./countryTwo.css"

const Countrys = ({ countryPromis }) => {
    const [visitedCountries, setvisitedCountries] = useState([]);

    const handelVisitedCountries = (country) => {
        console.log('handel visited countries',country);
        const newVisitedCountries = [...visitedCountries, country];
        setvisitedCountries(newVisitedCountries);
    }

    const countrisData = use(countryPromis);       
    const countries = countrisData.countries;

    console.log(countries);

    return (
        <div>
            
            <h1>In The Country: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li
                    key={country.cca3.cca3}
                    >{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>{countries.map(country => (
                <Country key={country.cca3.cca3} country={country} handelVisitedCountries ={handelVisitedCountries}></Country>
            ))}</div>
            
        </div>
    );
};

export default Countrys;
