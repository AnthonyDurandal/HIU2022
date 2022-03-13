import React, { useEffect } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { ThreeDots,TailSpin,Triangle } from 'react-loader-spinner';
import { CircleSpinner, ImpulseSpinner, PushSpinner } from 'react-spinners-kit';
import ChartContainer from '../components/chart/ChartContainer';
import { getData } from '../components/chart/statFunctions';
import { interpolateInferno, interpolateBlues, interpolateGreys, interpolateMagma, interpolateViridis } from 'd3-scale-chromatic'
import '../styles/chart/ChartCssDefault.css'
import fetchData from '../publicFunctions/publicFunctions';

const Test = () => {
    const request = {}
    request.restUrl ='' //'api/v1/signalements'//"api/data?drilldowns=Nation&measures=Population"
    request.method = "GET"
    request.additionalHeader = null
    request.tokenName = "tokenName"
    request.contentTypeName = "json"
    request.requestBody = {
        name: "name",
        mdp: "passwd"
    }
    request.functionToExecute = null
    
    useEffect(() => {
        // getData("http://localhost:8080/getData", null)
        fetchData(request)
    }, [])

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