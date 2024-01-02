import { Link } from "react-router-dom";

const About = () => {
    return (
        <>


            <div className="flex items-center justify-start mt-[7.5rem] mb-[7.5rem]" id="About">
                <img className="w-[15.93rem]" src="assets/img/avatar.jpg" alt="" />
                <div className="pl-14">
                    <h3 className="text-[1.75rem] text-[#495057] font-medium ">A H Shuvro</h3>
                    <p className="mb-4 -mt-1 text-[1rem] text-gray-500 ">Web Developer</p>
                    <p className="mb-3 text-[#495057]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit velit quo similique, est consequatur perferendis amet iusto voluptatibus. Dolore, aliquam nostrum! Facilis, odit nobis veniam placeat suscipit ducimus cum!</p>
                    <p className="mb-3 text-[#495057]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore impedit exercitationem itaque ab molestiae commodi maxime ratione. Ut reiciendis, magni quo tempora impedit id quaerat deserunt minima quisquam. Rem, fugiat necessitatibus quo quae magnam beatae odit sapiente sit dignissimos quas?</p>
                    <Link><button className="mt-4 bg-[#ff7a57] hover:bg-[#F85C70] text-[0.875rem] font-bold h-[2.7rem] w-[8.5rem] rounded-[24rem] text-white">DOWNLOAD CV</button></Link>
                </div>
            </div>


        </>
    );
};

export default About;