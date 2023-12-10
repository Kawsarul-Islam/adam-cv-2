import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const LeftDivider2 = () => {
    useEffect(() => {
        AOS.init();
    },[])
    return (
        <div id='formation' className="w-3/4 mb-32 mt-20 lg:mt-0 flex justify-center bg-[#38B6FF] text-3xl md:text-5xl text-[#c9e7fa] rounded-r-3xl" data-aos="fade-right">
            <h1>FORMATION</h1>
        </div>
    );
};

export default LeftDivider2;