import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country)
    const {name, area, translations, flags, timezones, population} = props.country;
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h3>Population: {population}</h3>
            <h3>Timezones: {timezones[0]}</h3>
            <h2>Translations: {translations.ara.official}</h2>
            <h2>Area: {area}</h2>
        </div>
    );
};

export default Country;