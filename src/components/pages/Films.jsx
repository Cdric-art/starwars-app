import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const Films = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        const apiFetch = async () => {
            await fetch('https://swapi.dev/api/films', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            })
                .then(response => response.json())
                .then(result => setData(result))
                .catch(e => console.log(e))
        }

        apiFetch()

    }, [])

    return (
        <div className="container">
            {data && (
                <div className="wrapper-films">
                    <div className="films">
                        {data.results ? data.results.map((film, k) => (
                            <Link to={`/films/${k + 1}`} key={film.episode_id}>{film.title}</Link>
                        )) : null}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Films;
