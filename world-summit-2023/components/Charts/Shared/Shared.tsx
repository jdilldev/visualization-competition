import PieChartIcon from '../../../public/icons/pie-chart.svg';
import LineChartIcon from '../../../public/icons/line-chart.svg';
import { getWorldAvg } from '../../../app/data/generateData';
import { ChartDimensions } from '../../../app/data/types';
import RadialBarChart from './RadialBar';


type DefaultPlaceholderProps = {
    height: number;
    placeholderLocation: 'one' | 'two'
}

export const ButtonGroup = ({ values, className, controlValue, onChange }: { values: string[], className: string, controlValue: string, onChange: (value: string) => void }) => {
    return <div className={`flex flex-row gap-1 rounded-lg border-2 border-solid border-green-600 ${className}`}>
        {values.map(value => <div
            key={value}
            onClick={() => {
                const lowerCaseValue = value.toLowerCase()
                onChange(lowerCaseValue)
            }}
            className={`opacity-80 hover:opacity-100 px-3 font-body ${controlValue === value.toLowerCase() ? 'bg-green-600 text-white border-none' : 'text-green-600'}`}>
            {value}
        </div>)}
    </div>
}

export const DefaultPlaceholder = ({ height, placeholderLocation }: DefaultPlaceholderProps) => {
    const chartIconClassName = 'w-16 h-16 md:w-28 md:h-28'
    return <div style={{ height: height }} className='flex flex-row mb-3 md:flex-col gap-4 justify-center items-center'>
        {placeholderLocation === 'one' ? <PieChartIcon className={chartIconClassName} /> : <LineChartIcon className={chartIconClassName} />}
        <p className='font-agelast uppercase tracking-widest text-2xl'>Select a theme</p>
    </div>
}

export const GdpPercentagesRadialBarChart = ({ width, height, relevantMetric }: { width: number, height: number, relevantMetric: string }) => {
    const governanceGDP = getWorldAvg('government_gdp')
    const healtcareGDP = getWorldAvg('2019_health_gdp')
    const educationGDP = getWorldAvg('2021_education_gdp')
    const militaryGDP = getWorldAvg('military_gdp')
    const data = [
        { id: 'Government', data: [{ x: '% of GDP', y: governanceGDP }] },
        { id: 'Healthcare', data: [{ x: '', y: healtcareGDP }] },
        { id: 'Education', data: [{ x: '', y: educationGDP }] },
        { id: 'Military', data: [{ x: '', y: militaryGDP }] },
    ]

    return <RadialBarChart relevantMetric={relevantMetric} width={width - 20} height={height} data={data} />

}