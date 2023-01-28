import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { FrameCorners } from '@arwes/core';
import { DefaultPlaceholder } from './Shared';
import { useContext } from 'react';
import { SummitThemeContext } from '../app/page';
import { ChartDimensions } from '../app/data/types';



export const ChartII = ({ width, height }: ChartDimensions) => {
    const selectedTheme = useContext(SummitThemeContext)

    return <FrameCorners
        showContentLines
        cornerLength={50}
        cornerWidth={3}
        style={{ width: width, height: height, }}
        animator={{ animate: false }}>
        {/*  <DefaultPlaceholder height={height} placeholderLocation={'two'} /> */}
    </FrameCorners>
}