import React, { useEffect } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { ThreeDots,TailSpin,Triangle } from 'react-loader-spinner';
import { CircleSpinner, ImpulseSpinner, PushSpinner } from 'react-spinners-kit';
import ChartContainer from '../components/chart/ChartContainer';
import { getData } from '../components/chart/statFunctions';
import { interpolateInferno, interpolateBlues, interpolateGreys, interpolateMagma, interpolateViridis } from 'd3-scale-chromatic'
import '../styles/chart/ChartCssDefault.css'

const Test = () => {
    useEffect(() => {
        // getData("http://localhost:8080/getData", null)
        console.log('naka data')
    }, [])

    const variable = {
        'ok':'value1',
        'notok' : 'value2'
    }
    console.log(variable['ok'])

    const chartData = [12,13,5,2,28,3]
    return (
        <div className={"chartRow"} width={"100vh"}>
            <ChartContainer 
                linkToApi={'api/data?drilldowns=Nation&measures=Population'}
                chartLabel={'tritre'}
                labelsColumnName={'ID Nation'}
                dataColumnName={'Population'}
                colorScale={interpolateInferno}
                transposeData={true}
                LoadingComponent={TailSpin}
                ChartComponentWithoutData={Bar}
                chartClassName={ "smallChart" }
                // chartCssPath={'../scr/path'}
            />
            <ChartContainer
                linkToApi={'api/data?drilldowns=Nation&measures=Population'}
                chartLabel={'tritre'}
                labelsColumnName={'ID Nation'}
                dataColumnName={'Population'}
                colorScale={interpolateInferno}
                transposeData={true}
                LoadingComponent={ThreeDots}
                ChartComponentWithoutData={Doughnut}
                chartClassName={"smallChart"}
            />
            <ChartContainer
                linkToApi={'api/data?drilldowns=Nation&measures=Population'}
                chartLabel={'tritre'}
                labelsColumnName={'ID Nation'}
                dataColumnName={'Population'}
                colorScale={interpolateInferno}
                transposeData={true}
                LoadingComponent={Triangle}
                ChartComponentWithoutData={Line}
                chartClassName={ "smallChart" }
                className={"smallChart"}
            />
        </div>
    );
};

export default Test;