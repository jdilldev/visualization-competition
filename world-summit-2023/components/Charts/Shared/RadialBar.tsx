import { RadialBar } from '@nivo/radial-bar'
import { ParentSize } from '@visx/responsive'
import { NIVO_THEME } from '../../../app/constants'
import { LinearData } from '../../../app/data/types'
import { useMobile } from '../../../app/hooks/hooks'

const RadialBarChart = ({ data, width, height, relevantMetric }: { data: LinearData[], width: number, height: number, relevantMetric: string }) => {
    const isMobile = useMobile()

    return <RadialBar
        maxValue={100}
        enableTracks={true}
        tracksColor='#555757b5'
        width={width}
        height={height}
        data={data}
        valueFormat=">-.2f"
        padding={0.4}
        cornerRadius={2}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        radialAxisStart={isMobile ? null : { tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={null}
        enableRadialGrid={false}
        theme={NIVO_THEME}
        borderWidth={1}
        borderColor={'lightblue'}
        colors={({ groupId }) => groupId === relevantMetric ? '#e4eff0' : '#4e7988'}
        tooltip={({ bar }) => <div className='text-sm text-center text-white p-2 bg-[#073956] rounded-sm opacity-90'><p>{bar.category}<br />Average {bar.formattedValue}% of GDP</p></div>}
    />
}

export default RadialBarChart
