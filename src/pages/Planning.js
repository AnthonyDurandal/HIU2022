import React, { useEffect, useState } from 'react';
import Jour from "../components/planning/Jour"
import "../styles/Planning.css"

const Planning = () => {
    const moment = require("moment");
    const [jours, setJours] = useState([])
    const [valueDate, setvalueDate] = useState("")
    const heureDeb = moment('08:00', 'HH:mm:ss')
    const heureFin = moment('16:00', 'HH:mm:ss')
    const reservation = [
        moment("2022-03-14[T]08:00:00", "YYYY-MM-DD[T]HH:mm:ss"),
        moment("2022-03-14[T]11:15:00", "YYYY-MM-DD[T]HH:mm:ss"),
        moment("2022-03-15[T]15:45:00", "YYYY-MM-DD[T]HH:mm:ss"),
        moment("2022-03-16[T]09:00:00", "YYYY-MM-DD[T]HH:mm:ss"),
        moment("2022-03-18[T]10:30:00", "YYYY-MM-DD[T]HH:mm:ss")
    ]

    useEffect(() => {
        generateDateInAWeek().then((res) => { console.log(res); setJours(res)})
    }, [])

    const changeValueDate = (data) => {
        console.log(data)
        setvalueDate(data)
    }

    async function generateDateInAWeek() {
        const result = []
        for(var x = 0;x<7;x++) {
            result.push(moment().add(x, 'days'))
        }
        return result
    }

    return (
        <div className='planning'>
            {
                jours.map((jour, index) =>( 
                    <Jour key={index} 
                        date={jour} 
                        heureDeb={heureDeb}
                        heureFin={heureFin}
                        reservation={reservation}
                        valueDate={changeValueDate}/>)
                )
            }
        </div>
    );
};

export default Planning;
