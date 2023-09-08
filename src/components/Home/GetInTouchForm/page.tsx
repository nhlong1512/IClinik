import ButtonBlueWave from '@/components/common/ButtonBlueWave/page'
import { BLUE_WAVE, TEAL_STRONG, WHITE_CLOUD } from '@/utils/colors'
import { Container, Input, Textarea } from '@chakra-ui/react'
import React from 'react'

const GetInTouchForm = () => {
    return (
        <div className='w-full absolute top-[-180px] z-[5]'>
            <Container maxW="1536px">
                <div className='bg-teal_strong text-[64px] px-[80px] py-[60px] flex gap-[60px]'>
                    <div className='flex flex-col gap-[20px] basis-[45%]'>
                        <h3 className='text-[50px] leading-[50px] font-[400] tracking-[1px] text-white_cloud'>
                            Get in Touch
                        </h3>
                        <p className='text-[14px] leading-[28px] font-[400] tracking-[1px] text-white_cloud'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non nunc eros. Suspendisse scelerisque felis.

                        </p>
                    </div>
                    <div className='flex basis-[55%] flex-col justify-between gap-[60px]'>
                        <div className='flex justify-between gap-[50px]'>
                            <Input variant='flushed' placeholder='Name' className='basis-[50%] text-white_cloud'  _placeholder={{ color: WHITE_CLOUD }} focusBorderColor={BLUE_WAVE}/>
                            <Input variant='flushed' placeholder='Email' className='basis-[50%] text-white_cloud' _placeholder={{ color: WHITE_CLOUD }} focusBorderColor={BLUE_WAVE}/>
                        </div>
                        <div className='flex gap-[50px]'>
                            <Textarea variant='flushed' placeholder='Message' className='basis-[50%] text-white_cloud' _placeholder={{ color: WHITE_CLOUD }} focusBorderColor={BLUE_WAVE}/>
                            <ButtonBlueWave color={BLUE_WAVE} className='py-[12px] basis-[50%] flex justify-center items-center h-fit' title='Contact' />

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default GetInTouchForm