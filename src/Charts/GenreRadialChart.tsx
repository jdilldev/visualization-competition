import * as React from "react";

import { ResponsiveRadialBar } from '@nivo/radial-bar'
import { CustomTooltip, PopcornNote } from ".";
import { theme } from "./theme";

const GenreRadialChart = ({ data, genreRange }) => (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
        <div style={{ height: '36vh', width: '90%', flexGrow: 1, flexBasis: .8, marginTop: '10px' }}>
            <ResponsiveRadialBar
                data={data}
                theme={theme}
                colors={['#E76F51', '#F4A261', '#E9C46A', '#2A9D8F',]}
                valueFormat=">-.2f"
                margin={{ top: 30, right: 120, bottom: 30, left: 5 }}
                padding={0.1}
                innerRadius={0}
                enableRadialGrid={false}
                //enableCircularGrid={true}
                tracksColor={'rgba(0, 0, 0, .15)'}
                cornerRadius={0}
                //maxValue={200}
                enableTracks={true}
                radialAxisStart={genreRange !== 'all' ? { tickSize: 0, tickPadding: 5, tickRotation: 0 } : null}
                circularAxisOuter={null}
                //circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 60,
                        translateY: 0,
                        itemsSpacing: 6,
                        itemDirection: 'left-to-right',
                        itemWidth: 70,
                        itemHeight: 18,
                        itemTextColor: 'white',
                        symbolSize: 10,
                        symbolShape: 'circle',
                        // itemOpacity: .85,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1,
                                }
                            }
                        ]
                    }
                ]}
                tooltip={({ bar }) => {
                    const genreTotal = data.filter((genre) => bar.groupId === genre.id)[0].data.reduce((a, b) => ({ y: a.y + b.y })).y
                    return <CustomTooltip barType="radial" content={{ name: bar.groupId, value: { name: bar.category, value: (100 * bar.value / genreTotal).toFixed(0) }, color: bar.color }} />
                }}
            />
        </div>
        <div style={{ flexBasis: .5, flexGrow: .5 }}>
            <PopcornNote text="Although there was an overwhelmingly more amount of data available data for Western nations, it appears they tend to pass more often." tooltipText="molly" timeFrameText="all movies" />
        </div>
    </div>
)

export default GenreRadialChart