'use client';

import React from 'react'
import LetsTalkForm from './LersTalkForm';
const LetsTalk = () => {
    return (
        <section
            className="w-full min-h-screen bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url("/images/background.svg")` }}
        >
            <div className="container">
                <h2 className="font-[700] leading-[100%] tracking-normal text-center ibm text-white">
                    Your Problem Our{" "}
                    <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#A856F7_0%,#6A5ACD_50%,#00A1E0_100%)]">
                        Solution
                    </span>
                </h2>
            </div>

            <LetsTalkForm />
        </section>

    )
}

export default LetsTalk