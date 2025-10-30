import React from 'react'
import Image from 'next/image'
import { Atropos } from 'atropos/react'
import 'atropos/css'
import { Button } from '@heroui/button'

export default function ProfileCard() {
  return (
    <div className="card mt-[70px] w-full flex justify-center px-4">
      <Atropos
        className="w-full max-w-[500px] !bg-transparent !overflow-visible" 
        activeOffset={40}
        shadow={false}
        highlight={false}
        rotateTouch="scroll-y"
      >
        <div
          className="mx-auto w-full rounded-[20px] bg-white border border-[#E5E7EB] 
          py-[20px] px-[20px] sm:px-[30px] transition-transform duration-300"
          style={{
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)', // clean soft card shadow
          }}
        >
          {/* Header */}
          <div className="heading flex flex-col sm:flex-row items-center sm:items-start gap-[20px]">
            <div className="logo flex-shrink-0" data-atropos-offset="5">
              <Image
                src="/homescreen/avtar.png"
                alt="logo"
                className="rounded-full"
                height={80}
                width={80}
              />
            </div>
            <div className="name text-center sm:text-left" data-atropos-offset="3">
              <h3
                className="santoshi text-transparent bg-clip-text leading-tight"
                style={{
                  fontSize: 'clamp(24px, 5vw, 30px)',
                  fontWeight: 'bold',
                  backgroundImage:
                    'linear-gradient(90deg, #A856F7 0%, #6A5ACD 50%, #00A1E0 100%)',
                }}
              >
                Mr. Arun Tiwari
              </h3>
              <p
                style={{
                  fontWeight: '500',
                  fontSize: 'clamp(14px, 3vw, 18px)',
                  color: '#333',
                }}
              >
                Head of Business Development
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="info flex flex-col sm:flex-row gap-[10px] sm:gap-[20px] justify-between mt-[25px]">
            <div className="mobile w-full sm:w-auto" data-atropos-offset="2">
              <div className="flex gap-2 justify-center sm:justify-start bg-[#F4F5FF] px-[12px] py-[6px] rounded-full items-center">
                <Image src="/homescreen/call.png" alt="call" height={20} width={20} />
                <span
                  className="bg-gradient-to-r from-[#A856F7] to-[#00A1E0] bg-clip-text text-transparent font-medium text-[15px]"
                >
                  +91 7016060783
                </span>
              </div>
            </div>

            <div className="email w-full sm:w-auto" data-atropos-offset="2">
              <div className="flex gap-2 justify-center sm:justify-start bg-[#F4F5FF] px-[12px] py-[6px] rounded-full items-center">
                <Image src="/homescreen/sms.png" alt="email" height={20} width={20} />
                <span
                  className="bg-gradient-to-r from-[#A856F7] to-[#00A1E0] bg-clip-text text-transparent font-medium text-[15px]"
                >
                  atiwari@pragetx.com
                </span>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="btn mt-[25px]" data-atropos-offset="6">
            <Button
              className="h-[45px] w-full rounded-full font-medium text-white 
              bg-gradient-to-r from-[#6A5ACD] to-[#00A1E0] text-[16px] shadow-none active:scale-100"
              style={{
                pointerEvents: 'auto', // <== key fix
              }}
            >
              Talk to an Expert
            </Button>
          </div>
        </div>
      </Atropos>
    </div>
  )
}
