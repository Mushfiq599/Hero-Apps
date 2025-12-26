import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 px-4 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost">
                        ☰
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40"
                    >
                        <li><a>Home</a></li>
                        <li><a>Apps</a></li>
                        <li><a>Installation</a></li>
                    </ul>
                </div>

                <a className="text-[#632EE3] font-gradient-to-r from-purple-500 to-indigo-500 text-xl font-bold">
                    HERO.IO
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-6">
                    <li><a className="font-semibold">Home</a></li>
                    <li><a>Apps</a></li>
                    <li><a>Installation</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                    Contribute
                </button>
            </div>
        </div>
    );
};

export default Navbar;