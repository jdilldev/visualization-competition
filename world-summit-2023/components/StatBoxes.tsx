import { Grid, Text, Container } from '@nextui-org/react';
import { FrameLines } from '@arwes/core';

type StatBoxProps = {
    isDesktop: boolean
}

export const StatBoxes = ({ isDesktop }: StatBoxProps) => {
    return isDesktop ?
        <Grid className='hidden lg:flex lg:flex-row lg:gap-4 lg:justify-between lg:h-48'>
            <FrameLines palette='secondary' className='w-1/4 h-full' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
            </FrameLines>
            <FrameLines palette='secondary' className='w-1/4 h-full' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
            </FrameLines>
            <FrameLines palette='secondary' className='w-1/4 h-full' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
            </FrameLines>
            <FrameLines palette='secondary' className='w-1/4 h-full' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
            </FrameLines>
        </Grid> :
        <Grid className='flex h-[10%] md:h-[12.5%] gap-4 lg:hidden'>
            <FrameLines palette='secondary' className='w-1/4 h-full' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
            </FrameLines>
            <FrameLines palette='secondary' className='w-1/4 h-full' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
            </FrameLines>
            <FrameLines palette='secondary' className='w-1/4 h-full' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
            </FrameLines>
            <FrameLines palette='secondary' className='w-1/4 h-full' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
            </FrameLines>
        </Grid>
}