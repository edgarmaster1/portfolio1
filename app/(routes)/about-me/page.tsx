"use client"

import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

import { CoverParticles } from "@/components/cover-particles";



const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
            <CoverParticles />
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                     Mi{' '}
                    <span className="font-bold text-secondary">
                        trayectoria profesional
                    </span>
                    {' '}
                    como FrontEnd
                </h1>

                <CounterServices />

                <TimeLine />

            </ContainerPage>
        </>
    );
}

export default AboutMePage;