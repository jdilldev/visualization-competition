import { Grid, } from '@nextui-org/react';
import { FrameLines } from '@arwes/core';
import InsightIcon from '../public/icons/brain.svg'
import { ReactNode, useContext } from 'react';
import { DEFAULT_THEME_PROMPT, SummitThemeContext } from '../app/page';
import { getWorldAvg, retrieveData } from '../app/data/generateData';
import RadarChart from './Charts/RadarChart';
import RadialBarChart from './Charts/RadialBar';
import { ParentSize } from '@visx/responsive';

type DefaultStatItem = {
    numeric: string
    text: string
}

const defaultStatBoxes: DefaultStatItem[] = [
    { numeric: '15', text: 'Subregions' },
    { numeric: '174', text: 'Countries' },
    { numeric: '6', text: 'Themes' },
    { numeric: '', text: 'Endless Insights' }
]

const StatBox = ({ width, height, content }: { width?: number, height?: number, content: ReactNode }) => {
    const selectedTheme = useContext(SummitThemeContext)

    return <div className='w-1/4 h-full flex flex-col justify-between'>
        <ParentSize debounceTime={10}>{({ width, height }) =>
            <FrameLines style={{ width: width, height: height }} palette='secondary' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
                {getContentForTheme(width, height - 20, selectedTheme, 3)}
            </FrameLines >
        }
        </ParentSize>
    </div>


}

const DefaultStatBox = ({ item }: { item: DefaultStatItem }) => <>
    {item.numeric !== '' ? <p className='w-12 h-12 font-nebula text-3xl'>{item.numeric}</p> : <InsightIcon className='w-16 h-12 pb-2 fill-[#9fd0dcb1]' />}
    <p className='font-body uppercase md:font-nebula lg:whitespace-nowrap text-xs md:text-xl'>{item.text}</p>
</>

const getContentForTheme = (width: number, height: number, theme: string, position: number) => {
    switch (theme) {
        case 'Accelerating Development and Governance':
            switch (position) {
                case 0:
                    return <p>acc 1</p>
                case 1:
                    return <p>acc 2</p>
                case 2:
                    return <p>acc 3</p>
                case 3:
                    const governanceGDP = getWorldAvg('government_gdp')
                    const data = [{ id: '% GDP spent on Government', data: [{ x: 'gov', y: governanceGDP }] }]
                    return <RadialBarChart width={width} height={height} data={data} />
            }
        case 'Global City Design and Sustainability':
            switch (position) {
                case 0:
                    return <p>acc 1</p>
                case 1:
                    return <p>acc 2</p>
                case 2:
                    return <p>acc 3</p>
                case 3:
                    return <p>acc 4</p>
            }
    }


}

export const StatBoxes = () => {
    retrieveData({ aggregator: "world", metrics: ['2017_HDI'], }, "hierarchical");
    //console.log(getWorldAvg('2018_unemployment'))
    const selectedTheme = useContext(SummitThemeContext)
    return <Grid className='flex gap-4 justify-between h-[10%] md:h-[12.5%] lg:h-[20%]'>

        {defaultStatBoxes.map((item, index) =>
            <StatBox content={selectedTheme === DEFAULT_THEME_PROMPT
                ? <DefaultStatBox item={item} />
                : getContentForTheme(selectedTheme, index)}
            />)
        }
    </Grid>
}