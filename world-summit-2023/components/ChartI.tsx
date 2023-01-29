import { FrameCorners } from '@arwes/core';
import { Radar } from '@nivo/radar'
import { useContext } from 'react';
import { getWorldAvg, retrieveData } from '../app/data/generateData';
import { SummitThemeContext } from '../app/page';
import RadarChart from './Charts/RadarChart';
import { DefaultPlaceholder } from './Charts/Shared/Shared';
import { GovernmentStabilityRadar } from './Charts/Themes/AcceleratingGov';

export const ChartI = ({ width, height }: { width: number, height: number }) => {
    const selectedTheme = useContext(SummitThemeContext)

    return <FrameCorners
        showContentLines
        cornerLength={50}
        cornerWidth={3}
        animator={{ animate: false }}
        style={{ width: width, height: height }}
    >
        {/*  <DefaultPlaceholder placeholderLocation='one' height={height} /> */}
        <GovernmentStabilityRadar width={width} height={height} />
    </FrameCorners>
}
