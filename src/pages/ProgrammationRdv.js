import { useState } from "react";
import PlanningComponent from "../components/planning/PlanningComponent";

export default function ProgrammationRdv({centreVaccination}){

    return (
        <div className='programmationRdvContainer'>
            <PlanningComponent centreVaccination={centreVaccination}/>
        </div>
    )
}