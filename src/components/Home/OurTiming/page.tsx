import { LINEAR_GRADIENT_PRIMARY, LINEAR_GRADIENT_SECONDARY, TEAL_LIGHT, TEAL_STRONG } from '@/utils/colors'
import Image from 'next/image'
import { Container } from '@chakra-ui/react'
import React from 'react'
import OurTimingDoctor from "@/assets/images/our-timing-doctor.png"
import ButtonBlueWave from '@/components/common/ButtonBlueWave/page'
import OurTimingCalender from "@/assets/images/our-timing-calender.png"

const listTiming = [
    {
        day: 'Monday',
        fromTo: '9 to 18',
    },
    {
        day: 'Tuesday',
        fromTo: '10 to 15',
    },
    {
        day: 'Wednesday',
        fromTo: '9 to 18',
    },
    {
        day: 'Thursday',
        fromTo: '10 to 15',
    }

]

const OurTiming = () => {
    return (
        <div className='w-full py-[120px]' style={{ background: LINEAR_GRADIENT_SECONDARY }}>
            <Container maxW="1536px">
                <div className='flex justify-between'>
                    <div className='flex flex-col basis-[50%] relative'>
                        <ButtonBlueWave title='Book an Appointment' color={TEAL_LIGHT} className='text-[11px] leading-[11px] font-[400] tracking-[4px] py-[6px] px-[12px] mb-[16px]' />
                        <h3 className='text-[50px] leading-[50px] font-[400] tracking-[1px] text-white_cloud mb-[17px]'>
                            Our Timing
                        </h3>
                        <p className='text-[14px] leading-[28px] tracking-[1px] font-[400] text-white_cloud mb-[24px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non nunc erosuspe ndisse scelerisque felis ante, et mattis felis scelerisque sodales.
                        </p>
                        <div className='flex gap-[120px]'>
                            <Image src={OurTimingDoctor} alt="Our Timing Doctor" className='flex basis-[50%]' />
                            <div className="flex flex-col gap-[28px] basis-[50%]">
                                {listTiming.map((item, index) => (
                                    <div className='flex justify-between items-center' key={item.day + item.fromTo}>
                                        <p className='uppercase text-white_cloud text-[14px] leading-[14px] tracking-[4px] font-[400]'>
                                            {item.day}
                                        </p>
                                        <div className='flex py-[9px] px-[12px]' style={{ background: 'rgba(255, 255, 255, 0.17)' }}>
                                            <p className='text-white_cloud text-[10px] leading-[10px] tracking-[4px] uppercase'>
                                                {item.fromTo}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='absolute w-full h-[76px] bg-teal_strong text-white_cloud text-[30px] leading-[36px] font-[700] px-[30px] py-[20px] flex justify-end bottom-[0px]'>
                            +84 123 456 789
                        </div>
                    </div>
                    <div className='basis-[50%] flex justify-end'>
                        <Image src={OurTimingCalender} alt="Our Timing Calender" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default OurTiming