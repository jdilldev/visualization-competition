import { retrieveData } from "../../../app/data/generateData"
import { ChartDimensions, LinearData } from "../../../app/data/types"
import LineChart from "../LineChart"
import GlobalWarmingIcon from '../../../public/icons/global-melting.svg'
import { useMobile } from "../../../app/hooks/hooks"

export const ShareOfElectricityFromRenewables = ({ dimensions: { width, height } }: { dimensions: ChartDimensions }) => {
    const renewableEnergyTrends = retrieveData({ aggregator: 'multiRegions', metrics: ['2015_electricity_from_renewables', '2020_electricity_from_renewables'], }, 'linear') as LinearData[]
    return <LineChart data={renewableEnergyTrends} dimensions={{ width, height }} />
}

export const ParisAgreementStatus = () => {
    //https://climateactiontracker.org/countries/
    // no countries are meeting the agreement
    // 9 countries are close (< 2°C WORLD; 1.5 is target)
    return <p className='h-full text-sm flex flex-col justify-around gap-2'>
        <span className='font-agelast capitalize text-center hover:text-blue-400'>
            <a target="_blank" rel="noopener noreferrer" href="www.google.com">paris agreement</a>
        </span>
        <span className='text-xs text-center text-green-400'>Target: -1.5 ºC Global Temp </span>
        <hr className='border-solid border-red-400 border-1' />
        <p><span className='text-purple-400'>0 countries</span> meet the target</p>
        <p><span className="text-cyan-300">9 countries</span> are close</p>
    </p>
}

export const WaterStressByRegion = () => {
    //2019 https://www.wri.org/insights/17-countries-home-one-quarter-worlds-population-face-extremely-high-water-stress
    //https://www.prb.org/resources/finding-the-balance-population-and-water-scarcity-in-the-middle-east-and-north-africa/

    //https://www.unwater.org/publications/progress-level-water-stress-2021-update
    //https://sdg6data.org/en/snapshots#demo-wrapper
    //https://www.unwater.org/sites/default/files/app/uploads/2022/03/SDG-642-Infographic_Introducing-water-stress_Dec-2021.pdf
    // (higher hte worse)
    // northern and western africa - 84%
    //central and southern asia - 70%
    //eastern and southeastern asia -31%
    //europe and north america -12%
    //latin america and carribbean  - 7%
    // subsaharan-africa - 6%
    //australia and new zealand
    return <></>
}

export const CorrelationBetweenCO2EmissionsAndRenewables = () => {
}


export const HappyPlanetIndex = ({ dimensions: { width, height } }: { dimensions: ChartDimensions }) => {
    return <></>
}

export const AvgGlobalTempChangePerDecade = ({ dimensions: { width, height } }: { dimensions: ChartDimensions }) => {
    // https://www.climate.gov/news-features/understanding-climate/climate-change-global-temperature#:~:text=Earth's%20temperature%20has%20risen%20by,0.18%C2%B0%20C)%20per%20decade.
    return <div style={{ width: width - 10, height }} className='flex flex-col items-center md:gap-2 md:mt-0'>
        <GlobalWarmingIcon className='h-6 w-8 md:w-12 basis-1/2 fill-[#c63d3d]' />
        <p className='text-center text-xs lg:text-sm flex flex-col items-center justify-center'><span>~ .18 ºC (~.32 ºF)</span><span className="font-bold uppercase md:whitespace-nowrap">increase per decade</span><span>Since 1981</span></p>
    </div>
}
