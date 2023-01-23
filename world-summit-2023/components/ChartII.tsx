import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { FrameCorners } from '@arwes/core';
import { DefaultPlaceholder } from './Shared';


type ChartDimensions = { width: number; height: number }

const AreaChart = ({ width, height }: ChartDimensions) => {
    return <Example width={width - 20} height={height - 20} />

}

export const ChartII = ({ selectedTheme, width, height }: { selectedTheme: string, width: number, height: number }) => {
    return <FrameCorners
        showContentLines
        cornerLength={50}
        cornerWidth={3}
        style={{ width: width, height: height, }}
        animator={{ animate: false }}>
        <DefaultPlaceholder height={height} placeholderLocation={'two'} />
    </FrameCorners>
}