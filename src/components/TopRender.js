import { useState } from "react";
import Dashboard from "./DashBoard";
import Details from "./Details";

function TopRender() {
    const [selectedMovie, setSelectedMovie] = useState(null);

    function selectMovie(movie) {
        setSelectedMovie(movie);
    }

    return (
        <div>
            {selectedMovie ? (
                <Details movie={selectedMovie} />
            ) : (
                <Dashboard onMovieSelect={selectMovie} />
            )}
        </div>
    );
}

export default TopRender;
