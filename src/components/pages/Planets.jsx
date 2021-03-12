import React from 'react';
import AllResult from "../modules/AllResult";
import {apiFetch} from "../libs/apiFetch";
import {useEffect, useState} from "react";
import SearchResultPlanets from "../modules/SearchResultPlanets";

const Planets = () => {

    const [search, setSearch] = useState('')
    const [result, setResult] = useState(null)
    const [count, setCount] = useState(2)

    const [data, setData] = useState(null)

    useEffect(() => {
        setResult(null)
        apiFetch(`/planets`)
            .then(res => {
                setData(res)
            })
            .catch(e => console.log(e))
    }, [])

    const searchResultInput = (e) => {
        if (e.key === 'Enter') {
            setData(null)
            apiFetch(`/planets/?search=${search}`)
                .then(res => {
                    setResult(res)
                })
                .catch(e => console.log(e))
        }
    }

    const searchResult = (query) => {
        setSearch('')
        setData(null)
        apiFetch(`/planets/?search=${query}`)
            .then(res => {
                setResult(res)
            })
            .catch(e => console.log(e))
    }

    const handleNext = () => {
        apiFetch(`/planets/?page=${count}`)
            .then(res => {
                setData(res)
            })
            .catch(e => console.log(e))
        setCount(count + 1)
    };

    return <div className="planets">
        <div className="search">
            <input type="text" onKeyPress={searchResultInput} value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
        {data && (
            <AllResult data={data.results} search={searchResult} next={handleNext}/>
        )}
        {result && (
            <SearchResultPlanets result={result.results[0]}/>
        )}
    </div>
};

export default Planets;
