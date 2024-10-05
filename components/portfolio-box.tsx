'use client'

import Image from "next/image";
import Link from "next/link";
import image1 from "../app/public/image1.jpg"


interface PortfolioBoxProps {
    data: {
        id: number,
        title: string
        image: string
        urlGithub: string
        urlDemo: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, image, urlDemo, urlGithub } = data
    console.log("soy imagen",image)
    return (
        
        <div
            key={id}
            className="p-3 border border-teal-50 rounded-xl "
           
        >
            <h3 className="mb-4 text-xl text-center">{title}</h3>
            <Image
                src={image1}
                alt="Image"
                width={200} height={200} className="w-100 md:w-[200px] rounded-2xl h-100"
            />

            <div className="flex gap-5 mt-5 justify-between">
                <Link
                    href={urlGithub}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
                >
                    Github
                </Link>

                <Link
                    href={urlDemo}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
                >
                    Live demo
                </Link>
            </div>
        </div>
    
    );
}

export default PortfolioBox