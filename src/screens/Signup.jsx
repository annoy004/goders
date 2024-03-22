import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {  toast } from 'react-toastify';


const Signup = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    const navigate = useNavigate();

    const handelSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;

        try {
            const response = await axios.post("http://localhost:8000/api/auth/createuser", {
                name,
                email,
                password
            });
            const { success, authtoken } = response.data;

            if (success) {
                localStorage.setItem('token', authtoken);
                navigate("/Main");
                toast.success("Signed in Successfully! ");
            } else {
                toast.error("Error in signing in!");
            }
        } catch (error) {
            console.error('Error:', error.response.data);
            toast.error("Error in signing in!");
        }
    };

    const  onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <>

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  bg-yellow " >
            <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-[#674188]  hover:underline">
                Sign in to your account
            </h2>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-opacity-50 bg-[#C3ACD0] bg-blur-md border-2 border-stone-50 backdrop-filter backdrop-blur-md backdrop-saturate-150 rounded-lg p-6 shadow-2xl">
                <form className="space-y-6" onSubmit={handelSubmit}>
                    <div className="my -5">
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Name
                        </label>
                        <div className="mt-2 my-5">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                onChange={onchange}
                                placeholder="Tudu"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            placeholder="tudu@gmail.com"
                            onChange={onchange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            onChange={onchange}
                            placeholder="shhuu....."
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className="my-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="cpassword" className="block text-sm font-medium leading-6 text-gray-900">
                                Confirm Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="cpassword"
                                name="cpassword"
                                type="password"
                                autoComplete="current-password"
                                required
                                onChange={onchange}
                                placeholder="...."
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-[#674188] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#5D3891] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">

    Sign in
 
</button>

                    </div>
                </form>
                <p className='my-[6px]'>Already a user? <Link to="/login">Login</Link></p>
            </div>
        </div>
     
        </>
    )
}

export default Signup;
