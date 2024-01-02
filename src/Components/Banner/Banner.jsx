import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithubAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
    const achievement = [
        {
            achievement: "Happy Clients",
            quantity: '124',
        },
        {
            achievement: "Project Completed",
            quantity: '456',
        },
        {
            achievement: "Awards Won",
            quantity: '789',
        },
    ]
    return (
        <div className="relative mb-[14rem]" id="Home">
            <div className="h-[38.75rem] flex items-center justify-around">
                <div className="flex flex-col">
                    <h3 className=" text-[1.56rem] font-medium text-[#495057]">hello, {`I'm`}</h3>
                    <h1 className=" text-[4.625rem] font-bold text-[#495057] ">A H Shuvro</h1>
                    <p className=" text-[#495057] text-[1.37rem] mt-[-1rem] mb-3">Web Developer</p>
                    <div className="flex gap-4  mb-3 mt-4 ">
                        <Link><button className="bg-[#ff7a57] hover:bg-[#F85C70] text-[0.875rem] font-bold h-[2.7rem] w-[5.5rem] rounded-[24rem] text-white">HIRE ME</button></Link>
                        <Link><button className="bg-[#343a40] text-white text-[0.875rem] font-bold h-[2.7rem] w-[8.5rem] rounded-[24rem] text-whitemt-4">DOWNLOAD CV</button></Link>
                    </div>
                    <div className="flex gap-4 mt-3">
                        <Link to=""><RiFacebookLine className="text-[2.3rem] font-normal rounded-full border-2 border-[#ff7a57] text-[#ff7a57] hover:text-white hover:bg-[#ff7a57] p-1 " /></Link>
                        <Link to=""><BiLogoGmail className="text-[2.3rem] font-normal rounded-full border-2 border-[#ff7a57] text-[#ff7a57] hover:text-white hover:bg-[#ff7a57] p-1 " /></Link>
                        <Link to=""><FaGithubAlt className="text-[2.3rem] font-normal rounded-full border-2 border-[#ff7a57] text-[#ff7a57] hover:text-white hover:bg-[#ff7a57] p-1 " /></Link>
                        <Link to=""><RiLinkedinLine className="text-[2.3rem] font-normal rounded-full border-2 border-[#ff7a57] text-[#ff7a57] hover:text-white hover:bg-[#ff7a57] p-1 " /></Link>
                    </div>
                </div>
                <div>
                    <img className="h-[38.75rem]" src="assets/img/man.svg" alt="" />
                </div>
                
            </div>
            
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 h-32 shadow-slate-200 shadow-lg w-3/5 border-1 border-gray-200 rounded-[4.375rem]">
                <div className="flex justify-around items-center ">
                    {
                        achievement.map((item, idx) => (
                            <div className="mt-6" key={idx}>
                                <h3 className="text-center text-[#495057] text-[2rem] font-medium">{item.quantity}</h3>
                                <h3 className="text-center text-gray-500">{item.achievement}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Banner;