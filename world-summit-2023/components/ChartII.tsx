import { FrameCorners } from '@arwes/core';
import { DefaultPlaceholder } from './Shared';
import { useContext } from 'react';
import { SummitThemeContext } from '../app/page';
import { ChartDimensions } from '../app/data/types';
import { GovernmentHealthBullet } from './Charts/Themes/AcceleratingGov';


const renderChartBasedOnTheme = (selectedTheme: string, width: number, height: number) => {
    switch (selectedTheme) {
        case 'Accelerating Development and Governance':
            return <GovernmentHealthBullet width={width} height={height} />
        case 'Global City Design and Sustainability':
            return;
        case 'Exploring the Frontiers':
            return
        case 'Governing Economic Resilience and Connectivity':
            return
        case 'Future of Societies and Healthcare':
            return
        case 'Prioritizing Learning and Work':
            return
        default: return <DefaultPlaceholder placeholderLocation='two' height={height} />

    }
}

export const ChartII = ({ width, height }: ChartDimensions) => {
    const selectedTheme = useContext(SummitThemeContext)

    return <FrameCorners
        showContentLines
        cornerLength={50}
        cornerWidth={3}
        style={{ width: width, height: height, }}
        animator={{ animate: false }}
        className='bg-cyan-700 bg-opacity-20'
    >
        {renderChartBasedOnTheme(selectedTheme, width, height)}
    </FrameCorners>
}