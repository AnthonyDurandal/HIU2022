import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DashboardHeader from '../components/header/DashboardHeader';
import clientsidebar from './../data/clientSidebar.json'
import Sidebar from './../components/sidebar/Sidebar'
import "../styles/ChoixCentre.css";
import { ScheduleComponent, WorkWeek, Week, Month, Inject, Day, Agenda, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';



class TimeTable extends React.Component {
    constructor() {
        super(...arguments);
        this.data = [{
            Id: 1,
            Subject: 'RAJAOFETRA Tiavina Joy',
            StartTime: new Date(2022, 3, 15, 9, 30),
            EndTime: new Date(2022, 3, 15, 9, 50)
        }, {
            Id: 2,
            Subject: 'ANDRIMANAMIHAGA Zo Toavina',
            StartTime: new Date(2022, 3, 12, 12, 0),
            EndTime: new Date(2022, 3, 12, 12, 15)
        }, {
            Id: 3,
            Subject: 'Irina Durandal RASOANAIVO',
            StartTime: new Date(2022, 3, 13, 9, 30),
            EndTime: new Date(2022, 3, 13, 9, 45)
        }, ,
        {
            Id: 4,
            Subject: 'Hery Tahina RAKOTONAIVO',
            StartTime: new Date(2022, 3, 14, 13, 0),
            EndTime: new Date(2022, 3, 14, 13, 20)
        },
        {
            Id: 5,
            Subject: 'RASOLOFOARIMANGA Manitra AinaHarison',
            StartTime: new Date(2022, 3, 14, 13, 0),
            EndTime: new Date(2022, 3, 14, 14, 50)
            }, {
                Id: 6,
                Subject: 'RASOLOFOARIMANGA Manitra AinaHarison',
                StartTime: new Date(2022, 3, 14, 14, 0),
                EndTime: new Date(2022, 3, 14, 14, 20)
            }

        ];
    }
    render() {
        return(
            <div className='mainContainer'>
                    <Sidebar data={clientsidebar} />
                    <DashboardHeader />
                <div className='contentCalendar'>
                    <ScheduleComponent height='650px' selectedDate={new Date(2022, 3, 15)} eventSettings={{ dataSource: this.data }}>
                        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                    </ScheduleComponent>
                </div>
            </div>
        );
    }
};
export default TimeTable;





