import 'chart.js/auto';
import { useGlobalState } from 'state-pool';

export async function getChartData(restUrl, functionToCall, chartLabel, labelsColumnName, dataColumnName, colorScale, transposeData) {
    const lien = restUrl;
    // setFunction(dataForChart)
    console.log(lien)
    fetch(lien, {
        method: 'GET',
        header: {
            'Access-Control-Allow-Origin': '*',
            'mode':'no-cors',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then((jsonData) => {
            //functionToCall(jsonData.data)
            formatResponseDataThenCallSetFunction(jsonData.data,functionToCall,chartLabel, labelsColumnName,dataColumnName, colorScale, transposeData)
        });
}

const formatResponseDataThenCallSetFunction = (data, setFunctionToCall, chartLabel, labelsColumnName,
    dataColumnName,colorScale,transposeData
    
    ) => {
    const colorRangeInfo = {colorStart: 0,colorEnd: 1,useEndAsStart: true}
    if (transposeData !== undefined && transposeData === true) 
    {
        transposeAnyData(data)
            .then((transposedData) => {
                setFunctionToCall(createDataForChart(chartLabel, transposedData[labelsColumnName], transposedData[dataColumnName], colorScale, colorRangeInfo))
            })
    }
    else {
        setFunctionToCall(createDataForChart(chartLabel, data[labelsColumnName], data[dataColumnName], colorScale, colorRangeInfo))
    }
}

export function createDataForChart(chartLabel, labels, data, colorScale, colorRangeInfo) {
    var COLORS = interpolateColors(data.length, colorScale, colorRangeInfo);

    return {
        ready: true,
        labels: labels,
        data: data,
        datasets: [
            {
                label: chartLabel,
                data: data,
                backgroundColor: COLORS,
                // borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                borderWidth: 1
            }
        ],
        options: {
            responsive: true,
            legend: {
                display: false,
            },
            hover: {
                onHover: function (e) {
                    var point = this.getElementAtEvent(e);
                    e.target.style.cursor = point.length ? 'pointer' : 'default';
                },
            },
        }
    }
}

function calculatePoint(i, intervalSize, colorRangeInfo) {
    var { colorStart, colorEnd, useEndAsStart } = colorRangeInfo;
    return (useEndAsStart
        ? (colorEnd - (i * intervalSize))
        : (colorStart + (i * intervalSize)));
}

function interpolateColors(dataLength, colorScale, colorRangeInfo) {
    var { colorStart, colorEnd } = colorRangeInfo;
    var colorRange = colorEnd - colorStart;
    var intervalSize = colorRange / dataLength;
    var colorPoint;
    var colorArray = [];

    for (let i = 0; i < dataLength; i++) {
        colorPoint = calculatePoint(i, intervalSize, colorRangeInfo);
        colorArray.push(colorScale(colorPoint));
    }

    return colorArray;
}

export function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

export async function transposeAnyData(data) {
    var result = [];
    data.forEach((ligne) => {
        Object.keys(ligne).forEach((key) => {
            if (result[key] == null) result[key] = []
            result[key].push(ligne[key])
        });
    });
    return result;
}