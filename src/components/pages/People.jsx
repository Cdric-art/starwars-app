import React, {useEffect, useState} from 'react';
import {apiFetch} from "../libs/apiFetch";
import SearchResultPeople from "../modules/SearchResultPeople";
import AllResult from "../modules/AllResult";

const People = () => {

    const [search, setSearch] = useState('')
    const [result, setResult] = useState(null)
    const [count, setCount] = useState(2)

    const [data, setData] = useState(null)

    useEffect(() => {
        setResult(null)
        apiFetch(`/people`)
            .then(res => {
                setData(res)
            })
            .catch(e => console.log(e))
    }, [])

    const searchResultInput = (e) => {
        if (e.key === 'Enter') {
            setData(null)
            apiFetch(`/people/?search=${search}`)
                .then(res => {
                    setResult(res)
                })
                .catch(e => console.log(e))
        }
    }

    const searchResult = (query) => {
        setSearch('')
        setData(null)
        apiFetch(`/people/?search=${query}`)
            .then(res => {
                setResult(res)
            })
            .catch(e => console.log(e))
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
                <input type="text" onKeyPress={searchResultInput} value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>
            {data && (
                <AllResult data={data.results} search={searchResult} next={handleNext}/>
            )}
            {result && (
                <SearchResultPeople result={result.results[0]}/>
            )}
        </div>
    );
};

export default People;
