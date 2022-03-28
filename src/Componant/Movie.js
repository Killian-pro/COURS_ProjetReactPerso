
function GetFile({ film }) {


    return (
        <div style={{ color: 'white' }} >
            <div >
                {film?.episode_id}
            </div>
            <div >
                {film?.title} - {film?.release_date}
            </div>

        </div>
    );
}

export default GetFile;
