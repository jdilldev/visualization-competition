import * as React from "react";

import { ResponsiveRadialBar } from '@nivo/radial-bar'
import { PopcornNote } from ".";
import { theme } from "./theme";

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
    <div style={{ width: '47%', display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
        <div style={{ height: '36vh', width: '90%', borderLeft: '2px solid gold', flexGrow: 1, flexBasis: .8, marginTop: '20px' }}>
            <ResponsiveRadialBar
                data={data}
                theme={theme}
                colors={['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51']}
                valueFormat=">-.2f"
                margin={{ top: 30, right: 100, bottom: 30, left: 5 }}
                padding={0.4}
                cornerRadius={0}
                radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
                circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
                legends={[
                    {
                        anchor: 'right',
                        direction: 'column',
                        justify: false,
                        translateX: 90,
                        translateY: 0,
                        itemsSpacing: 6,
                        itemDirection: 'left-to-right',
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        symbolSize: 10,
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
        </div>
        <div style={{ flexBasis: .5, flexGrow: .5 }}>
            <PopcornNote text="Although there was an overwhelmingly more amount of data available data for Western nations, it appears they tend to pass more often." />
        </div>
    </div>
)

export default GenreRadialChart