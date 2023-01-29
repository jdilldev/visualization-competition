import { Bullet } from '@nivo/bullet'
import { NIVO_THEME } from '../../app/constants'

type BulletData = {
    id: string,
    ranges: number[],
    measures: number[],
    markers: number[]
}

export const measureColors = ['#b2f54de0', '#7726f9a0']
export const rangeColors = ['#b3f5ffb9', '#00b1ccd9', '#047898e3']
export const markerColors = ['#ffb84ddf']

const BulletChart = ({ data, width, height }: { data: BulletData[], width: number, height: number }) => (
    <Bullet
        width={width}
        height={height - 10}
        data={data}
        margin={{ top: 10, right: 40, bottom: 90, left: 80 }}
        spacing={30}
        //titleRotation={-29}
        rangeBorderColor={'#1d96d3e1'}
        //rangeBorderWidth={2}
        titleAlign="start"
        titleOffsetX={-80}
        measureSize={0.3}
        theme={NIVO_THEME}
        rangeColors={rangeColors}
        measureColors={measureColors}
        markerColors={markerColors}
    // tooltip={() => <p>hi</p>}
    />
)

export default BulletChart