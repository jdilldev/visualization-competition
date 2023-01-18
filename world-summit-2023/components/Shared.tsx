import { Text as DefaultText } from '@nextui-org/react';
import Example from "./Example"
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { useTheme } from '@emotion/react';

export const Text = (val: string) => {
    return <DefaultText className='text-white'>{val}</DefaultText>
}

export const Wow = () => {
    return <div style={{}}>
        <ParentSize>{({ width, height }) => <Example width={width} height={height} />}</ParentSize>
    </div>
}


const Color = ({ color }: { color: any }) => (
    <div style={{
        width: 60,
        height: 60,
        backgroundColor: color
    }} />
);

