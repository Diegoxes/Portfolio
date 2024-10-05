"use client"

import Image from 'next/image';
import MotionTransition from './transition-component';
import avatarworks from '../app/public/avatarworks.png'

const AvatarPortfolio = () => {
    return (
        <MotionTransition position='bottom' className="bottom-0 left-0 hidden md:inline-block 
        md:absolute ">
            <Image src={avatarworks} width="300" height="300" className="w-full h-full " alt="Avatar Portfolio" />
        </MotionTransition>

    );
}

export default AvatarPortfolio;