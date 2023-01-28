import { FrameCorners } from '@arwes/core';
import { Radar } from '@nivo/radar'
import { DefaultPlaceholder } from './Shared';


type ChartDimensions = { width: number; height: number }

/* const AreaChart = ({ width, height }: ChartDimensions) => {
    return <Example width={width - 20} height={height - 20} />
} */
const data = [
    {
        "taste": "fruity",
        "syrah": 79
    },
    {
        "taste": "bitter",
        "syrah": 20
    },
    {
        "taste": "heavy",
        "syrah": 42
    },
]

const RadarChart = ({ width, height }: ChartDimensions) =>
    <Radar
        width={width}
        height={height}
        data={data}
        keys={['syrah']}
        indexBy="taste"
        valueFormat=">-.2f"
        margin={{ top: 30, right: 0, bottom: 30, left: 0 }}
        borderColor={{ from: 'color', modifiers: [] }}
        gridLabelOffset={20}
        dotSize={5}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={1}
        colors={{ scheme: 'blues' }}
        fillOpacity={.5}
        blendMode="overlay"
        motionConfig="wobbly"
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />


export const ChartI = ({ selectedTheme, width, height }: { selectedTheme: string, width: number, height: number }) => {
    return <FrameCorners
        showContentLines
        cornerLength={50}
        cornerWidth={3}
        animator={{ animate: false }}
        style={{ width: width, height: height }}
    >
        <DefaultPlaceholder height={height} placeholderLocation='one' />
    </FrameCorners>
}
