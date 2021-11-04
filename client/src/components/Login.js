import React , {useState, Fragment} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../actions/userActions';

const Login = ({history}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if(email === '' || password === '')  {
      alert('The form should not be emty')
    }
    else {
      dispatch(login(email, password));
      setEmail("");
      setPassword("");
      history.push('/');
  
    }
  }
    return (

        <div className="h-screen flex justify-center">
        <div className="py-6 px-8 h-80 w-96 mt-20 bg-white rounded shadow-xl">
          <form onSubmit={onSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-800 font-bold">Email</label>
              <input type="email"  placeholder="@email" className="w-full border border-gray-300 py-2 pl-3 
              rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" autoComplete="off" 
              value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
    
            <div>
              <label htmlFor="password" className="block text-gray-800 font-bold">Password</label>
              <input type="password"  placeholder="Password" className="w-full border border-gray-300 py-2 pl-3 
              rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" autoComplete="off"
              value={password} onChange={e => setPassword(e.target.value)} 
              />
            </div>
            <button type='submit' className="cursor-pointer py-2 px-4 block mt-6 bg-gray-900 hover:bg-gray-700 
            text-white font-bold w-full text-center rounded">Login</button>
          </form>
        </div>
      </div>
    )
}

export default Login
