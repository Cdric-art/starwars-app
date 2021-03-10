import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {apiFetch} from "../ui/apiFetch";
import Loader from "../modules/Loader";

const FilmsId = () => {

    let {id} = useParams()

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        setIsLoading(true)

        apiFetch(`/films/${id}`)
            .then(res => {
                setData(res)
                setIsLoading(false)
            })
            .catch(e => console.log(e))

    }, [])

    console.log({data})

    return (
        <div className="container">
            {data && !isLoading ? (
                <div className="wrapper-films">
                    <div className="films">
                        {data ? (
                            <div className="filmId">
                                <h2>{data.title}</h2>
                                <p>{data.opening_crawl}</p>
                                <span>{data.release_date}</span>
                                <span>{data.director}</span>
                            </div>
                        ) : null}
                    </div>
                </div>
            ) : <Loader />}
        </div>
    );
};

export default FilmsId;
