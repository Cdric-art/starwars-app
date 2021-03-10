import React, {useState} from 'react';
import {apiFetch} from "../ui/apiFetch";
import SearchResult from "../modules/SearchResult";

const People = () => {

    const [search, setSearch] = useState('')
    const [result, setResult] = useState(null)
    const [count, setCount] = useState(2)

    const [data, setData] = useState(null)

    const allResults = () => {
        setResult(null)
        apiFetch(`/people`)
            .then(res => {
                setData(res)
            })
            .catch(e => console.log(e))
    }

    const searchResult = (e) => {
        if (e.key === 'Enter') {
            setData(null)
            apiFetch(`/people/?search=${search}`)
                .then(res => {
                    setResult(res)
                })
                .catch(e => console.log(e))
        }
    }

    const handleNext = () => {
        apiFetch(`/people/?page=${count}`)
            .then(res => {
                setData(res)
            })
            .catch(e => console.log(e))
        setCount(count + 1)
    };

    return (
        <div className="people">
            <div className="search">
                <input type="text" onKeyPress={searchResult} value={search}
                       onChange={(e) => setSearch(e.target.value)}/>
                <button type="button" onClick={allResults}>Voir tous les résultats</button>
            </div>
            {data ? (
                <>
                    <div className="all-result">
                        {data.results.map((people, i) => (
                            <h2 key={i}>{people.name}</h2>
                        ))}
                    </div>
                    <p onClick={handleNext} className="next">Next</p>
                </>
            ) : null}
            {result ? (
                <SearchResult result={result.results[0]} />
            ) : null}
        </div>
    );
};

export default People;
