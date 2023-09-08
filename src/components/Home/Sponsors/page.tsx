import React from 'react'
import Image from 'next/image'
import Sponsor1 from "@/assets/images/sponsor-1.png"
import Sponsor2 from "@/assets/images/sponsor-2.png"
import Sponsor3 from "@/assets/images/sponsor-3.png"
import Sponsor4 from "@/assets/images/sponsor-4.png"
import Sponsor5 from "@/assets/images/sponsor-5.png"

const listSponsors = [
    {
        title: 'Sponsor 1',
        urlImage: Sponsor1
    },
    {
        title: 'Sponsor 2',
        urlImage: Sponsor2
    },
    {
        title: 'Sponsor 3',
        urlImage: Sponsor3
    },
    {
        title: 'Sponsor 4',
        urlImage: Sponsor4
    },
    {
        title: 'Sponsor 5',
        urlImage: Sponsor5
    }
]

const Sponsors = () => {
    return (
        <div className='bg-white_cloud py-[60px] flex justify-around'>
            {
                listSponsors.map((item, index) => (
                    <Image src ={item.urlImage} alt = {item.title} key={item.title}/>
                ))
            }
        </div>
    )
}

export default Sponsors