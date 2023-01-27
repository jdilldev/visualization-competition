import { Text as DefaultText } from '@nextui-org/react';
import PieChartIcon from '../public/icons/pie-chart.svg';
import LineChartIcon from '../public/icons/line-chart.svg';
import ParentSize from '@visx/responsive/lib/components/ParentSize';


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
