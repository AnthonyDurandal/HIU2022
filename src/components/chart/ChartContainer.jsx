import { useEffect, useState } from "react"
import { useGlobalState } from "state-pool";
import { apiLink, chartCssDefaultPath } from "../../App";
import { createDataForChart, getChartData, transposeAnyData } from "./statFunctions";
import '../../styles/chart/ChartCssDefault.css'

export default function ChartContainer({ linkToApi, chartLabel, colorScale, /* colorRangeInfo, */labelsColumnName,
dataColumnName,LoadingComponent,ChartComponentWithoutData,transposeData,chartCssPath,chartClassName}){
    const [data, setData] = useState(null)

    useEffect(() => {
        // dynamicCssCall(chartCssPath, chartCssDefaultPath)
        linkToApi = apiLink+'/'+linkToApi
        getChartData('https://datausa.io/api/data?drilldowns=Nation&measures=Population', setData, chartLabel, labelsColumnName, dataColumnName, colorScale, transposeData)
    }, [])

    function dynamicCssCall(firstCssOptionPath, defaultCssOptionPath) {
        if (firstCssOptionPath === undefined || firstCssOptionPath === null) {
            console.log('defaultCssOptionPath  ' + defaultCssOptionPath)
            require(defaultCssOptionPath)
        } else {
            console.log('firstCssOptionPath')
            require(firstCssOptionPath);
        }
    }


    return (
        <div className={chartClassName}>
            {
                data!==null ?
                    <ChartComponentWithoutData data={data}/*  width={"100px"} *//>
                    :
                    <div>
                        <LoadingComponent width={"100%"} size={50} color="#686769" loading={true}/>
                    </div>
            }
        </div>
    )
}