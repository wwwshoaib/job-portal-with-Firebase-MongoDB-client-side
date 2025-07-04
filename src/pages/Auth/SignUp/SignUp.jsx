

import Lottie from 'lottie-react';
import { FaEnvelope, FaEye, FaEyeSlash, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import SignUpLottieData from '../../../assets/lottie/sign-up.json';
import { Link } from 'react-router';

const SignUp = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                                <FaSignInAlt className="text-red-600 fa-lg" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Create a new account here</h2>

                        </div>

                        <form>
                            <div className="mb-6 relative">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600"
                                    placeholder="Type your email"
                                />
                                <FaEnvelope className="absolute right-3 top-11 text-gray-400" />
                            </div>

                            <div className="mb-6 relative">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                <input
                                    type="password"
                                    required
                                    className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600"
                                    placeholder="Type your password"
                                />
                                <FaEye className="absolute right-3 top-11 text-gray-400 hover:text-gray-600" />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 focus:ring-4 focus:ring-red-600 disabled:opacity-50"
                            >
                                Sign Up
                            </button>

                            <p className="mt-6 text-center text-gray-600">
                                Please log in if you already have an account.
                                <Link className='bg-slate-200 text-red-500 btn'
                                    to="/login" >Log in</Link>

                            </p>

                        </form>
                    </div>
                </div>
            </div>

            <div
                className="hidden lg:block lg:w-1/2 bg-cover  bg-gray-100 bg-center"

            >
                <div className="h-full bg-black bg-opacity-5 flex items-center justify-center">
                    <Lottie animationData={SignUpLottieData} ></Lottie>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
