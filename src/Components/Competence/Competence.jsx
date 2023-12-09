import ps from '../../assets/images/ps.png'
import pr from '../../assets/images/pr.png'
import html from '../../assets/images/html.png'
import css from '../../assets/images/css.png'

const Competence = () => {
    return (
        <div className="mt-24">
            <div className='lg:flex lg:justify-center lg:gap-32'>
                <div className="text-center">
                    <h1 className="text-2xl mb-1 text-[#757575] font-bold">AUTONOMIE</h1>
                    <h1 className="text-2xl mb-1 text-[#757575] font-bold">CREATIVITE</h1>
                    <h1 className="text-2xl mb-1 text-[#757575] font-bold">CAPACITE D`ADAPTATION</h1>
                    <h1 className="text-2xl mb-1 text-[#757575] font-bold">RESPONSABILITE</h1>
                </div>
                <div className='flex lg:block justify-center gap-5 my-5'>
                    <img className='w-10 lg:w-28 lg:relative lg:left-20' src={ps} />
                    <img className='w-10 lg:w-28 lg:relative lg:bottom-10 lg:left-5' src={pr} />
                    <img className='w-10 lg:w-28 lg:relative lg:bottom-16 lg:left-14' src={html} />
                    <img className='w-10 lg:w-28 lg:relative lg:bottom-24 lg:left-3' src={css} />
                </div>
            </div>
            <div className='lg:relative text-center lg:bottom-48 lg:right-96'>
                <h1 className="text-2xl mb-1 text-[#757575] font-bold">TECHNIQUE DE VENTE</h1>
                <h1 className="text-2xl mb-1 text-[#757575] font-bold">GESTION DE POINT DE VENTE</h1>
                <h1 className="text-2xl mb-1 text-[#757575] font-bold">AISANCE RELATIONNELLE</h1>
                <h1 className="text-2xl mb-1 text-[#757575] font-bold">STRATEGIE DE COMMERCIALISATION </h1>
            </div>
        </div>
    );
};

export default Competence;