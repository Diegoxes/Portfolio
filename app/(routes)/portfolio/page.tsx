
import { dataPortfolio } from "@/app/data";
// import AvatarPortfolio from "@/components/avatar-portfolio";
// import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import PortfolioBox from "@/components/portfolio-box";



const PortfolioPage = () => {

    return (
        <ContainerPage>
            <TransitionPage />
            {/* <AvatarPortfolio /> */}
            {/* <CircleImage /> */}
            
            <div className="flex flex-col justify-center h-full mb-32">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Mis últimos <span className="font-bold text-secondary">trabajos realizados</span></h1>

                <div className="relative z-10 grid max-w-5xl gap-6 mx-auto sm:grid-cols-2 mt-4 md:grid-cols-4 " >
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    
                    ))}
                </div>
            </div>
        </ContainerPage>
    );
}

export default PortfolioPage;