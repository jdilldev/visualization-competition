import * as React from "react";

import { ResponsiveRadialBar } from '@nivo/radial-bar'
import { CustomTooltip, PopcornNote } from ".";
import { theme } from "./theme";

const GenreRadialChart = ({ data, genreRange }) => {
    const genreTotals: { genre: string, total: number }[] = []
    React.useEffect(() => {
        // get the totals for the genres in this set in order to use them for the tooltip
        data.forEach(genre => {
            const total = genre.data.reduce((a, b) => ({ y: a.y + b.y })).y
            genreTotals.push({ genre: genre.id, total: total })
        });
    });
    return (
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
                        const obj = genreTotals.filter(genre => bar.groupId === genre.genre)
                        const genreTotal = obj[0] ? obj[0].total : 0

                        return <CustomTooltip barType="radial" content={{ name: bar.groupId, value: { name: bar.category, value: (100 * bar.value / genreTotal).toFixed(0) }, color: bar.color }} />
                    }}
                />
            </div>
            <div style={{ flexBasis: .5, flexGrow: .7 }}>
                <PopcornNote timeFrameText="all movies" text='The genres (rings) in this radial bar chart have been grouped by their total data points. The genres are ordered such that the outermost ring is the longest, this way you can compare the relative percentages with total data points. Musicals and Family movies performed the best, while  Westerns and Shorts performed the worst.' />
            </div>
        </div>
    )
}

export default GenreRadialChart