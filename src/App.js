import React, { useState }from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Tab from './Components/Tab'
import "./App.css";
import Planets from './Components/Planets';
import Favourite from './Components/Favourite';
const App = () => {
    const [tab,settab] = useState('planet');
    

    
    return(
       <>
        <Header />
        <Hero />
        <Tab />
       </>
    )
}

export default App;