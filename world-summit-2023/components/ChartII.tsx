import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { FrameCorners } from '@arwes/core';
import Example from './Example';
import ChartIcon from '../public/icons/line-chart.svg';


type ChartDimensions = { width: number; height: number }

const AreaChart = ({ width, height }: ChartDimensions) => {
    return <Example width={width - 20} height={height - 20} />

}

export const ChartII = () => {
    return <ParentSize debounceTime={10}>{({ width, height }) =>
    (<FrameCorners showContentLines cornerLength={50} cornerWidth={3} style={{ width: width, height: height, }} animator={{ animate: false }}>
        <div className='flex flex-row md:flex-col gap-4 justify-center items-center' style={{ height: height }}>
            <ChartIcon className='w-32 h-32' />
            <p className='font-agelast uppercase tracking-widest text-2xl'>Choose a theme</p>
        </div>
    </FrameCorners>)
    }</ParentSize>
}