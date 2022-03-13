import { useEffect, useState } from "react"
import '../../styles/planning/ProgrammationRdv.css'

export default function PlanningComponent({centreVaccination}){
    const moment = require('moment');
    const [jours, setJours] = useState(null)

    useEffect(() => {
        generateDatesInAWeek().then((result) => { console.log(result); setJours(result)})
    }, [])

    async function generateDatesInAWeek(){
        const result = []
        for(var x = 0;x<7;x++)
        {
            result.push(moment().add(x, 'days'))
        }
        return result
    }
    return (
        <div className='planningContainer'>
            {
                jours===null ?
                'jours'
                    :
                    (
                        jours.forEach(jour => {
                            // console.log('result')
                                <div date={jour} centreVaccination={centreVaccination} />
                            
                        })
                    )
            }
        </div>
    )
}