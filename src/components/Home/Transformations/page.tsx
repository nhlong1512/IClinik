import { Container } from '@chakra-ui/react'
import Image from 'next/image'
import TransformationsHomeBackground from "@/assets/images/transformations-home-bg.png"
import TransformationsHome1 from "@/assets/images/transformations-home-1.png"
import TransformationsHome2 from "@/assets/images/transformations-home-2.png"
import TransformationsHome3 from "@/assets/images/transformations-home-3.png"
import AboutUsHome3 from "@/assets/images/about-us-home-3.png"
import React from 'react'
import { BLUE_WAVE, LINEAR_GRADIENT_PRIMARY, TEAL_LIGHT, TEAL_STRONG } from '@/utils/colors'
import ButtonBlueWave from '@/components/common/ButtonBlueWave/page'

const listTransformations = [
    {
        title: 'Liposuction',
        desc: 'Lorem ipsum dolor sit amet, cons ectetur adipiscing elit quisque.',
        priceFrom: 1200,
        colorButton: TEAL_LIGHT,
        urlImage: TransformationsHome1,
        bgColor: false
    },
    {
        title: 'Breast Reduction',
        desc: 'Vivamus non lacus vel tellus molestie dictum. Morbi malesuada nibh vel.',
        priceFrom: 1999,
        colorButton: BLUE_WAVE,
        urlImage: TransformationsHome2,
        bgColor: false
    },
    {
        title: 'Injections Fillers',
        desc: 'Curabitur scelerisque odio elementu maauris varius dictum maecenas facil.',
        priceFrom: 99,
        colorButton: BLUE_WAVE,
        urlImage: TransformationsHome3,
        bgColor: true,
    }
]

const Transformations = () => {
    return (
        <div className='w-full py-[120px]' style={{ background: LINEAR_GRADIENT_PRIMARY }}>
            <Container maxW='1536px'>
                <div className='flex justify-between'>
                    <Image src={TransformationsHomeBackground} alt="Transformations Home Background" />
                    <div className='flex flex-col'>
                        <ButtonBlueWave color={TEAL_STRONG} title="Before / After" className='text-[11px] leading-[11px] font-[400] tracking-[4px] px-[12px] py-[6px] mb-[15px]' />
                        <h4 className='text-white_cloud text-[50px] leading-[50px] tracking-[1px] font-[400] mb-[32px]'>Transformations</h4>
                        <div className='flex flex-col gap-[60px]'>
                            {
                                listTransformations.map((item, index) => (
                                    <div key={item.title} className='flex justify gap-[32px]'>
                                        <Image src={item.urlImage} alt={item.title} className='h-[100px] basis-[20%] object-fill' />
                                        <div className='flex flex-col gap-[16px] basis-[60%]'>
                                            <p className='text-white_cloud font-[700] text-[20px] leading-[32px] tracking-[1px]'>
                                                {item.title}
                                            </p>
                                            <p className='text-[14px] tracking-[1px] leading-[26px] text-white_cloud font-[400]'>
                                                {item.desc}
                                            </p>
                                        </div>
                                        <div className='flex flex-col gap-[24px] basis-[20%] items-center'>
                                            <p className='text-white_cloud uppercase tracking-[1px] text-[16px] leading-[32px]'>
                                                {`$ ${item.priceFrom}`}
                                            </p>
                                            <ButtonBlueWave color={item.colorButton} title='New' className=' text-[12px] px-[10px] py-[5px]' />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Transformations