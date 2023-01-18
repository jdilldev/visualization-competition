import { Grid, } from '@nextui-org/react';
import { FrameHexagon } from '@arwes/core';

export const HexagonFrame = () => {
    return <Grid className='w-full h-[20%] md:h-[30%]'>
        <FrameHexagon hover palette='secondary' squareSize={60} lineWidth={3} animator={{ animate: false }} className='h-full w-full'>
            <Grid className='ml-12'>hi</Grid>
        </FrameHexagon>
    </Grid>
}