import * as React from "react";

import { ResponsiveLine } from '@nivo/line'
import { theme } from './theme';
import { CustomTooltip, PopcornNote } from ".";

const data = [
    {
        "id": "japan",
        "color": "hsl(354, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 223
            },
            {
                "x": "helicopter",
                "y": 152
            },
            {
                "x": "boat",
                "y": 60
            },
            {
                "x": "train",
                "y": 221
            },
            {
                "x": "subway",
                "y": 227
            },
            {
                "x": "bus",
                "y": 107
            },
            {
                "x": "car",
                "y": 117
            },
            {
                "x": "moto",
                "y": 3
            },
            {
                "x": "bicycle",
                "y": 22
            },
            {
                "x": "horse",
                "y": 86
            },
            {
                "x": "skateboard",
                "y": 100
            },
            {
                "x": "others",
                "y": 103
            }
        ]
    },
    {
        "id": "france",
        "color": "hsl(262, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 277
            },
            {
                "x": "helicopter",
                "y": 99
            },
            {
                "x": "boat",
                "y": 4
            },
            {
                "x": "train",
                "y": 26
            },
            {
                "x": "subway",
                "y": 203
            },
            {
                "x": "bus",
                "y": 184
            },
            {
                "x": "car",
                "y": 47
            },
            {
                "x": "moto",
                "y": 142
            },
            {
                "x": "bicycle",
                "y": 7
            },
            {
                "x": "horse",
                "y": 89
            },
            {
                "x": "skateboard",
                "y": 213
            },
            {
                "x": "others",
                "y": 61
            }
        ]
    }
]
const OverTimeLineChart = () => (
    <div style={{ display: 'flex', flexDirection: 'column', width: '39%', marginLeft: '10px' }}>
        <div style={{ height: '30vh' }}>
            <PopcornNote text="Although there was an overwhelmingly more amount of data available data for Western nations, it appears they tend to pass more often." tooltipText="hi" timeFrameText="by the decade" />
            <ResponsiveLine
                data={data}
                theme={theme}
                colors={['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51']}
                margin={{ top: 10, right: 110, bottom: 130, left: 80 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: -54,
                    legend: 'transportation',
                    legendOffset: 55,
                    legendPosition: 'middle'
                }}
                pointSize={7}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                areaOpacity={.7}
                //areaBlendMode="exclusion"
                areaBlendMode="normal"
                enableGridX={false}
                enableGridY={true}
                enableArea={true}
                useMesh={true}
                gridYValues={[0, 250, 500]}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'total movies',
                    legendPosition: 'middle',
                    tickValues: [0, 250, 500],
                    legendOffset: -60
                }}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                enableSlices='x'
                sliceTooltip={({ slice }) => {
                    console.log(slice.points[0].data.xFormatted)
                    return <div
                        style={{
                            background: 'white',
                            padding: '9px 12px',
                            border: '1px solid #ccc',
                            color: "black"
                        }}
                    >
                        <div>Year: {slice.points[0].data.xFormatted}</div>
                        {slice.points.map(point => (
                            < div
                                key={point.id}
                                style={{
                                    color: point.serieColor,
                                    padding: '3px 0',
                                }}
                            >
                                <strong>{point.serieId}</strong> [{point.data.yFormatted}]
                            </div>
                        ))}
                    </div>
                }
                }
            />
        </div>
    </div>
)

export default OverTimeLineChart