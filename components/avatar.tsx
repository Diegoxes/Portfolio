import Image from "next/image";
import MotionTransition from "./transition-component";
import avatar1 from '../app/public/avatar1.png'

const Avatar=()=>{
    return (
        <>
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src={avatar1} alt="Avatar 1" width={350} height={350} 
            className="w-full h-full"
            />
        </MotionTransition>
        </>
    )
}
export default Avatar;