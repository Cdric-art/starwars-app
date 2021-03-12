import React from 'react';

const AllResult = ({data, search, next}) => {
    return <>
        <div className="all-result">
            {data.map((people, i) => (
                <h2 onClick={() => search(people.name)} key={i}>{people.name}</h2>
            ))}
        </div>
        <p onClick={next} className="next">Next</p>
    </>
};

export default AllResult;
