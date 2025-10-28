import React from 'react'
import Image from 'next/image'
const TimeCard = ({ title, desc, src }) => {
    return (
        <div className='rounded-[18px] flex flex-col my-box py-[15px] px-[13px]'>
            <div className="bg-[linear-gradient(90deg,#A856F7_10%,#6A5ACD_30%,#00A1E0_10%)] bg-clip-text text-transparent inline-block">
                <h3 className="font-bold">
                    {title}
                </h3>
            </div>

            <p className=' text-[#7A7A7A]' style={{ fontWeight: 600, color: '#7A7A7A', marginBottom: '10px' }}>{desc}</p>
            <Image
                src={src}
                alt="Trigger"
                className="rounded-lg -webkit-fill-available"
                height={100}
                width={614}
            />
        </div>
    )
}

export default TimeCard
