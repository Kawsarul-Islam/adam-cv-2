import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const LeftDivider3 = () => {
    useEffect(() => {
        AOS.init();
    },[])
    return (
        <div className="w-3/5  mt-16 flex justify-center bg-[#38B6FF] text-3xl md:text-5xl text-[#c9e7fa] rounded-r-3xl" data-aos="fade-right">
            <h1>LANGUES</h1>
        </div>
    );
};

export default LeftDivider3;