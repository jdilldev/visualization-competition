import * as React from "react";

import { ResponsiveLine } from '@nivo/line'
import { theme } from './theme';
import { CustomTooltip, PopcornNote } from ".";

const OverTimeLineChart = ({ data, lineChartType, lineChartUpdate }) => (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '10px', }}>
        <PopcornNote text="Between 1900 and 2021, Bechdel ratings have increased, but not drastically. Change the dropdown to see how ratings changed throughout each decade." tooltipText="hi" timeFrameText="by the decade" />
        <select style={{ marginTop: '-10px', }} value={lineChartType} onChange={(e) => lineChartUpdate(e.target.value)}>
            <option value={'by decade'}>By decade</option>
            <option value='by year of decade'>By year of decade</option>
        </select>
        <div style={{ height: '42vh', marginTop: '-50px' }}>
            <ResponsiveLine
                data={data}
                theme={theme}

                colors={lineChartType === 'by year of decade' ? ['#b0d6d6', '#9ccccc', '#83bfbf', '#64afaf', '#3d9b9b', '#3d9b9b', '#0d8282', '#0b6f6f', '#095d5d', '#074b4b', '#053939', '#264653', '#001219'] : ['#F4A261', '#E76F51']}
                margin={{ top: 70, right: 20, bottom: 170, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                //  pointSymbol={Action}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: -30,
                    legend: lineChartType === 'by year of decade' ? 'year of decade ' : 'decade',
                    legendOffset: 45,
                    legendPosition: 'middle',
                    // tickValues: ['start', 'middle', 'end'],
                }}
                // pointColor='#F4A261'
                pointSize={3}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                areaOpacity={.7}
                //areaBlendMode="exclusion"
                areaBlendMode="normal"
                enableGridX={false}
                enableGridY={true}
                // enableArea={true}
                useMesh={true}
                gridYValues={[0, .5, 1, 1.5, 2, 2.5]}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'avg movie score',
                    legendPosition: 'middle',
                    tickValues: [0, .5, 1, 1.5, 2, 2.5],
                    legendOffset: -50
                }}
                /*  legends={[
                     {
                         anchor: 'bottom-right',
                         direction: 'column',
                         justify: false,
                         translateX: 100,
                         translateY: 10,
                         itemsSpacing: 0,
                         itemDirection: 'left-to-right',
                         itemWidth: 80,
                         itemHeight: 15,
                         itemOpacity: 0.75,
                         symbolSize: 8,
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
                 ]} */
                enableSlices='x'
                sliceTooltip={({ slice }) => {
                    return <div
                        style={{
                            background: 'white',
                            padding: '9px 12px',
                            border: '1px solid #ccc',
                            color: "black"
                        }}
                    >
                        {/*<div>Year: {slice.points[0].data.xFormatted}</div>*/}

                        {slice.points.map(point => {
                            const year = (parseInt(point.serieId as string) + parseInt(point.data.x as string))
                            return year <= 2021 || point.serieId === 'm' ? < div
                                key={point.id}
                                style={{
                                    color: point.serieColor,
                                    padding: '3px 0',
                                }}
                            >
                                <strong>{lineChartType === 'by year of decade' ? (parseInt(point.serieId as string) + parseInt(point.data.x as string)) : point.data.xFormatted}</strong> [{point.data.yFormatted}]
                            </div> : null
                        })}
                    </div>
                }
                }
            />
        </div>
    </div>
)

export default OverTimeLineChart