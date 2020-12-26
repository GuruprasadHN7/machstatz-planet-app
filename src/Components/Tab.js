import React, { useState, useEffect } from 'react';
import Favourite from './Favourite';
import Planets from './Planets';
const Tab = props => {
    const [tab,settab] = useState('planet');
    const switchTabHandler = (tabname) => {
        settab(tabname)
    }
    const [fav,setfav] = useState([]);
    const [planets,setplanets] = useState([])
 const addToFav = (planet) => {
     let newFav = fav.find(p => p.name === planet.name)
     if(!newFav) {
        
         setfav([...fav,{...planet,isfav:true}])
     }
 }
 useEffect(() => {
    
      fetchData()
 }, [])
 const fetchData = async () => {
    const response = await fetch('https://assignment-machstatz.herokuapp.com/planet')
    const data = await response.json()
    setplanets(data);
 }
 const removeFav = (planet) => {
     let newFav = fav.filter(p => p.name!==planet.name)
     setfav([...newFav]);
 }
    return(
        <section className="container">
            <div className="tab-container">
                <div className="tab-item" onClick = {() => switchTabHandler('planet')} >
                    <h1>Planets</h1>
                </div>
                <div className="tab-item" onClick = {() => switchTabHandler('favourite')}>
                    <h1>My Favs</h1>
                </div>
            </div>
            <div className="tab-body">
               {tab === 'planet' && <Planets planets = {planets} addToFav ={addToFav} />}
               {tab === 'favourite' && <Favourite fav = {fav} removeFav = {removeFav}/>}
            </div>
            

        </section>
    );
}

export default Tab;