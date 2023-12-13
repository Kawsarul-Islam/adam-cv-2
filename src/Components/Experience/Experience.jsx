import fnac from '../../assets/images/fnac.png'
import e from '../../assets/images/e.png'
import darty from '../../assets/images/Darty 1.png'
import env from '../../assets/images/env.png'
import easy from '../../assets/images/easy.png'
import it from '../../assets/images/DOCTEUR-IT 1.png'
import voo from '../../assets/images/voo.png'
import last from '../../assets/images/last.png'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Experience = () => {

    useEffect(() => {
        AOS.init();
    },[])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10  md:w-9/12 md:mx-auto mx-6 '>
            <div data-aos="fade-up" className="flex items-center gap-5">
                <img src={fnac} />
                    <p className="text-[25px] text-[#e8e8eb] font-medium ">20<br className='hidden lg:block'/>16</p>
                    <div className="text-center">
                        <h1 className="text-[12px] md:text-[20px] text-black font-semibold">Vendeur produit technique</h1>
                        <p className="text-[#7a7a7a] text-[10px]  md:text-[14px]">Vente informatique,Telephonie,Tv</p>
                    </div>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-5">
            <img src={e}/>
                    <p className="text-[25px] text-[#e8e8eb] font-medium">20<br className='hidden lg:block'/>21</p>
                    <div className="text-center">
                        <h1 className="text-[12px] md:text-[20px] text-black font-semibold">Conseiller Technique</h1>
                        <p className="text-[#7a7a7a] text-[10px]  md:text-[14px]">Résolution technique chaudiere</p>
                    </div>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-5">
            <img src={darty}/>
                    <p className="text-[25px] text-[#e8e8eb] font-medium">20<br className='hidden lg:block'/>17</p>
                    <div className="text-center">
                        <h1 className="text-[12px] md:text-[20px] text-black font-semibold">Vendeur produit technique</h1>
                        <p className="text-[#7a7a7a] text-[10px]  md:text-[14px]">Vente Informatique, Telephonie, Tv</p>
                    </div>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-5">
            <img src={env}/>
                    <p className="text-[25px] text-[#e8e8eb] font-medium">20<br className='hidden lg:block'/>19</p>
                    <div className="text-center">
                        <h1 className="text-[12px] md:text-[20px] text-black font-semibold">Responsable Commercial</h1>
                        <p className="text-[#7a7a7a] text-[10px]  md:text-[14px]">Gestion magasin reconditionné</p>
                    </div>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-5">
            <img src={easy}/>
                    <p className="text-[25px] text-[#e8e8eb] font-medium">20<br className='hidden lg:block'/>17</p>
                    <div className="text-center">
                        <h1 className="text-[12px] md:text-[20px] text-black font-semibold">Vendeur occasion</h1>
                        <p className="text-[#7a7a7a] text-[10px]  md:text-[14px]">Vente produits d,occasion Telephonie</p>
                    </div>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-5">
            <img src={it}/>
                    <p className="text-[25px] text-[#e8e8eb] font-medium">20<br className='hidden lg:block'/>17</p>
                    <div className="text-center">
                        <h1 className="text-[12px] md:text-[20px] text-black font-semibold">Vendeur Technicien</h1>
                        <p className="text-[#7a7a7a] text-[10px]  md:text-[14px]">Réparation et vente telephonie</p>
                    </div>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-5">
            <img src={voo}/>
                    <p className="text-[25px] text-[#e8e8eb] font-medium">20<br className='hidden lg:block'/>18</p>
                    <div className="text-center">
                        <h1 className="text-[12px] md:text-[20px] text-black font-semibold">Vendeur Espace Culturel</h1>
                        <p className="text-[#7a7a7a] text-[10px]  md:text-[14px]">Vente Telephonie, Informatique</p>
                    </div>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-5">
                <img src={last}/>
                    <p className="text-[25px] text-[#e8e8eb] font-medium">20<br className='hidden lg:block'/>17</p>
                    <div className="text-center">
                        <h1 className="text-[12px] md:text-[20px] text-black font-semibold">Conseiller Helpdesk</h1>
                        <p className="text-[#7a7a7a] text-[10px]  md:text-[14px]">Résolution technique internet</p>
                    </div>
            </div>
        </div>
    );
};

export default Experience;