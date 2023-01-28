import { Radar } from '@nivo/radar'
import { CategoricalData, ChartDimensions, CountryMetrics } from '../../app/data/types'
import { NIVO_THEME } from '../../app/constants'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const RadarChart = ({ data, indexBy, keys, dimensions }: { data: { [key: string]: string | number }[], indexBy: string, keys: string[], dimensions: ChartDimensions }) => (
    <Radar
        width={dimensions.width - 20}
        height={dimensions.height - 20}
        data={data}
        keys={keys}
        gridLevels={6}
        enableDots={false}
        indexBy={indexBy}
        valueFormat=">-.2f"
        margin={{ top: 30, right: 20, bottom: 10, left: 20 }}
        borderColor={{ from: 'color' }}
        gridLabelOffset={10}
        dotSize={5}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        fillOpacity={.6}
        colors={{ scheme: 'nivo' }}
        blendMode="difference"
        motionConfig="gentle"
        gridShape='linear'
        theme={NIVO_THEME}
        layers={['layers', 'grid', 'legends']}
    // gridLabel={({ anchor, angle, id }) => <g><text textAnchor={anchor} dominantBaseline={'central'}>{id}</text></g>}
    />
)

export default RadarChart
