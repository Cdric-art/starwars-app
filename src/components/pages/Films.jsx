import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Loader from "../modules/Loader";
import {apiFetch} from "../libs/apiFetch";

const Films = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        setIsLoading(true)

        apiFetch('/films')
            .then(res => {
                setData(res)
                setIsLoading(false)
            })
            .catch(e => console.log(e))

    }, [])

    return (
        <div className="container">
            {data && !isLoading ? (
                <div className="wrapper-films">
                    <div className="films">
                        {data.results ? data.results.map((film, i) => (
                            <Link to={`/films/${i + 1}`} key={film.episode_id}>{film.title}</Link>
                        )) : null}
                    </div>
                </div>
            ) : <Loader />}
        </div>
    );
};

export default Films;
