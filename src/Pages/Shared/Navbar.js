import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import AddProduct from '../AddProduct';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };

    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Inventory Management</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink to={'/add-product'}>Add Product</NavLink></li>
                    <li><NavLink to={'/settings'}>Settings</NavLink></li>
                    <li><button onClick={logout}>Logout</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;