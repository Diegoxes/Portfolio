'use client'

import React from 'react'
import Image from 'next/image'
import home from '../app/public/home.png'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'
//PRIORITY ES PRIORIDAD PARA LA IMAGEN ES UN ATRIBUTO PROPIO DE NEXT

const Introduction=()=>{
  return (
    <div className='<z-20 w-full bg-darkBg/60'>
        <div className='z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2'>   
            <Image src={home} priority width="800" height='800' alt='Profile pic'/>

            <div className='flex flex-col justify-center max-w-md'>
                <h1 className='mb-5 text-2xl leading-tight text-center md:text-left
                md:text-4xl md:mb-10'>Si puedes imaginarlo, 
                <TypeAnimation
                sequence={[
                  "puedes programarlo",
                  1200,
                  "puedes optimizarlo",
                  1200,
                  "puedes implementarlo",
                  1200,
                  "puedes desarrollarlo",
                  1200
                ]} 
                
                wrapper='span'
                speed={40}
                repeat={Infinity}
                className='block font-bold text-secondary'
                
                
                />
                </h1>

                <p className='mx-auto mb-2 text-xl md:mx-0 md:mb-8 text-left'>

                  Ingeniero en sistemas enfocado en crear soluciones eficientes e innovadoras. 
                  

                </p>
                <div className='flex item-center justify-center gap-3 md:justify-start md:gap-10'>
                    <Link 
                    href="/projects" 
                    className='px-3 py-2 transition-all border-2 cursor-pointer text-md
                     w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'>
                      Ver Proyectos
                    </Link>
                    <Link 
                    href="/projects" 
                    className='px-3 py-2 transition-all border-2 cursor-pointer text-md
                     w-fit rounded-xl hover:shadow-xl hover:shadow-secondary text-secondary border-secondary'>
                      Contactate conmigo
                    </Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Introduction