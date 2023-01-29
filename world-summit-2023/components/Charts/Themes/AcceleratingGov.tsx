import { getWorldAvg } from "../../../app/data/generateData"
import { ChartDimensions } from "../../../app/data/types"
import BulletChart from "../BulletChart"
import RadarChart from "../RadarChart"
import { GdpPercentagesRadialBarChart } from "../../Shared"
import LegendIcon from '../../../public/icons/rect-vertical.svg'
import LegendIconII from '../../../public/icons/rect-horizontal.svg'
import PieChart from "../PieChart"

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
        dimensions={{ width, height }}
        data={data}
        indexBy={'metric'}
        keys={['Score']} />

}

export const GovernmentRadialBar = ({ width, height }: ChartDimensions) => <>
    {/*     <p className="text-xs text-center font-body " >% GDP Expenditure Across Sectors</p>
 */}    <GdpPercentagesRadialBarChart width={width} height={height} relevantMetric='Government' />
</>

export const GovernmentHealthBullet = ({ width, height }: ChartDimensions) => {
    const data = [
        {
            "id": "HDI (2021)",
            "ranges": [
                0,
                4,
                8
            ],
            "measures": [
                2,
                6,

            ],
            "markers": [
                3
            ]
        },
        {
            "id": "Integrity (2022)",
            "ranges": [
                0,
                2,
                6,
                8
            ],
            "measures": [
                4,
            ],
            "markers": [
                3
            ]
        },
        {
            "id": "Efficacy (2021)",
            "ranges": [
                0,
                2,
                6,
                8
            ],
            "measures": [
                7
            ],
            "markers": [
                3
            ]
        }
    ]
    return <>
        <div className="flex flex-col items-start justify-between">
            <p className="font-agelast text-lg">Government Health</p>
            <div className="w-full text-sm flex flex-row justify-evenly gap-3 lg:gap-1">
                {['Global Avg', 'Bottom 50th percentile', 'Top 50th percentile']
                    .map(item => <div className="flex flex-row items-center">{item === 'Global Avg' ? <LegendIcon className='h-6 w-5 pr-2 fill-[#ffb84ddf]' /> : <LegendIconII className={`h-6 w-5 pr-2 ${item === 'Bottom 50th percentile' ? 'fill-[#b2f54de0]' : 'fill-[#7726f982]'}`} />}<span className='whitespace-nowrap'>{item}</span></div>)
                }
            </div>
        </div>
        <BulletChart data={data} width={width} height={height} />
    </>
}


export const GovernmentHDIDifferenceChart = ({ width, height }: ChartDimensions) => {

    return <p>hi</p>
}

export const GovernmentIncreaseDecreaseChart = ({ width, height }: ChartDimensions) => {
    const data = [
        {
            "id": "Increased",
            "value": 20,
        },
        {
            "id": "Decreased",
            "value": 40,
        },

    ]

    return <PieChart data={data} width={width} height={height} />
}