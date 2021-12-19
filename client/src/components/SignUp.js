import React , {useState} from 'react';
import { useDispatch } from 'react-redux';
import {register} from '../actions/userActions';

const SignUp = ({history}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();


  const onSubmit = (e) => {
    e.preventDefault();

   if(name === '' || email === '' || password === '')  {
      alert('The form should not be emty')
    }
    else {
      dispatch(register(name, email, password));
      setName("");
      setEmail("");
      setPassword("");
       history.push('/admin/products');
     }
  
  }
    return (
        <div className="h-screen flex justify-center">
        <div className="py-6 px-8 h-96 w-96 mt-20 bg-white rounded shadow-xl">
          <form onSubmit={onSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-800 font-bold">Name:</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Your Name" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2
               outline-none focus:ring-indigo-600 :ring-indigo-600" autoComplete="off"/>
            </div>
    
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-800 font-bold">Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  name="email"  placeholder="@email" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none 
              focus:ring-indigo-600 :ring-indigo-600" autoComplete="off"/>
            </div>
            <div className="">
              <label htmlFor="email" className="block text-gray-800 font-bold">Password:</label>
              <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)}  name="password"  placeholder="Password" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none
               focus:ring-indigo-600 :ring-indigo-600" autoComplete="off" />
            </div>
            <button className="cursor-pointer py-2 px-4 block mt-6 bg-gray-900 hover:bg-gray-700 text-white font-bold w-full text-center rounded">Register</button>
          </form>
        </div>
     
      </div>
    )
}

export default SignUp;
