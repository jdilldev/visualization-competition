import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { FrameCorners } from '@arwes/core';
import Example from './Example';
import ChartIcon from '../public/icons/pie-chart.svg';
import { restrieveSingleSeriesDatum } from '../app/data/generateData';
import { Point } from '@visx/point';
import { Line, LineRadial } from '@visx/shape';

type ChartDimensions = { width: number; height: number }

const AreaChart = ({ width, height }: ChartDimensions) => {
    return <Example width={width - 20} height={height - 20} />
}

const RadialChart = ({ width, height }: ChartDimensions) => {

}

const DefaultPlaceholder = () => {
    return <div className='flex flex-row md:flex-col gap-4 justify-center items-center'>
        <ChartIcon className='w-20 h-20 md:w-32 md:h-32' />
        <p className='font-agelast uppercase tracking-widest text-2xl'>Choose a theme</p>
    </div>
}

export const ChartI = ({ selectedTheme }: { selectedTheme: string }) => {
    return <ParentSize debounceTime={10}>{({ width, height }) =>
    (<FrameCorners
        showContentLines
        cornerLength={50}
        cornerWidth={3}
        animator={{ animate: false }}
        style={{ width: width, height: height }}
    >
        <DefaultPlaceholder />
    </FrameCorners>)
    }</ParentSize>
}