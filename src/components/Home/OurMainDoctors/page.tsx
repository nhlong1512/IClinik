import ButtonBlueWave from '@/components/common/ButtonBlueWave/page'
import { BLUE_WAVE, LINEAR_GRADIENT_PRIMARY, TEAL_STRONG } from '@/utils/colors'
import Image from 'next/image'
import { Container} from '@chakra-ui/react'
import Progress from '@/components/common/Progress/page'
import OurMainDoctorsBackground from "@/assets/images/our-main-doctors-bg.png"
import Doctor1 from "@/assets/images/doctor-main-1.png"
import Doctor2 from "@/assets/images/doctor-main-2.png"
import Doctor3 from "@/assets/images/doctor-main-3.png"
import Gallery5 from "@/assets/images/gallery-5.png"
import Gallery6 from "@/assets/images/gallery-6.png"
import Gallery7 from "@/assets/images/gallery-7.png"
import Gallery1 from "@/assets/images/gallery-1.png"
import React from 'react'

const listMainDoctors = [
    {
        name: 'Mark Hill',
        slogan: 'Lorem ipsum dolor sit amet, conse ctetur.',
        urlImage: Doctor1
    },
    {
        name: 'Jane Cullen',
        slogan: 'Lorem ipsum dolor sit amet, conse ctetur.',
        urlImage: Doctor2
    },
    {
        name: 'Annah Gaiver',
        slogan: 'Lorem ipsum dolor sit amet, conse ctetur.',
        urlImage: Doctor3
    }
]

const OurMainDoctors = () => {
    return (
        <div className='w-full py-[120px]'>
            <Container maxW="1536px">
                <div className='flex flex-col items-center'>
                    <ButtonBlueWave color={LINEAR_GRADIENT_PRIMARY} title="certificates" className='text-[11px] leading-[11px] tracking-[4px] font-[400] px-[12px] py-[6px] mb-[24px]' />
                    <h3 className='text-[50px] leading-[50px] tracking-[1px] text-dark_night font-[400] mb-[42px]'>
                        Our Main Doctors
                    </h3>
                    <div style={{ background: LINEAR_GRADIENT_PRIMARY }} className='flex justify-between items-center px-[50px]' >
                        <div className='flex flex-col gap-[60px]'>
                            {listMainDoctors.map((item, index) => (
                                <div key={item.name} className='flex gap-[30px]'>
                                    <Image src={item.urlImage} alt={item.name} />
                                    <div className='flex flex-col justify-between'>
                                        <h3 className='text-white_cloud font-[700] text-[20px] leading-[20px]'>
                                            {item.name}
                                        </h3>
                                        <p className='text-white_cloud text-[14px] leading-[24px] font-[400] max-w-[70%]'>
                                            {item.slogan}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Image src={OurMainDoctorsBackground} alt="Our Main Doctors Background" />
                        <div className='flex flex-col items-center'>
                            <h3 className='text-white_cloud font-[400] text-[36px] leading-[36px] tracking-[2px] mb-[24px]'>
                                At Your Service
                            </h3>
                            <p className='text-[14px] leading-[28px] text-white_cloud tracking-[1px] max-w-[70%] text-center mb-[36px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque.
                            </p>
                            <Progress title='Liposuction' color={TEAL_STRONG} percent = {80} className='text-white_cloud mb-[20px] h-[30px] text-[12px] tracking-[2px]'/>
                            <Progress title = 'Breast Augmentation' color = {BLUE_WAVE} percent={90} className='text-white_cloud text-[12px] tracking-[2px]'/>
                            <div className = "flex justify-around mt-[36px] w-full">
                                <div className='flex flex-col gap-[4px] justify-center items-center'>
                                    <h3 className='text-white_cloud font-[700] text-[30px] leading-[30px]'>
                                        23 
                                    </h3>
                                    <p className='text-white_cloud uppercase text-[14px] leading-[36px] tracking-[4px]'>
                                        Staffs
                                    </p>
                                </div>
                                <div className='flex flex-col gap-[4px] justify-center items-center'>
                                    <h3 className='text-white_cloud font-[700] text-[30px] leading-[30px]'>
                                        56 
                                    </h3>
                                    <p className='text-white_cloud uppercase text-[14px] leading-[36px] tracking-[4px]'>
                                        Doctors
                                    </p>
                                </div>
                                <div className='flex flex-col gap-[4px] justify-center items-center'>
                                    <h3 className='text-white_cloud font-[700] text-[30px] leading-[30px]'>
                                        86
                                    </h3>
                                    <p className='text-white_cloud uppercase text-[14px] leading-[36px] tracking-[4px]'>
                                        Visits
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center gap-[40px] w-full mt-[60px]'>
                        <Image src = {Gallery5} alt='Gallery 5'/>
                        <Image src = {Gallery6} alt='Gallery 6'/>
                        <Image src = {Gallery7} alt='Gallery 7'/>
                        <Image src = {Gallery1} alt='Gallery 1'/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default OurMainDoctors