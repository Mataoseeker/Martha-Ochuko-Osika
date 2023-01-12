import { Link } from "react-router-dom";
import { useState } from "react";

const pic = new URL( "./images/img1.PNG", import.meta.url).href;
const pic2 = new URL( "./images/img4.PNG", import.meta.url).href;
const pic3 = new URL( "./images/img5.PNG", import.meta.url).href;
const pic4 = new URL( "./images/img6.PNG", import.meta.url).href;
const pic5 = new URL( "./images/img7.PNG", import.meta.url).href;
const pic6 = new URL( "./images/img2.PNG", import.meta.url).href;


const Projects = () => {
    const [navbar, setNavbar] = useState(false);
    return ( 
        <div className="projects">
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


            
           <main className="px-16 py-6 md:col-span-2">
            <h1 className="text-4xl md:text-6xl text-slate-200 font-serif text-center md:mt-20 mt-10 ">Projects</h1>

           <div className="mt-8 grid lg:grid-cols-2 md:grid-cols-2 gap-10 ">

        <div className=" border card border-slate-900 rounded-lg hover:shadow-lg">
           <img src={pic} alt="examination" className="w-auto md:h-72  rounded-t-lg object-cover" />
         
            <div className="m-4 text-center font-serif  text-gray-900">
                <span className="font-bold text-2xl "> Altschool React Examination </span>
            <span className="block  text-xl">A simple React website that implements Router, Nested Routes, Context Api...
            </span>
            <span className="text-lg text-gray-300">React</span>
            <div className="m-6">
            <a href="https://altschool-react-examination.netlify.app/" className="md:m-6 m-2 md:text-2xl">Live Link</a>
            <a href="https://github.com/Mataoseeker/Altschool_React_Examination" className="md:m-6 m-2 md:text-2xl">GitHub</a>
            </div>
            </div>
        </div>

        <div className=" border border-slate-900 rounded-lg hover:shadow-lg">
            
           <img src={pic2} alt="recipe" className="w-full md:h-72 object-cover rounded-t-lg" />
           
           <div className="m-4 text-center font-serif text-gray-900">
                <span className="font-bold text-2xl "> Nigho Food Recipes </span>
            <span className="block  text-xl">A simple website that contains different food Recipes.
            </span>
            <span className="text-lg text-gray-300 m-2">
                <button className="m-3">HTML</button>
                <button className="m-3">CSS</button>
                <button className="m-3">JavaScript</button>
                <button className="m-3">Tailwindcss</button>
            </span>
            <div className="m-6">
            <a href="https://nighofoods.netlify.app/" className="md:m-6 m-2 md:text-2xl">Live Link</a>
            <a href="https://github.com/Mataoseeker/nighofoods_webpage" className="md:m-6 m-2 md:text-2xl">GitHub</a>
            </div>
            </div>
            
        </div>

        <div className=" border border-slate-900 rounded-lg hover:shadow-lg">
        <img src={pic3} alt="excuse-app" className="w-full md:h-72 object-cover rounded-t-lg" />
           
           <div className="m-4 text-center font-serif text-gray-900">
                <span className="font-bold text-2xl "> An Excuse App </span>
            <span className="block  text-xl">A simple webpage that uses an API to fetch excuses
            for different occasions. 
            </span>
            <span className="text-lg text-gray-300 m-2">
                <button className="m-3">HTML</button>
                <button className="m-3">CSS</button>
                <button className="m-3">JavaScript</button>
                <button className="m-3">React</button>
            </span>
            <div className="m-6">
            <a href="https://excuse-app-01.netlify.app/" className="md:m-6 m-2 md:text-2xl">Live Link</a>
            <a href="https://github.com/Mataoseeker/Excuse-App" className="md:m-6 m-2 md:text-2xl">GitHub</a>
            </div>
            </div>
            
        </div>

        <div className=" border border-slate-900 rounded-lg hover:shadow-lg">
        <img src={pic4} alt="to-do-list" className="w-full h-72 object-cover rounded-t-lg" />
           
           <div className="m-4 text-center font-serif text-gray-900">
                <span className="font-bold text-2xl ">  To Do List App </span>
            <span className="block  text-xl">A simple webpage that allows users input different tasks for the day.
            </span>
            <span className="text-lg text-gray-300 m-2">
                <button className="m-3">HTML</button>
                <button className="m-3">CSS</button>
                <button className="m-3">JavaScript</button>
                <button className="m-3">React</button>
            </span>
            <div className="m-6">
            <a href="https://task-app-list.netlify.app/" className="md:m-6 m-2 md:text-2xl">Live Link</a>
            <a href="https://github.com/Mataoseeker/to-do-list" className="md:m-6 m-2 md:text-2xl">GitHub</a>
            </div>
            </div>
            
        </div>


        <div className=" border border-slate-900 rounded-lg hover:shadow-lg">
            
            <img src={pic5} alt="my-portfolio" className="w-full md:h-72 object-cover rounded-t-lg" />
            
            <div className="m-4 text-center font-serif text-gray-900">
                 <span className="font-bold text-2xl "> My Portfolio Website </span>
             <span className="block  text-xl">My Portfolio website that contains details about me <br /> and my projects so far.
             </span>
             <span className="text-lg text-gray-300 m-2">
                 <button className="m-3">React</button>
                 <button className="m-3">JavaScript</button>
                 <button className="m-3">Vite</button>
                 <button className="m-3">Tailwindcss</button>
             </span>
             <div className="m-6">
             <a href="https://martha-ochuko-osika.netlify.app/" className="md:m-6 m-2 md:text-2xl">Live Link</a>
             <a href="https://github.com/Mataoseeker/Martha-Ochuko-Osika" className="md:m-6 m-2 md:text-2xl">GitHub</a>
             </div>
             </div>  
            </div>
        
            <div className=" border border-slate-900 rounded-lg hover:shadow-lg">
            
            <img src={pic6} alt="sign in" className="w-full md:h-72 object-cover rounded-t-lg" />
            
            <div className="m-4 text-center font-serif text-gray-900">
                 <span className="font-bold text-2xl "> Sign In / Sign Up Page </span>
             <span className="block  text-xl">  
             </span>
             <span className="text-lg text-gray-300 m-2">
                 <button className="m-3">HTML</button>
                 <button className="m-3">CSS</button>
                 <button className="m-3">JavaScript</button>
             </span>
             <div className="m-6">
             <a href="https://login-signupp-page.netlify.app/" className="md:m-6 m-2 md:text-2xl">Live Link</a>
             <a href="https://github.com/Mataoseeker/Weekly-coding-challenge-1.git" className="md:m-6 m-2 md:text-2xl">GitHub</a>
             </div>
             </div>  
            </div>
        
        </div>
           </main>
                                    <Link to="/resume">
                                        <div className="flex justify-center">
                                            <div className="flex mt-14">
                                                <p className="text-2xl text-slate-300">Resume</p>
                                                <svg class="w-7 h-7 m-1 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                            </div>
                                        </div>

                                    </Link>


        </div>
     );
}
 
export default Projects;