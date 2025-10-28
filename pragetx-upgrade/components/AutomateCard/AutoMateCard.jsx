// AutoMateCard.jsx (No change needed from last suggested fix)

import React from 'react'
import Image from 'next/image'

const AutoMateCard = (props) => {
    return (
        <div className='card max-w-[500px] h-[335px] py-[15px] px-[14px] rounded-[15px] flex flex-col gap-[3px] bg-[#FFFEFE] my-box'>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#A856F7] via-[#6A5ACD] to-[#00A1E0] text-transparent bg-clip-text">
                {props.title}
            </span>
            {/* Keeping min-h for consistent card height */}
            <span className='text-[#7A7A7A] mb-[5px] min-h-[3rem]' style={{fontWeight:500,fontSize:'17px'}}>{props.desc}</span>
            <Image
                src={props.src}
                alt="Trigger"
                className="rounded-lg w-full h-auto"
                height={410}
                width={410}
            />
        </div>

    )
}

export default AutoMateCard