import { Pie } from '@nivo/pie'
import { NIVO_THEME } from '../../app/constants';
import { PercentileData } from '../../app/data/types'
import { rangeColors } from './BulletChart';

const PieChart = ({ data, width, height }: { data: PercentileData[], width: number, height: number }) => (
    <Pie
        width={width}
        height={height}
        theme={NIVO_THEME}
        data={data}
        margin={width < 255 ? { top: 5, right: 0, bottom: 5, left: 0 } : { top: 10, right: 10, bottom: 10, left: 10 }}
        innerRadius={0.6}
        padAngle={3}
        cornerRadius={1}
        enableArcLinkLabels={width > 255}
        activeOuterRadiusOffset={12}
        borderWidth={1}
        colors={rangeColors}
        arcLinkLabelsTextColor="white"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLinkLabelsStraightLength={6}
        arcLinkLabelsDiagonalLength={6}
        arcLabelsTextColor={'white'}
    />
)

export default PieChart;