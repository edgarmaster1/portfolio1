"use client"

import Image from 'next/image';

import { MotionTransition } from './transition-component';

const AvatarPortfolio = () => {
    return (
        <MotionTransition position='bottom' className="bottom-0 left-0 hidden md:inline-block md:absolute ">
            <Image src="/avatar-works.png" width="200" height="200" className="w-full h-full " alt="Particles " />
        </MotionTransition>

    );
}

export default AvatarPortfolio;