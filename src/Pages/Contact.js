import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
    const [navbar, setNavbar] = useState(false);
    return ( 
        <div className="contact">
           

           <nav className="flex md:mt-8">
                          <br />
                                <Link to="/" className="md:text-2xl inline text-xl mt-2 text-slate-200 ml-4 md:ml-36 font-serif">Martha Ochuko O.</Link>
                            
                                <div className='md:hidden float-right ml-40'>  
                                <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg> 
                                     ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                            </button>
             </div>
           
             <div
                        className={`flex-1 justify-self-center md:ml-96 p-2 pb-3  md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                                    <Link to="/about" className="text-xl block md:inline mt-8 text-slate-200 font-serif mr-10">About</Link>
                                    <Link to="/projects" className="text-xl md:inline block mt-8 text-slate-200 font-serif mr-10">Projects</Link>
                                    <Link to="/resume" className="text-xl block md:inline  mt-8 text-slate-200 font-serif mr-10">Resume</Link>
                                    <Link to="/contact" className="text-xl text-slate-200 mt-8 font-serif block md:inline mr-10">Contact</Link>
                                    </div>    
                        </nav>   
<div>
    <h1 className="text-6xl text-slate-200 text-center font-serif mt-20 ">Contact</h1>
    <p className="md:text-2xl p-6 text-center text-lg text-slate-200 font-sans mt-10">Say Hi...</p>
    <p className="md:text-4xl text-center text-lg text-slate-200 underline font-sans mt-6">
         <a href="mailto:marthaosika8@gmail.com">marthaosika8@gmail.com</a>
    </p>
    <p className="md:text-4xl text-center text-lg text-slate-200 font-sans mt-10 ">
        <a href="tel:+2348030694524">+2348030 6945 24</a>
    </p>

</div>

        </div>
     );
}
 
export default Contact;