import React from 'react';

const SearchResultPeople = ({result}) => {
    return (
        <ul className="search-result">
            <li>Name: <span>{result.name}</span></li>
            <li>Height: <span>{result.height}</span></li>
            <li>Mass: <span>{result.mass}</span></li>
            <li>Eye color: <span>{result.eye_color}</span></li>
            <li>Gender: <span>{result.gender}</span></li>
        </ul>
    );
};

export default SearchResultPeople;
