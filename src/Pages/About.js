import { Link } from "react-router-dom";
import { useState } from "react";

const About = () => {
    const [navbar, setNavbar] = useState(false);
    return ( 
        <div className="about">
            
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
                        <div className="">

                            <h1 className="text-4xl md:text-6xl text-slate-200 font-serif text-center md:mt-20 mt-10 ">About Me</h1>
                            <div className="md:flex">
                                <img src= {require ("./image.JPG")}  className="md:ml-20 ml-36 w-44 m-5 md:w-80 border rounded-full " alt="my face"/>
                            <p className="text-2xl md:text-2xl  text-slate-300 font-serif md:mt-28 p-6  md:text-justify text-center ">Hi! I am Martha Ochuko O.  A Frontend Developer with a passion for building  beautiful and responsive websites. <br /> I am also a technical writer and a YouTuber   with a keen eye for details and a love for minimalism. <br /> <br /> I graduated from the University of Benin, studied Computer Engineering.<br /> I strive to be a better developer by writing code, practice by working on projects  <br /> and collaborate on projects. <br /> I am currently looking for an internship or a job as a Frontend Developer.</p>
                            </div>
                            <h1 className="text-2xl md:text-4xl text-slate-200 font-serif text-center md:mt-20 mt-10">Languages & Tools </h1>

                            <div className="mt-8 ">
                            <div className="">
                        <p className="text-slate-300 text-center text-2xl">Here are a list of tools that i have worked with:</p>
                        <p className="text-slate-300 text-center col-span-3 bg-gray-100 card border rounded-sm md:grid md:mt-10 grid-cols-3 mt-8 text-2xl">     
                                
                                <img src= {require ("./images/html.png")}  className="ml-36 w-20 m-5 md:w-20 border rounded-lg " alt="my face"/>
                                
                                <img src= {require ("./images/css.png")}  className="ml-36 w-20 m-5 md:w-20 border rounded-lg " alt="my face"/>
                               
                                <img src= {require ("./images/js.png")}  className="ml-36 w-20 m-5 md:w-20 border rounded-lg " alt="my face"/>

                                <img src= {require ("./images/react.png")}  className="ml-36 w-20 m-5 md:w-20 border rounded-lg " alt="my face"/>

                                <img src= {require ("./images/tailwind.jpg")}  className="ml-36 w-20 m-5 md:w-20 border rounded-lg " alt="my face"/>

                                <img src= {require ("./images/git.png")}  className="ml-36 w-20 m-5 md:w-20 border rounded-lg " alt="my face"/>

                        </p>
                        </div>
                        </div>
                        </div>



                        <Link to="/projects">
                                        <div className="flex justify-center">
                                            <div className="flex mt-14">
                                                <p className="text-2xl text-slate-300">Projects</p>
                                                <svg class="w-7 h-7 m-1 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                            </div>
                                        </div>

                        </Link>

        </div>
     );
}
 
export default About;