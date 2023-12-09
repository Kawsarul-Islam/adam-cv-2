import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import './Contact.css'
const Contact = () => {
    return (
        <div className="flex contact justify-center gap-5 md:gap-12 lg:gap-24 mt-24 ">
            <div className="flex gap-5 justify-center md:gap-7 lg:gap-10 mt-8 lg:mt-0 ">
                <p>
                    <FaGithub className="lg:text-7xl text-[#38b4ff] icons" />
                </p>
                <p>
                    <FaLinkedin className="lg:text-7xl text-[#38b4ff] icons"  />
                </p>

                <p>
                    <IoCall className="text-6xl text-[#38b4ff] lg:hidden "  />
                </p>

                <p>
                    <FaCirclePlus className="text-7xl mx-5 text-[#38b4ff] lg:hidden "  />
                </p>

                <p>
                    <MdEmail className="text-6xl ml-5 text-[#38b4ff] lg:hidden "  />
                </p>







            </div>
            <div className="text-center">
                <p className="text-xl md:text-3xl">
                    <span className=" text-2xl md:text-4xl font-semibold">TEL: </span> 07.81.69.08.16
                </p>

                <p className="text-xl md:text-3xl mt-3  md:mt-5 lg:mt-10">
                    <span className="text-xl md:text-4xl font-semibold">MAIL: </span> Adam.ribeiro@outlook.com
                </p>
                

            </div>
        </div>
    );
};

export default Contact;