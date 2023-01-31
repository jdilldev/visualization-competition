import { Line, Serie } from '@nivo/line'
import { NIVO_THEME } from '../../app/constants'
import { ChartDimensions, LinearData } from '../../app/data/types'


const LineChart = ({ data, dimensions: { width, height }, max, min }: { data: LinearData[], dimensions: ChartDimensions, max?: number, min?: number }) => (
    <Line
        width={width}
        height={height}
        data={data}
        theme={NIVO_THEME}
        lineWidth={2}
        enableSlices={'x'}
        //colors={['red']}
        margin={{ top: 20, right: 25, bottom: 50, left: 30 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: min ? min : 0,
            max: max ? max : 'auto',
            stacked: false,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 10,
            tickRotation: 0,
            //legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={5}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderWidth={1}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
    />
)

export default LineChart;