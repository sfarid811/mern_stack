import React from 'react'

const SignUp = () => {
    return (
        <div className="h-screen flex justify-center">
        <div className="py-6 px-8 h-96 w-96 mt-20 bg-white rounded shadow-xl">
          <form>
            <div className="mb-6">
              <label for="name" className="block text-gray-800 font-bold">Name:</label>
              <input type="text" name="name" id="name" placeholder="Your Name" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
            </div>
    
            <div className="mb-6">
              <label for="email" className="block text-gray-800 font-bold">Email:</label>
              <input type="email" name="email" id="email" placeholder="@email" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
            </div>
            <div className="">
              <label for="email" className="block text-gray-800 font-bold">Password:</label>
              <input type="password" name="password" id="password" placeholder="Password" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
            </div>
            <button className="cursor-pointer py-2 px-4 block mt-6 bg-gray-900 hover:bg-gray-700 text-white font-bold w-full text-center rounded">Login</button>
          </form>
        </div>
      </div>
    )
}

export default SignUp
