import { ResponsiveBar } from '@nivo/bar'
import * as React from "react";
import { CustomTooltip, PopcornNote } from '.';
import { theme } from './theme';

const StackedRatingChart = () => (
    <div style={{ display: 'flex', flexDirection: 'column', width: '35%', marginLeft: '10px', marginTop: '10px', borderRight: '2px solid #264653' }}>
        <div style={{ width: '100%', overflowX: 'scroll', overflowY: 'hidden', }}>
            <div style={{ height: '35vh', minWidth: '600px', }}>
                <ResponsiveBar
                    theme={theme}
                    data={[
                        {
                            "country": "AD",
                            "hot dog": 108,
                            "hot dogColor": "hsl(51, 70%, 50%)",
                            "burger": 113,
                            "burgerColor": "hsl(355, 70%, 50%)",
                            "sandwich": 56,
                            "sandwichColor": "hsl(184, 70%, 50%)",
                            "kebab": 109,
                            "kebabColor": "hsl(244, 70%, 50%)",
                            "fries": 1,
                            "friesColor": "hsl(220, 70%, 50%)",

                        },
                        {
                            "country": "AE",
                            "hot dog": 186,
                            "hot dogColor": "hsl(230, 70%, 50%)",
                            "burger": 181,
                            "burgerColor": "hsl(142, 70%, 50%)",
                            "sandwich": 59,
                            "sandwichColor": "hsl(207, 70%, 50%)",
                            "kebab": 126,
                            "kebabColor": "hsl(203, 70%, 50%)",
                            "fries": 143,
                            "friesColor": "hsl(149, 70%, 50%)",

                        },
                        {
                            "country": "AF",
                            "hot dog": 20,
                            "hot dogColor": "hsl(52, 70%, 50%)",
                            "burger": 91,
                            "burgerColor": "hsl(132, 70%, 50%)",
                            "sandwich": 14,
                            "sandwichColor": "hsl(332, 70%, 50%)",
                            "kebab": 131,
                            "kebabColor": "hsl(50, 70%, 50%)",
                            "fries": 48,
                            "friesColor": "hsl(282, 70%, 50%)",

                        },
                        {
                            "country": "AG",
                            "hot dog": 70,
                            "hot dogColor": "hsl(257, 70%, 50%)",
                            "burger": 16,
                            "burgerColor": "hsl(65, 70%, 50%)",
                            "sandwich": 23,
                            "sandwichColor": "hsl(30, 70%, 50%)",
                            "kebab": 122,
                            "kebabColor": "hsl(333, 70%, 50%)",
                            "fries": 27,
                            "friesColor": "hsl(124, 70%, 50%)",

                        },
                        {
                            "country": "AI",
                            "hot dog": 101,
                            "hot dogColor": "hsl(70, 70%, 50%)",
                            "burger": 87,
                            "burgerColor": "hsl(171, 70%, 50%)",
                            "sandwich": 147,
                            "sandwichColor": "hsl(181, 70%, 50%)",
                            "kebab": 103,
                            "kebabColor": "hsl(52, 70%, 50%)",
                            "fries": 113,
                            "friesColor": "hsl(32, 70%, 50%)",

                        },
                        {
                            "country": "AL",
                            "hot dog": 44,
                            "hot dogColor": "hsl(359, 70%, 50%)",
                            "burger": 117,
                            "burgerColor": "hsl(156, 70%, 50%)",
                            "sandwich": 123,
                            "sandwichColor": "hsl(190, 70%, 50%)",
                            "kebab": 60,
                            "kebabColor": "hsl(253, 70%, 50%)",
                            "fries": 199,
                            "friesColor": "hsl(39, 70%, 50%)",

                        },
                        {
                            "country": "AM",
                            "hot dog": 78,
                            "hot dogColor": "hsl(11, 70%, 50%)",
                            "burger": 13,
                            "burgerColor": "hsl(340, 70%, 50%)",
                            "sandwich": 100,
                            "sandwichColor": "hsl(189, 70%, 50%)",
                            "kebab": 2,
                            "kebabColor": "hsl(317, 70%, 50%)",
                            "fries": 88,
                            "friesColor": "hsl(116, 70%, 50%)",
                            "donut": 20,
                            "donutColor": "hsl(56, 70%, 50%)"
                        }
                    ]}
                    keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
                    indexBy="country"
                    margin={{ top: 60, right: 30, bottom: 150, left: 60 }}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51']}
                    //enableGridY={true}
                    gridYValues={[0, 350, 700]}
                    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                    padding={.35}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    //labelTextColor={{ from: 'theme', modifiers: [['darker', 1.6]] }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'total movies',
                        legendPosition: 'middle',
                        tickValues: [0, 350, 700],
                        legendOffset: -45
                    }}
                    axisBottom={null}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'bottom',
                            direction: 'row',
                            justify: false,
                            translateX: 0,
                            translateY: 50,
                            itemsSpacing: 2,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemDirection: 'left-to-right',
                            itemOpacity: 0.85,
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
                    tooltip={({ id, indexValue, value, color }) => <CustomTooltip barType='bar' content={{ name: id as string, value: { name: indexValue.toString(), value: value }, color: color }} />}
                    role="application"
                    ariaLabel="Nivo bar chart demo"
                    barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
                />
            </div>
        </div >
        <div style={{ position: 'sticky' }}>
            <PopcornNote text={'Scroll to view all data. For all the movies that were assessed, you can see the composition of how many failed in which manner.'} tooltipText="yikes" />

        </div>
    </div>
)

export default StackedRatingChart