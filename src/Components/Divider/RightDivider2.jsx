import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const RightDivider2 = () => {
    useEffect(() => {
        AOS.init();
    },[])
    return (
        <div id='experience' className="flex justify-end "> 
            <div data-aos="fade-up" className="mt-36 mb-20 w-3/4 flex justify-center bg-[#38B6FF] text-3xl md:text-5xl text-[#c9e7fa] rounded-l-3xl">
                <h1>EXPERIENCE</h1>
            </div>
        </div>
    );
};

export default RightDivider2;