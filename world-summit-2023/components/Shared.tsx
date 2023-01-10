import { Text as DefaultText } from '@nextui-org/react';
import Example from "./Example"
import ParentSize from '@visx/responsive/lib/components/ParentSize';

export const Text = (val: string) => {
    return <DefaultText className='text-white'>{val}</DefaultText>
}

export const Wow = () => {
    return <div style={{}}>
        <ParentSize>{({ width, height }) => <Example width={width} height={height} />}</ParentSize>
    </div>
}