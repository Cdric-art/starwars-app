import React from 'react';

const SearchResult = ({result}) => {
    return (
        <ul className="search-result">
            <li>Name: {result.name}</li>
            <li>Height: {result.height}</li>
            <li>Mass: {result.mass}</li>
            <li>Eye color: {result.eye_color}</li>
            <li>Gender: {result.gender}</li>
        </ul>
    );
};

export default SearchResult;
