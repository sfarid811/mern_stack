import React from 'react';
import Footer from '../Footer';

const Newsletter = () => {
        const stars = [1,2,3,4,5];

        const testimonials = [
            {
                id : 1,
                name : 'KENZIE EDGAR',
                description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo doloremque quos laudantium iure impedit ad.',
                img : 'https://i.pravatar.cc/100?img=1',
                Rating : 5
            },
            {
                id : 2,
                name : 'TOMMIE EWART',
                description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo doloremque quos laudantium iure impedit ad.',
                img : 'https://i.pravatar.cc/100?img=3',
                Rating : 5
            },
            {
                id : 3,
                name : 'NEVADA HERBERTSON',
                description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo doloremque quos laudantium iure impedit ad.',
                img : 'https://i.pravatar.cc/100?img=5',
                Rating : 5
            },

        ];

    
    return (
        <section>
               <div className="text-center max-w-7xl mx-auto my-8">
                <h1 className="text-5xl sm:text-3xl font-bold mb-5 text-gray-600">What people are saying.</h1>
                <h3 className="text-xl mb-5 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                <div className="text-center mb-10">
                    <span className="inline-block w-1 h-1 rounded-full bg-gradient-to-r from-yellow-300  to-red-400 ml-1"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-gradient-to-r from-yellow-300  to-red-400 ml-1"></span>
                    <span className="inline-block w-40 h-1 rounded-full bg-gradient-to-r from-yellow-300  to-red-400"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-gradient-to-r from-yellow-300  to-red-400 ml-1"></span>
                    <span className="inline-block w-1 h-1 rounded-full bg-gradient-to-r from-yellow-300  to-red-400 ml-1"></span>
                </div>
                <div className="grid gap-4 grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-4 ">
                    <div className="border border-gray-200 shadow-md rounded h-52">
                      <div className="flex p-4">
                      <img src="https://i.pravatar.cc/100?img=1" alt="" className="rounded-full  w-12 h-12 cursor-pointer" />
                        <span className="font-bold text-sm uppercase text-gray-600 flex items-center ml-4">KENZIE EDGAR</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo doloremque quos laudantium iure impedit ad.</p>
                    
                     <div className="my-4">
                     {stars.map((star, index) => (
                             <i className={`fas fa-star text-yellow-400`} key={index}></i>
                      ))}
                     </div>
                       
                    </div>
                    <div className="border border-gray-200 shadow-md rounded">
                      <div className="flex p-4">
                      <img src="https://i.pravatar.cc/100?img=3" alt="avatar" className="rounded-full w-12 h-12 cursor-pointer" />
                        <span className="font-bold text-sm uppercase text-gray-600 flex items-center ml-4">TOMMIE EWART</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo doloremque quos laudantium iure impedit ad.</p>
                      <div className="my-4">
                     {stars.map((star, index) => (
                             <i className={`fas fa-star text-yellow-400`} key={index}></i>
                      ))}
                     </div>
                    </div>
                    <div className="border border-gray-200 shadow-md rounded">
                      <div className="flex p-4">
                      <img src="https://i.pravatar.cc/100?img=5" alt="" className="rounded-full  w-12 h-12 cursor-pointer" />
                        <span className="font-bold text-sm uppercase text-gray-600 flex items-center ml-4">NEVADA HERBERTSON</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo doloremque quos laudantium iure impedit ad.</p>
                      <div className="my-4">
                     {stars.map((star, index) => (
                             <i className={`fas fa-star text-yellow-400`} key={index}></i>
                      ))}
                     </div>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pb-12 md:pb-20">

                    <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden">

                        <div className="absolute right-0 bottom-0 pointer-events-none md:hidden">
                            <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                                        <stop stopColor="#DFDFDF" offset="0%" />
                                        <stop stopColor="#4C4C4C" offset="44.317%" />
                                        <stop stopColor="#333" offset="100%" />
                                    </radialGradient>
                                </defs>
                                <g fill="none" fillRule="evenodd">
                                    <g fill="#FFF">
                                        <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                                        <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                                        <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                                        <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                                        <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                                        <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                                        <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                                        <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                                    </g>
                                    <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                                </g>
                            </svg>
                        </div>

                        <div className="relative flex flex-col md:flex-row justify-between items-center">

                            <div className="text-left lg:max-w-xl">
                                <h3 className="h3 text-white mb-2">Powering your business</h3>
                                <p className="text-gray-300 text-lg mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente.</p>

                                <form className="w-full lg:w-auto">
                                    <div className="text-left flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                                        <input type="email" className="w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Your email…"/>
                                        <a className="btn text-white bg-blue-600 hover:bg-blue-700 shadow" href="#0">Subscribe</a>
                                    </div>

                                    <p className="text-sm text-gray-400 mt-3">7 days free trial. No credit card required.</p>
                                </form>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <Footer/>
        </section>
    )
}

export default Newsletter
