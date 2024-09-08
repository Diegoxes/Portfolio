"use client"
import { fadeIn } from '@/utils/motion-transition';
import {motion} from 'framer-motion'

interface MotionTransitionProps{
    children:React.ReactNode/*React.ReactNode, que es un tipo especial en React que incluye 
    cualquier cosa que pueda ser renderizada, como texto, elementos HTML, o incluso otros
     componentes React.*/
     position:'right'|'bottom',
     className?:string
}

const MotionTransition=(props: MotionTransitionProps)=>{
    const {children,position,className}=props;
    return(
        <motion.div 
            variants={fadeIn(position)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default MotionTransition