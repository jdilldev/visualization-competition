import { Grid, } from '@nextui-org/react';
import { FrameLines } from '@arwes/core';
import InsightIcon from '../public/icons/brain.svg'

type DefaultStatItem = {
    numeric: string
    text: string
}

const defaultStatBoxes: DefaultStatItem[] = [
    { numeric: '13', text: 'Subregions' },
    { numeric: '174', text: 'Countries' },
    { numeric: '6', text: 'Themes' },
    { numeric: '', text: 'Endless Insights' }
]

const DefaultStatBox = ({ item }: { item: DefaultStatItem }) => {
    return <FrameLines palette='secondary' className='w-1/4 h-full flex flex-col justify-between' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
        {item.numeric !== '' ? <p className='w-12 h-12 font-nebula text-3xl'>{item.numeric}</p> : <InsightIcon className='w-16 h-12 pb-2 fill-[#9fd0dcb1]' />}
        <p className='font-nebula lg:whitespace-nowrap text-sm md:text-base'>{item.text}</p>
    </FrameLines >
}


const Default = () => <Grid className='flex gap-4 justify-between h-[10%] md:h-[12.5%] lg:h-[20%]'>
    {defaultStatBoxes.map((item: DefaultStatItem) => <DefaultStatBox item={item} />)}
</Grid>

export const StatBoxes = () => {
    return <Default />
}