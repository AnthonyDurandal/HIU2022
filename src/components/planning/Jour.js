import React, { useEffect, useState } from 'react';
import "../../styles/Planning.css"

const Jour = ({date, heureDeb, heureFin, reservation, valueDate}) => {
    const moment = require("moment");
    const [dayName, setDayName] = useState(['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'])
    const [heureJour, setHeureJour] = useState([])

    useEffect(() => {
        generateHeureJour().then((res) => {
            setHeureJour(res)
        })
    }, [])

    async function generateHeureJour() {
        const result = []
        var resDeb = 0
        var dateHeureDebut = date.format("YYYY-MM-DD") + "[T]" + heureDeb.format("HH:mm:ss")
        dateHeureDebut = moment(dateHeureDebut, "YYYY-MM-DD[T]HH:mm:ss")
        for (var a = 0; a < reservation.length; a++) {
            if (dateHeureDebut.format("YYYY-MM-DD HH:mm:ss") === reservation[a].format("YYYY-MM-DD HH:mm:ss") ||
                dateHeureDebut < moment()) {
                resDeb = 1
                break
            }
        }
        result.push([heureDeb, resDeb])

        var i = 0
        while (result[i][0] < heureFin) {
            var dateHeure = date.format("YYYY-MM-DD") + "[T]" + result[i][0].format("HH:mm:ss")
            dateHeure = moment(dateHeure, "YYYY-MM-DD[T]HH:mm:ss")
            var heureAdd15 = moment(result[i][0].format("HH:mm:ss"), "HH:mm:ss").add(15, 'minutes')
            var res = 0
            for(var ii=0;ii<reservation.length;ii++){
                if (reservation[ii].format("YYYY-MM-DD HH:mm:ss") === dateHeure.format("YYYY-MM-DD HH:mm:ss") ||
                    dateHeure < moment()){
                    res = 1
                    break
                } 
            }
            result.push([heureAdd15, res])
            i++
        }

        var resFin = 0
        var dateHeureFin = date.format("YYYY-MM-DD") + "[T]" + heureFin.format("HH:mm:ss")
        dateHeureFin = moment(dateHeureFin, "YYYY-MM-DD[T]HH:mm:ss")
        for (var a = 0; a < reservation.length; a++) {
            if (dateHeureFin.format("YYYY-MM-DD HH:mm:ss") === reservation[a].format("YYYY-MM-DD HH:mm:ss") ||
                dateHeureFin < moment() ) {
                resFin = 1
                break
            }
        }
        result.push([heureFin, resFin])
        return result
    }

    return (
        <div className='jour'>
            <div className='nomJour'>
                { dayName[date.day()] }
            </div>
            <div className='heures'>
                {
                    heureJour.map((hj, index) => ( 
                        hj[1] === 1 ? (
                            <div key={index} className='resa'>
                                {hj[0].format("HH:mm")}
                            </div>
                        ) : (
                            <div key = { index } 
                                className = 'heure' 
                                onClick={() => {
                                    valueDate(date.format("DD-MM-YYYY") + " " + hj[0].format("HH:mm:ss"))
                                }}
                            >
                                {hj[0].format("HH:mm")}
                            </div>
                        )
                    ))
                }
            </div>
        </div>
    );
};

export default Jour;