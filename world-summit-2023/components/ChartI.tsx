import { FrameCorners } from '@arwes/core';
import { Radar } from '@nivo/radar'
import { useContext } from 'react';
import { getWorldAvg, retrieveData } from '../app/data/generateData';
import { SummitThemeContext } from '../app/page';
import RadarChart from './Charts/RadarChart';
import { DefaultPlaceholder } from './Shared';


const data = [
    {
        "metric": "Government Effectiveness",
        "value": 12//getWorldAvg('2021_government_effectiveness')
    },
    {
        "metric": "Rule of Law",
        "value": 8//getWorldAvg('2022_government_integrity')
    },
    {
        "metric": "Political Instability",
        "value": 15 //getWorldAvg('2021_political_instability')
    },
    {
        "metric": "Control of Corruption",
        "value": 21 //getWorldAvg('2021_political_instability')
    },
    {
        "metric": "Regulatory Quality",
        "value": 17 //getWorldAvg('2021_political_instability')
    }
]


export const ChartI = ({ width, height }: { width: number, height: number }) => {
    const selectedTheme = useContext(SummitThemeContext)

    return <FrameCorners
        showContentLines
        cornerLength={50}
        cornerWidth={3}
        animator={{ animate: false }}
        style={{ width: width, height: height }}
    >
        <RadarChart
            dimensions={{ width, height }}
            data={data}
            indexBy={'metric'}
            keys={['value']} />
    </FrameCorners>
}
