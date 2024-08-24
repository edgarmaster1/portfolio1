
"use client"

import Image from "next/image";

import { MotionTransition } from "./transition-component";

export function Avatar() {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute ">
            <Image src="/services.png" width="400" height="400" className="w-[400px] h-full "alt="Particles " />
        </MotionTransition>
    )
}
