import React from "react";
import { Link } from "react-router-dom";

function Thumb({game}) {
    return ( 
        <><Link to={`/home/${game.id}`} className='movie-list'><img src={game.image} className="img new-movie" alt={game.title} />
            <h5>{game.title}</h5>
            <p>{game.genre}</p></Link></>
     );
}

export default Thumb;