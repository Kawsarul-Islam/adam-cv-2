import country from '../assets/images/country.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Langues = () => {
    useEffect(() => {
        AOS.init();
    },[])

    return (
        <div className='mt-5 w-1/2 mx-auto ' data-aos="fade-left">
            <img src={country} />
        </div>
    );
};

export default Langues;