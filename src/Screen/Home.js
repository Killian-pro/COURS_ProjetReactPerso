import { useEffect, useState } from 'react';
import Movie from '../Componant/Movie';

function Home() {
    const [data, setData] = useState = ([])

    useEffect(() => {
        fetch('https://swapi.dev/api/films')
            .then(r => r.json())
            .then(data => { setData(data) });
    }, [])

    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            {data?.length > 1 &&
                data.map((it, index) =>
                    <div key={index}>
                        <Movie film={it} />
                    </div>)}
        </div>
    );
}

export default Home;
