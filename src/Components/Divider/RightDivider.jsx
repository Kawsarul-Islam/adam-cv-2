import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const RightDivider = () => {
    
    useEffect(() => {
        AOS.init();
    },[])

    return (
        <div id='accueil' className="flex justify-end "> 
            <div className="mt-16 md:mt-36 w-3/4 flex justify-center bg-[#38B6FF]  text-[#c9e7fa] rounded-l-3xl " data-aos="fade-up">
                <h1 className="text-3xl md:text-5xl uppercase">competences</h1>
            </div>
        </div>
    );
};

export default RightDivider;