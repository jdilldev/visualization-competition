import { BarDatum, ResponsiveBar } from '@nivo/bar'
import * as React from "react";
import { CustomTooltip, PopcornNote } from '.';
import { theme } from './theme';


const StackedRatingChart = ({ data, type }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', borderRight: '2px solid #264653', marginTop: '10px' }}>
            <div style={{ height: '30vh', marginTop: '-20px' }}>
                <ResponsiveBar
                    theme={theme}
                    data={data}
                    keys={['One or no women', 'No female convo', 'Only discuss men', 'Pass']}
                    indexBy="decade"
                    margin={{ top: 90, right: 30, bottom: 110, left: 60 }}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={['#E76F51', '#F4A261', '#E9C46A', '#2A9D8F',]}
                    //enableGridY={true}
                    gridYValues={type === 'normalized' ? [0, 50, 100] : [0, 1000, 2000, 3000]}
                    enableLabel={false}
                    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                    padding={.35}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    //labelTextColor={{ from: 'theme', modifiers: [['darker', 1.6]] }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: type === 'normalized' ? 'total movies rated (%)' : 'total movies rated',
                        legendPosition: 'middle',
                        tickValues: type === 'normalized' ? [0, 50, 100] : [0, 1000, 2000, 3000],
                        legendOffset: -50
                    }}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: -30,
                        //legend: 'decade',
                        legendPosition: 'middle',
                        legendOffset: 20
                    }}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'bottom',
                            direction: 'row',
                            justify: false,
                            translateX: 0,
                            translateY: 55,
                            itemsSpacing: 40,
                            itemWidth: 90,
                            itemHeight: 20,
                            itemDirection: 'left-to-right',
                            //itemOpacity: 0.85,
                            symbolSize: 10,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                    tooltip={({ id, indexValue, value, color, label }) => type === 'normalized' ? <CustomTooltip barType='bar' content={{ name: id as string, value: { name: indexValue as string, value: value }, color: color }} /> : <CustomTooltip barType='bar' content={{ name: id as string, value: value, color: color }} />}
                    role="application"
                    ariaLabel="Nivo bar chart demo"
                    barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
                />

            </div >
            <div style={{ position: 'sticky', marginTop: '-43px' }}>
                <PopcornNote text={'Scroll to view all data. For all the movies that were assessed, you can see the composition of how many failed in which manner.'} tooltipText="yikes" timeFrameText='by the decade' />
            </div>
        </div>
    )
}

export default StackedRatingChart