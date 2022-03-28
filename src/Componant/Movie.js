import { useEffect, useState } from 'react';
function GetFile({ film }) {
    const [imgFilm, setImgFilm] = useState('');
    const poster = ['https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg', 'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg', 'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg',
        'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg', 'https://upload.wikimedia.org/wikipedia/en/3/3f/The_Empire_Strikes_Back_%281980_film%29.jpg', 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg']

    console.log(film)

    useEffect(() => {
        getImageFilm()
    }, [])

    function getImageFilm() {
        fetch(`https://pixabay.com/api/?key=26359715-4c1aa25d34cc2168dca3b4a1b&q=${film?.title}&image_type=photo`)
            .then(res => res.json())
            .then(data => { setImgFilm(data.hits[0]?.previewURL) });
    }


    return (
        <div style={{ color: 'white', padding: 15 }} >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: 300 }}>
                    <img src={poster[film?.episode_id - 1]} />
                </div>

                <div>
                    <div style={{ fontSize: 24 }} >
                        EPISODE {film?.episode_id} :
                    </div>
                    <div >
                        {film?.title} - {film?.release_date}
                    </div>
                    <div >
                        created by : {film?.director} & {film?.producer}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default GetFile;
