import React , {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {register} from '../actions/userActions';

const SignUp = () => {

  const [user, setUser] = useState({
    name: '',
    email : '',
    password : '',
  })
  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister;

  const handleChange = e =>  setUser({...user, [e.target.name] : e.target.value});


  
  const onSubmit = (e) => {
    e.preventDefault();
    // dispatch(register(user));
    console.log("form submitted")
    setUser({...user, name: '', email : '', password : ''})


  }
    return (
        <div className="h-screen flex justify-center">
        <div className="py-6 px-8 h-96 w-96 mt-20 bg-white rounded shadow-xl">
          <form onSubmit={onSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-800 font-bold">Name:</label>
              <input type="text" name="name" placeholder="Your Name" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2
               outline-none focus:ring-indigo-600 :ring-indigo-600" autoComplete="off" onChange={handleChange}/>
            </div>
    
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-800 font-bold">Email:</label>
              <input type="email" name="email"  placeholder="@email" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none 
              focus:ring-indigo-600 :ring-indigo-600" autoComplete="off" onChange={handleChange}/>
            </div>
            <div className="">
              <label htmlFor="email" className="block text-gray-800 font-bold">Password:</label>
              <input type="password" name="password"  placeholder="Password" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none
               focus:ring-indigo-600 :ring-indigo-600" autoComplete="off" onChange={handleChange}/>
            </div>
            <button className="cursor-pointer py-2 px-4 block mt-6 bg-gray-900 hover:bg-gray-700 text-white font-bold w-full text-center rounded">Login</button>
          </form>
        </div>
     
      </div>
    )
}

export default SignUp
