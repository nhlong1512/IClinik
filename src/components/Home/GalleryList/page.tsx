import React from 'react'
import Image from 'next/image'
import Gallery1 from '@/assets/images/gallery-1.png'
import Gallery2 from '@/assets/images/gallery-2.png'
import Gallery3 from '@/assets/images/gallery-3.png'
import Gallery4 from '@/assets/images/gallery-4.png'
import { Container } from '@chakra-ui/react'

const listGallery = [
    {
        title: 'Breast Augmentation',
        priceFrom: 1299,
        urlImage: Gallery1
    },
    {
        title: 'Phinoplasty',
        priceFrom: 350,
        urlImage: Gallery2
    },
    {
        title: 'Tummy Tuck Liposuction',
        priceFrom: 2000,
        urlImage: Gallery3
    },
    {
        title: 'Otoplasty Brow',
        priceFrom: 150,
        urlImage: Gallery4
    }
]

const GalleryList = () => {
    return (
        <div className='w-full'>
            <Container maxW='1536px'>
                <div className='flex gap-[30px] justify-center items-center mt-[120px]'>
                    {listGallery.map((item,index) => (
                        <div className='flex justify-center items-center flex-col' key={item.title}>
                            <Image src={item.urlImage} alt ={item.title}/>
                            <p className='text-[20px] leading-[20px] text-bold_gray_text tracking-[1px] font-[700] mt-[28px]'>
                                {item.title}
                            </p>
                            <p className='text-[12px] leading-[12px] text-gray_text font-[400] tracking-[4px] mt-[16px]'>
                                FROM {item.priceFrom} $
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default GalleryList