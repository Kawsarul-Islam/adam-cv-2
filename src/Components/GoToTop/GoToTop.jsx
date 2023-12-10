import { FaArrowCircleUp } from "react-icons/fa";
import './GoToTop.css'

const goTop = () => {
    window.scrollTo(0,0)

}


const GoToTop = () => {
    return (
        <div>
            <p className="absolute right-0 mt-[-5rem] p-[1rem] cursor-pointer">
                <FaArrowCircleUp className="text-5xl" onClick={goTop} />
            </p>
        </div>
    );
};

export default GoToTop;