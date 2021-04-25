import React from 'react'
import Section from './Section'

require('css2.css');

const MainCard = ({filteredData}) => {

    // var tmp = array['element2'];
    // array['element2'] = array['element1'];
    // array['element1'] = tmp;

    const podaci = {
        "politika" :
        {
            background: "/plavidvoraccetinje.jpg",
            heading: "Politika"
        },
        "kultura-i-drustvo" : {
            background: "/muzej.jpg",
            heading: "Kultura i drustvo"
        },
        "ekonomija" :
        {
            background: "/manastir.jpg",
            heading: "Ekonomija"
        },
        "kolumne-i-intervjui" :
        {
            background: "/bridge.jpg",
            heading: "Kolumne i Intervjui"
        },
        "vijesti-iz-dijaspore" :
        {
            background: "/daniel-olahs.jpg",
            heading: "Vijesti iz dijaspore"
        }
    }
    return (
        <div className="main">
           {filteredData?Object.keys(filteredData).map(el=><Section key={Math.random()} title={podaci[el].heading} img={podaci[el].background} data={filteredData[el]} />):null} 
        </div>
    )
}

export default MainCard
