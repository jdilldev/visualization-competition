import * as React from "react";

import { ResponsiveLine } from '@nivo/line'

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
    },
    {
        "id": "us",
        "color": "hsl(89, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 157
            },
            {
                "x": "helicopter",
                "y": 170
            },
            {
                "x": "boat",
                "y": 102
            },
            {
                "x": "train",
                "y": 66
            },
            {
                "x": "subway",
                "y": 40
            },
            {
                "x": "bus",
                "y": 210
            },
            {
                "x": "car",
                "y": 202
            },
            {
                "x": "moto",
                "y": 70
            },
            {
                "x": "bicycle",
                "y": 111
            },
            {
                "x": "horse",
                "y": 213
            },
            {
                "x": "skateboard",
                "y": 192
            },
            {
                "x": "others",
                "y": 40
            }
        ]
    },
    {
        "id": "germany",
        "color": "hsl(152, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 165
            },
            {
                "x": "helicopter",
                "y": 285
            },
            {
                "x": "boat",
                "y": 95
            },
            {
                "x": "train",
                "y": 57
            },
            {
                "x": "subway",
                "y": 14
            },
            {
                "x": "bus",
                "y": 128
            },
            {
                "x": "car",
                "y": 154
            },
            {
                "x": "moto",
                "y": 44
            },
            {
                "x": "bicycle",
                "y": 66
            },
            {
                "x": "horse",
                "y": 122
            },
            {
                "x": "skateboard",
                "y": 271
            },
            {
                "x": "others",
                "y": 136
            }
        ]
    },
    {
        "id": "norway",
        "color": "hsl(230, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 6
            },
            {
                "x": "helicopter",
                "y": 176
            },
            {
                "x": "boat",
                "y": 298
            },
            {
                "x": "train",
                "y": 118
            },
            {
                "x": "subway",
                "y": 237
            },
            {
                "x": "bus",
                "y": 85
            },
            {
                "x": "car",
                "y": 38
            },
            {
                "x": "moto",
                "y": 126
            },
            {
                "x": "bicycle",
                "y": 242
            },
            {
                "x": "horse",
                "y": 102
            },
            {
                "x": "skateboard",
                "y": 22
            },
            {
                "x": "others",
                "y": 233
            }
        ]
    }
]
const OverTimeLineChart = () => (
    <div style={{ width: '40%' }}>
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            yFormat=" >-.2f"
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
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
        />
    </div>
)

export default OverTimeLineChart