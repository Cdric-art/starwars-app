import React from 'react';

const SearchResultPlanets = ({result}) => {
    return (
        <ul className="search-result">
            <li>Name: <span>{result.name}</span></li>
            <li>Diameter: <span>{result.diameter}</span></li>
            <li>Climate: <span>{result.climate}</span></li>
            <li>Gravity: <span>{result.gravity}</span></li>
            <li>Terrain: <span>{result.terrain}</span></li>
            <li>Population: <span>{result.population}</span></li>
        </ul>
    );
};

export default SearchResultPlanets;
