import React from 'react';
const Favourite = props => {
    if(props.fav.length === 0) {
        return(
            <div className="planet-container">
              <div className="no-element">
                <h1>No Favourites</h1>
              </div>
            </div>
        )
    }
    return(
        
            <div className="planets-container">
                {props.fav.map(f => {
                    return(
                        <div className="planet-item" key={f.id}>
                            <h1>{f.name}</h1>
                            <button className="btn btn-remove" onClick= {() => props.removeFav(f)}>x</button>
                        </div>
                    )
                })}
            </div>
        )

}

export default Favourite;