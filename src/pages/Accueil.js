import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import DashboardHeader from '../components/header/DashboardHeader';
import { interpolateInferno, interpolateBlues, interpolateGreys, interpolateMagma, interpolateViridis } from 'd3-scale-chromatic'
import './../styles/AdminDashboard.css'
import ChartContainer from '../components/chart/ChartContainer';
import { TailSpin, ThreeDots } from 'react-loader-spinner';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

import items from './../data/centreSidebar.json'
const Accueil = () => {
    return (
        <div className='admin-dashboard'>
            <Sidebar data={items}/>
            <DashboardHeader />
            <div className='content'>
                <div className='stat-content'>
                    <div className='stat-1'>
                        
                    </div>
                    <div className='stat-2'>
                        <ChartContainer
                            linkToApi={'api/data?drilldowns=Nation&measures=Population'}
                            chartLabel={'titre'}
                            labelsColumnName={'ID Nation'}
                            dataColumnName={'Population'}
                            colorScale={interpolateInferno}
                            transposeData={true}
                            LoadingComponent={TailSpin}
                            ChartComponentWithoutData={Bar}
                            chartClassName={"bigChart"}
                        />
                    </div>
                    <div className='stat-3'>
                        
                    </div>
                    <div className='stat-4'>
                        <ChartContainer
                            linkToApi={'api/data?drilldowns=Nation&measures=Population'}
                            chartLabel={'titre'}
                            labelsColumnName={'ID Nation'}
                            dataColumnName={'Population'}
                            colorScale={interpolateInferno}
                            transposeData={true}
                            LoadingComponent={ThreeDots}
                            ChartComponentWithoutData={Doughnut}
                            chartClassName={"chartContainerV4"}
                        />
                    </div>
                    <div className='stat-5'>
                        
                    </div>
                    <div className='stat-6'>
                        <ChartContainer
                            linkToApi={'api/data?drilldowns=Nation&measures=Population'}
                            chartLabel={'titre'}
                            labelsColumnName={'ID Nation'}
                            dataColumnName={'Population'}
                            colorScale={interpolateInferno}
                            transposeData={true}
                            LoadingComponent={TailSpin}
                            ChartComponentWithoutData={Line}
                            chartClassName={"chartContainerV6"}
                        />
                    </div>
                    <div className='stat-7'>
                        
                    </div>
                    <div className='stat-8'>
                        <ChartContainer
                            linkToApi={'api/data?drilldowns=Nation&measures=Population'}
                            chartLabel={'titre'}
                            labelsColumnName={'ID Nation'}
                            dataColumnName={'Population'}
                            colorScale={interpolateInferno}
                            transposeData={true}
                            LoadingComponent={TailSpin}
                            ChartComponentWithoutData={Line}
                            chartClassName={"chartContainerV6"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accueil;