import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import DashboardHeader from '../components/header/DashboardHeader';
import { interpolateInferno, interpolateBlues, interpolateGreys, interpolateMagma, interpolateViridis, interpolatePlasma, interpolateCool } from 'd3-scale-chromatic'
import './../styles/AdminDashboard.css'
import ChartContainer from '../components/chart/ChartContainer';
import { TailSpin, ThreeDots } from 'react-loader-spinner';
import { Bar, Bubble, Doughnut, Line, Radar } from 'react-chartjs-2';
import simpleChartData from '../data/chartFakeDataSimple.json'
import complexChartData from '../data/chartFakeData.json'

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
                            chartData={simpleChartData}
                        />
                    </div>
                    <div className='stat-3'>
                        <div className="chartDescription">
                            <div className="chartContainerTittle"><h2>Description</h2></div>
                            <div className="chartContainerContent">
                                <p>
                                    Fugiat amet ea aliqua culpa enim nisi ullamco eu aute. Nisi incididunt adipisicing est esse fugiat magna tempor veniam minim quis esse laborum aliquip velit. Ad cillum velit tempor ex. Lorem elit tempor eu occaecat reprehenderit enim. Fugiat aliqua pariatur sint pariatur dolor id ullamco aliquip ut. Ut incididunt cupidatat est ipsum proident Lorem eu consectetur qui. Consequat laborum fugiat tempor exercitation officia pariatur do reprehenderit laboris Lorem amet exercitation in.
                                </p>
                            </div>
                        </div>
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
                            chartData={simpleChartData}
                        />
                    </div>
                    <div className='stat-5'>
                        <ChartContainer
                            linkToApi={'api/data?drilldowns=Nation&measures=Population'}
                            chartLabel={'titre'}
                            labelsColumnName={'ID Nation'}
                            dataColumnName={'Population'}
                            colorScale={interpolateInferno}
                            transposeData={true}
                            LoadingComponent={ThreeDots}
                            ChartComponentWithoutData={Line}
                            chartClassName={"chartContainerV4"}
                            chartData={complexChartData}
                        />
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
                            chartData={complexChartData}
                        />
                    </div>
                    <div className='stat-7'>
                        <div className="chartDescription">
                            <div className="chartContainerTittle"><h2>Description</h2></div>
                            <div className="chartContainerContent">
                                <p>
                                    Dolor sint dolore aliqua nostrud laboris cillum elit dolore elit minim cillum aliqua. Nulla enim voluptate elit ex ad nisi cillum magna mollit cillum dolor. Commodo ipsum esse Lorem sunt non laborum voluptate tempor enim. Sit ad pariatur dolor tempor deserunt eu ipsum.

                                    Deserunt mollit est officia excepteur Lorem veniam do ad. Anim incididunt sunt sunt adipisicing aliqua aliqua veniam veniam culpa voluptate proident do nostrud cupidatat. Cupidatat ea enim in ex cupidatat sint occaecat eiusmod ut minim enim. Id laboris nostrud anim pariatur eu ullamco dolore. Id incididunt mollit commodo anim laboris ea occaecat occaecat consectetur velit. Do pariatur aliquip ex exercitation. Reprehenderit cillum est culpa dolor sunt ad officia sint est pariatur incididunt exercitation ex aute.

                                    Nulla et quis eu aliqua id voluptate in irure dolore proident aliqua. Est duis occaecat magna ad ullamco elit deserunt ea consectetur deserunt ea aute elit amet. Fugiat eu nostrud anim nisi reprehenderit nulla. Veniam sint cupidatat deserunt ipsum consectetur sint et veniam. Enim aute labore deserunt minim eu mollit irure aliqua sunt. Enim excepteur reprehenderit eu sit nulla elit laborum incididunt.
                                </p>
                            </div>
                        </div>
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
                            chartData={complexChartData}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accueil;