import varsity from '../assets/images/versity.png'
import damp from '../assets/images/damp.png'

const Formation = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-7/12 mx-auto text-center'>
            <div>
                <img className='w-44 ml-10 md:ml-0' src={varsity} />
            </div>

            <div>
                <p className='text-base lg:text-xl font-semibold'>DUT TECHNIQUE DE </p>
                <p className='text-base lg:text-xl font-semibold'>COMMERCIALISATION</p>
                <p className='text-base lg:text-xl text-[#9d9d9d] font-semibold'>Université Hainaut-cambrésis - 2014-2016</p>
            </div>

            <div>
                <img className='w-44 ml-10 md:ml-0' src={damp}/>
            </div>

            <div>
                <p className='text-base lg:text-xl font-semibold'>BAC GESTION COMMERCIAL Etablissement</p>
                <p className='text-base lg:text-xl text-[#9d9d9d] font-semibold'>Dampierre - 2013</p>
            </div>

        </div>
    );
};

export default Formation;