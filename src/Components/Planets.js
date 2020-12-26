import React from 'react';

const Planets = (props) => {
    return(
        <div className="planets-container">
            {props.planets.map(planet => {
                return(
                <div className="planet-item" key={planet.id}>
                    <h1 >{planet.name}</h1>
                    <button onClick = {() => props.addToFav(planet)} className="btn btn-fav">Add to favourite</button>
                </div>
            )})}
        </div>
    )
}

export default Planets;