import Image from 'next/image'
import React from 'react'
const TeamCard = ({ team }) => {
    return (
        <div className='card bg-white px-[12px] py-[18px] w-[601px] rounded-[18px]  my-box'>
            <div className="bg-[linear-gradient(90deg,#A856F7_0%,#6A5ACD_50%,#00A1E0_100%)] bg-clip-text text-transparent inline-block">
                <h3 className="font-bold mb-[2px]">
                    {team.name}
                </h3>
            </div>


            <p className='text-[#7A7A7A]' style={{ fontWeight: 600, color: '#7A7A7A', marginBottom: '10px' }}>{team.description}</p>
            <Image
                src="/homescreen/sliderImg1.png"
                alt="Slider Image"
                className="rounded-md w-full "
                width={800}
                height={100}
            />

        </div>
    )
}

export default TeamCard