import { MdDownloadForOffline } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Presentation = () => {
    return (
        <div className="hero mt-[130px]">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <div className="flex gap-6">

                    <p className="mt-10 md:mt-14 lg:mt-0"> 
                        <FaGithub className="text-6xl lg:text-9xl text-[#38b4ff] lg:hidden " />
                    </p>

                    <p className="mt-6 md:mt-10 lg:mt-0">
                        <MdDownloadForOffline className="text-8xl lg:text-9xl text-[#38b4ff] hover:animate-bounce cursor-pointer " />
                        <p className="text-xs lg:text-base font-medium text-center">TELECHARGER <br className="lg:hidden" /> CV</p>
                    </p>

                    <p className="mt-10 md:mt-14 lg:mt-0">
                        <FaLinkedin className="text-6xl lg:text-9xl text-[#38b4ff] lg:hidden " />
                    </p>




                </div>

                <div className="ml-10 lg:ml-0 md:w-11/12 md:mx-auto lg:w-9/12">
                    <h1 className="text-4xl font-bold mb-5 ">PRESENTATION</h1>
                    <p className="text-2xl">
                        Adam Ribeiro, 27 ans, Valenciennois diplômé en commerce, avec une expérience dans la vente de produits technologiques. Passionné par les nouvelles technologies, je souhaite évoluer vers le web design ou l`animation 2D/3D dans le futur.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Presentation;