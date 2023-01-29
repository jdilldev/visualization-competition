import { getWorldAvg } from "../../../app/data/generateData"
import { ChartDimensions } from "../../../app/data/types"
import RadarChart from "../RadarChart"


export const GovernmentStabilityRadar = ({ width, height }: ChartDimensions) => {
    const data = [
        {
            "metric": "Government Effectiveness",
            "Score": 12//getWorldAvg('2021_government_effectiveness')
        },
        {
            "metric": "Rule of Law",
            "Score": 8//getWorldAvg('2022_government_integrity')
        },
        {
            "metric": "Political Instability",
            "Score": 15 //getWorldAvg('2021_political_instability')
        },
        {
            "metric": "Control of Corruption",
            "Score": 21 //getWorldAvg('2021_political_instability')
        },
        {
            "metric": "Regulatory Quality",
            "Score": 17 //getWorldAvg('2021_political_instability')
        }
    ]

    return < RadarChart
        dimensions={{ width, height }
        }
        data={data}
        indexBy={'metric'}
        keys={['Score']} />

}

