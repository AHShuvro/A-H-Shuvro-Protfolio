
import { NavHashLink } from 'react-router-hash-link';

const MenuBar = () => {

    return (
        <>
            <div className="navbar bg-base-100 sticky top-0 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='font-bold text-sm '><NavHashLink to='#Home'>Home</NavHashLink></li>
                            <li className='font-bold text-sm '><NavHashLink to='#About'>About</NavHashLink></li>
                            <li className='font-bold text-sm '><NavHashLink to='#Service'>Service</NavHashLink></li>
                            <li className='font-bold text-sm '><NavHashLink to='#Portfolio'>Portfolio</NavHashLink></li>
                            <li className='font-bold text-sm '><NavHashLink to='#Testmonial'>Testmonial</NavHashLink></li>
                            <li className='font-bold text-sm '><NavHashLink to='#Blog'>Blog</NavHashLink></li>
                            <li className='font-bold text-sm '><NavHashLink to='#Contact'>Contact</NavHashLink></li>
                        </ul>
                    </div>
                    <a className=""><img className='w-[4.68rem]' src="assets/img/logo.svg" alt="" /></a>
                </div>
                <div className="hidden lg:flex">
                    <ul className='flex gap-12'>
                        <li className='font-bold text-sm '><NavHashLink to='#Home'>Home</NavHashLink></li>
                        <li className='font-bold text-sm '><NavHashLink to='#About'>About</NavHashLink></li>
                        <li className='font-bold text-sm '><NavHashLink to='#Service'>Service</NavHashLink></li>
                        <li className='font-bold text-sm '><NavHashLink to='#Portfolio'>Portfolio</NavHashLink></li>
                        <li className='font-bold text-sm '><NavHashLink to='#Testmonial'>Testmonial</NavHashLink></li>
                        <li className='font-bold text-sm '><NavHashLink to='#Blog'>Blog</NavHashLink></li>
                        <li className='font-bold text-sm '><NavHashLink to='#Contact'>Contact</NavHashLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#ff7a57]">Components</a>
                </div>
            </div>

        </>
    );
}

export default MenuBar;
