import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';

const Dropdown = ({ isOpen, toggle }) => {
    const dispatch = useDispatch();


    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;
    const handleLogout = () => {
        dispatch(logout())

    }
    return (
        <div
            className={
                isOpen
                    ? 'my-24 grid grid-rows-4 text-center items-center'
                    : 'hidden'
            }
            onClick={toggle}>

            {userInfo && (
                <Fragment>
                    <NavLink to="/admin/products" className="mr-10 text-lg font-medium text-center text-gray-800 rounded-full px-2">Dashboard</NavLink>
                    <NavLink to="/login" exact className="mr-10 text-lg font-medium bg-gray-900 hover:bg-gray-700 text-white rounded-full px-6 py-2"
                        onClick={handleLogout}
                    >Logout </NavLink>

                </Fragment>
            )}

            {!userInfo && (
                <Fragment>
                    <NavLink to="/" className="mr-10 text-lg font-medium">Home</NavLink>
                    <NavLink to="/products" className="mr-10 text-lg font-medium">About</NavLink>
                    <NavLink to="/login" className="mr-10 text-lg font-medium text-center text-gray-800 rounded-full px-2">Login</NavLink>
                    <NavLink to="/register" className="mr-10 text-lg font-medium bg-gray-900 hover:bg-gray-700 text-white rounded-full px-6 py-2">Sign Up</NavLink>
                </Fragment>
            )}



        </div>
    )
}

export default Dropdown
