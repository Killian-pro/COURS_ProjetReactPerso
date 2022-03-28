import { useEffect, useState } from 'react';
import Movie from '../Componant/Movie';

function Home() {
    const [movies, setMovies] = useState([]);
    const [scrollTop, setScrollTop] = useState(0);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        appelFilm()
    }, [])

    useEffect(() => {
        const onScroll = e => {
            setScrollTop(e.target.documentElement.scrollTop);
            setScrolling(e.target.documentElement.scrollTop > scrollTop);
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

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
        <div style={{ backgroundColor: 'black', padding: '2vw', }}>
            {movies?.length > 1 &&
                movies.map((it, index) =>
                    <div key={index}>
                        <Movie film={it} />
                    </div>)}
            <div style={{ position: 'fixed', left: '80%', top: '10%', color: 'white', fontSize: 25, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ border: 'solid 2px black', height: 500, width: 25, display: 'flex', flexDirection: 'column-reverse' }}>
                    <div style={{ backgroundColor: 'red', height: scrollTop / 4, transition: ' height 2s', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}></div>
                </div>
                <div style={{ border: 'solid 2px white', height: 20, width: 100, backgroundColor: 'white' }}>

                </div>
                <div style={{ border: 'solid 2px white', height: 50, width: 25, backgroundColor: 'white' }}>

                </div>
                <div style={{ border: 'solid 2px red', height: 10, width: 25, backgroundColor: 'red' }}>

                </div>
            </div>
        </div>
    );
}

export default Home;
