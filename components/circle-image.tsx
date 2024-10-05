"use client"

import Image from 'next/image'
import circles from '../app/public/circles.png'

const CircleImage = () => {
    return (
        <div className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src={circles} width="200" height="200" className="w-full h-full " alt="Circle" />
        </div>

    );
}

export default CircleImage;