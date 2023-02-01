import { Grid, } from '@nextui-org/react';
import { FrameLines } from '@arwes/core';
import InsightIcon from '../public/icons/brain.svg'
import MagnifyIcon from '../public/icons/analytics.svg'
import { ReactNode, useContext } from 'react';
import { DEFAULT_THEME_PROMPT, SummitThemeContext } from '../app/page';
import { getWorldAvg, retrieveData } from '../app/data/generateData';
import RadarChart from './Charts/RadarChart';
import RadialBarChart from './Charts/RadialBarChart';
import { ParentSize } from '@visx/responsive';
import { GovernmentHDIDifferenceChart, GovernmentIncreaseDecreaseChart, GovernmentRadialBar, GovernmentStabilityRadar } from './Charts/Themes/AcceleratingGov';
import { GdpPercentagesRadialBarChart, StatCard } from './Shared';
import { AvgGlobalTempChangePerDecade, HappyPlanetIndex, ParisAgreementStatus, ShareOfElectricityFromRenewables, WaterStressByRegion } from './Charts/Themes/GlobalCityDesign';
import GlobalWarmingIcon from '../public/icons/global-warming.svg'
import { PRE_CONTENT_ICON_SIZE } from '../app/constants';
import { AstronautsAndSatellites, CryptoStats, GDPStats, SpaceAgencies } from './Charts/Themes/ExploringtheFrontier';

type DefaultStatItem = {
    numeric: string
    text: string
    bgImage?: string
}

const defaultStatBoxes: DefaultStatItem[] = [
    { numeric: '15', text: 'Subregions', /* bgImage: 'nw.jpg' */ },
    { numeric: '174', text: 'Countries', },
    { numeric: '6', text: 'Themes', },
    { numeric: '', text: 'Endless Insights', }
]

const StatBox = ({ item, index }: { item: DefaultStatItem, index: number }) => {
    const selectedTheme = useContext(SummitThemeContext)

    return <div style={{ backgroundImage: `url(${item.bgImage ? item.bgImage : ''})`, }} className='w-[24%] h-full flex flex-col justify-between bg-cover bg-top'>
        <ParentSize className={`backdrop-blur-[0px]  backdrop-invert-0 backdrop-contrast-125  backdrop-brightness-150 backdrop-saturate-100 bg-black/50 `} debounceTime={10}>{({ width, height }) =>
            <FrameLines
                hover
                style={{ width: width, height: height, }}
                palette='secondary'
                animator={{ animate: false }}
                largeLineWidth={2}
                smallLineWidth={4}
                smallLineLength={20}>
                {/* <MagnifyIcon className='absolute right-0 place-self-end hover:fill-yellow-400 w-4 h-4 fill-[#78cce2]' onClick={() => console.log('yoyo')} />*/}
                {selectedTheme === DEFAULT_THEME_PROMPT ? <DefaultStatBox item={item} /> : getContentForTheme(width - 5, height - 20, selectedTheme, index)}
            </FrameLines>
        }
        </ParentSize>
    </div>
}

const DefaultStatBox = ({ item }: { item: DefaultStatItem }) => <>
    {item.numeric !== '' ? <p className='font-nebula text-3xl'>{item.numeric}</p> : <InsightIcon className='w-16 h-12 -mt-3 fill-[#9fd0dcb1]' />}
    <p className='font-body font-white uppercase md:font-nebula whitespace-wrap text-xs md:text-xl'>{item.text}</p>
</>

const getContentForTheme = (width: number, height: number, theme: string, position: number) => {
    switch (theme) {
        case 'Accelerating Development and Governance':
            switch (position) {
                case 0:
                    return <GovernmentHDIDifferenceChart width={width} height={height} />
                case 1:
                    return <GovernmentIncreaseDecreaseChart width={width} height={height} />
                case 2:
                    return <GovernmentStabilityRadar width={width} height={height} />
                case 3:
                    return <GovernmentRadialBar width={width} height={height} />
            }
        case 'Global City Design and Sustainability':
            switch (position) {
                case 0:
                    return <AvgGlobalTempChangePerDecade dimensions={{ width, height }} />
                case 1:
                    return <WaterStressByRegion />
                case 2:
                    return <ParisAgreementStatus />
                case 3:
                    return <HappyPlanetIndex dimensions={{ width, height }} />
            }
        case 'Exploring the Frontiers':
            switch (position) {
                case 0:
                    return <CryptoStats dimensions={{ width, height }} />
                case 1:
                    return <GDPStats dimensions={{ width, height }} />
                case 2:
                    return <SpaceAgencies dimensions={{ width, height }} />
                case 3:
                    return <AstronautsAndSatellites dimensions={{ width, height }} />
            }
        case 'Governing Economic Resilience and Connectivity':
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
        case 'Future of Societies and Healthcare':
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
        case 'Prioritizing Learning and Work':
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
    return <Grid className='flex md:gap-4 justify-between h-[10%] md:h-[12.5%] lg:h-[20%]'>
        {defaultStatBoxes.map((item, index) =>
            <StatBox item={item} index={index} />
        )}
    </Grid>
}