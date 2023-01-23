import { Grid, } from '@nextui-org/react';
import { FrameLines } from '@arwes/core';

export const StatBoxes = () => {
    return (
        <Grid className='flex gap-4 justify-between h-[10%] md:h-[12.5%] lg:h-[20%]'>
            <FrameLines palette='secondary' className='w-1/4 h-full' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
                <p className='font-body text-2xl'><span className={'underline decoration-solid '}>17</span>{' Subregions'}</p>
            </FrameLines>
            <FrameLines palette='secondary' className='w-1/4 h-full' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
                {'174 Countries'}
            </FrameLines>
            <FrameLines palette='secondary' className='w-1/4 h-full' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
                {'6 Themes'}
            </FrameLines>
            <FrameLines palette='secondary' className='w-1/4 h-full' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
                {'Endless Insights'}
            </FrameLines>
        </Grid>)
}