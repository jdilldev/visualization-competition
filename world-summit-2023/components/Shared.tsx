import { Text as DefaultText } from '@nextui-org/react';
import Example from "./Example"
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { useTheme } from '@emotion/react';
import { useState } from 'react';

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

export const ButtonGroup = ({ values, className, controlValue, onChange }: { values: string[], className: string, controlValue: string, onChange: (value: string) => void }) => {
    return <div className={`flex flex-row gap-1 rounded-lg border-2 border-solid border-green-600 ${className}`}>
        {values.map(value => <div
            onClick={() => {
                const lowerCaseValue = value.toLowerCase()
                onChange(lowerCaseValue)
            }}
            className={`opacity-80 hover:opacity-100 px-3 font-body ${controlValue === value.toLowerCase() ? 'bg-green-600 text-white border-none' : 'text-green-600'}`}>
            {value}
        </div>)}
    </div>
}

