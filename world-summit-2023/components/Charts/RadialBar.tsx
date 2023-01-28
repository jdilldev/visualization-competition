import { RadialBar } from '@nivo/radial-bar'
import { ParentSize } from '@visx/responsive'
import { NIVO_THEME } from '../../app/constants'
import { LinearData } from '../../app/data/types'

const RadialBarChart = ({ data, width, height }: { data: LinearData[], width: number, height: number }) => (
    <RadialBar
        width={width}
        height={height}
        data={data}
        valueFormat=">-.2f"
        padding={0.4}
        cornerRadius={2}
        //margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
        theme={NIVO_THEME}

    />
)

export default RadialBarChart
