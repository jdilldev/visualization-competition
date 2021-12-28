import * as React from "react";

import { ResponsiveRadialBar } from '@nivo/radial-bar'
import { PopcornNote } from ".";

const data = [
    {
        "id": "Supermarket",
        "data": [
            {
                "x": "Vegetables",
                "y": 104
            },
            {
                "x": "Fruits",
                "y": 103
            },
            {
                "x": "Meat",
                "y": 230
            },
            {
                "x": "Fish",
                "y": 219
            }
        ]
    },
    {
        "id": "Combini",
        "data": [
            {
                "x": "Vegetables",
                "y": 29
            },
            {
                "x": "Fruits",
                "y": 207
            },
            {
                "x": "Meat",
                "y": 93
            },
            {
                "x": "Fish",
                "y": 282
            }
        ]
    },
    {
        "id": "Online",
        "data": [
            {
                "x": "Vegetables",
                "y": 126
            },
            {
                "x": "Fruits",
                "y": 157
            },
            {
                "x": "Meat",
                "y": 209
            },
            {
                "x": "Fish",
                "y": 71
            }
        ]
    }
]
const GenreRadialChart = () => (
    <div style={{ width: '30%', display: 'flex', alignItems: 'center' }}>
        <ResponsiveRadialBar
            data={data}
            valueFormat=">-.2f"
            padding={0.4}
            cornerRadius={2}
            radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
            circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
            legends={[
                {
                    anchor: 'right',
                    direction: 'column',
                    justify: false,
                    translateX: 80,
                    translateY: 0,
                    itemsSpacing: 6,
                    itemDirection: 'left-to-right',
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    symbolSize: 18,
                    symbolShape: 'square',
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
        <PopcornNote text="dummy test" />
    </div>
)

export default GenreRadialChart