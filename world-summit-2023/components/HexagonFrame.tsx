import { Divider, Grid, } from '@nextui-org/react';
import { FrameHexagon } from '@arwes/core';
import Continents from '../public/icons/continents.svg'

export const HexagonFrame = () => {
    return <div className='w-full h-[20%] md:h-[30%]'>
        <FrameHexagon hover palette='secondary' squareSize={60} lineWidth={3} animator={{ animate: false }} className='h-full w-full'>
            <div className='flex  md:gap-4 lg:flex-col justify-start md:justify-center items-center px-3 py-2 lg:p-4'>
                <Continents className='ml-4 mr-2 md:ml-0 md:mr-0 w-14 h-14 fill-[#4e7988]' />
                <p className='font-equinox text-center '>Select a region to view regionally specific data</p>
            </div>
        </FrameHexagon>
    </div>
}