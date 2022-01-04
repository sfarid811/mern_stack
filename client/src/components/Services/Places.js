import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';


const Places = () => {

  const dispatch = useDispatch();
  

  return (
    <div className="min-h-screen">
    <p className="text-center text-4xl font-light py-4">Featured properties</p>
    <div className="max-w-7xl mx-auto p-4 gap-4 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 select-none">
      <div className="w-full cursor-pointer rounded-md transform transition hover:-translate-y-1 shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50">
        <img className="bg-cover w-full rounded-t-md h-56" src="https://media.istockphoto.com/photos/open-door-with-key-picture-id1283022900?b=1&k=20&m=1283022900&s=170667a&w=0&h=54lV0cO9B0Kwj3aSQ2m3CLK1CLHq6h1JXHtUl_jHGAY=" />
        <div className="p-4">
          <span className="text-blue-600 font-normal text-base">News</span>
          <p className="font-semibold text-xl py-2">Tailwind Card Blog</p>
          <p className="font-light text-gray-700 text-justify line-clamp-3">The longest word in any of the major English language dictionaries, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
          <div className="flex flex-wrap mt-10 space-x-4 align-bottom">
            <img className="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
            <div className="flex flex-col space-y-0">
              <p className="font-normal text-base">added by : Saad FARID</p>
              <p className="font-light text-sm">20 de Dezembro de 2021</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full cursor-pointer rounded-md transform transition hover:-translate-y-1  shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50">
        <img className="aspect-video bg-cover w-full rounded-t-md h-56" src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        <div className="p-4">
          <span className="text-blue-600 font-normal text-base">News</span>
          <p className="font-semibold text-xl py-2">Tailwind Card Blog</p>
          <p className="font-light text-gray-700 text-justify line-clamp-3">The longest word in any of the major English language dictionaries, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
          <div className="flex flex-wrap mt-10 space-x-4 align-bottom">
            <img className="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
            <div className="flex flex-col space-y-0">
            <p className="font-normal text-base">added by : Saad FARID</p>
              <p className="font-light text-sm">20 de Dezembro de 2021</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full cursor-pointer rounded-md transform transition hover:-translate-y-1 shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50">
        <img className="aspect-video bg-cover w-full rounded-t-md h-56" src="https://media.istockphoto.com/photos/colonial-style-house-picture-id1284097677?b=1&k=20&m=1284097677&s=170667a&w=0&h=1A7BkHG5OU4WCN7m22OOhvVmU21q4UsYVJPrS1kgcKI=" />
        <div className="p-4">
          <span className="text-blue-600 font-normal text-base">News</span>
          <p className="font-semibold text-xl py-2">Tailwind Card Blog</p>
          <p className="font-light text-gray-700 text-justify line-clamp-3">The longest word in any of the major English language dictionaries, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
          <div className="flex flex-wrap mt-10 space-x-4 align-bottom">
            <img className="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
            <div className="flex flex-col space-y-0">
            <p className="font-normal text-base">added by : Saad FARID</p>
              <p className="font-light text-sm">20 de Dezembro de 2021</p>
            </div>
          </div>
        </div>
      </div>
   
  
 
    
    
    </div>
  </div>
  )
}

export default Places
