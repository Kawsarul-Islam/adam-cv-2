import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const LeftDivider = () => {
    useEffect(() => {
        AOS.init();
    },[])
    return (
        <div id='contact' className="mt-10 w-3/4 flex justify-center bg-[#38B6FF] text-3xl md:text-5xl text-[#c9e7fa] rounded-r-3xl" data-aos="fade-right">
            <h1>CONTACT</h1>
        </div>
    );
};

export default LeftDivider;