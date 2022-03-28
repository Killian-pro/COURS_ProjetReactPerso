import { useEffect, useState } from 'react';
import Movie from '../Componant/Movie';

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        appelFilm()
    }, [])

    function appelFilm() {
        fetch('https://swapi.dev/api/films')
            .then(res => res.json())
            .then(data => {
                // trie des film par episode_id
                let sortdata = data.results.sort((a, b) => (a.episode_id > b.episode_id) ? 1 : -1)
                setMovies(sortdata)
            });
    }

    return (
        <div style={{ height: '100vh', width: '100vw', backgroundColor: 'black' }}>
            {movies?.length > 1 &&
                movies.map((it, index) =>
                    <div key={index}>
                        <Movie film={it} />
                    </div>)}
        </div>
    );
}

export default Home;
