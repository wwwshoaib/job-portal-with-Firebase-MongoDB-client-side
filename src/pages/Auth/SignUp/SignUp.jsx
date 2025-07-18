

import Lottie from 'lottie-react';
import { FaEnvelope, FaEye, FaSignInAlt } from 'react-icons/fa';
import SignUpLottieData from '../../../assets/lottie/signUp.json';
import { Link, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import AuthContext from '../../../Context/AuthContext';
import SocialLogin from '../../../components/SocialLogin/SocialLogin';




const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

       

        const validatePassword = (password) => {
            if (password.length < 6) {
                toast.error("Password must be at least 6 characters long.");
                return false;
            }

            if (!/[a-z]/.test(password)) {
                toast.error("Password must contain at least one lowercase letter.");
                return false;
            }

            if (!/[A-Z]/.test(password)) {
                toast.error("Password must contain at least one uppercase letter.");
                return false;
            }

            if (!/^[a-zA-Z\d]+$/.test(password)) {
                toast.error("Password must only contain letters and numbers.");
                return false;
            }

            return true;
        };

        if (!validatePassword(password)) {
            return; // Stop form submission or further processing
        }

        // console.log(email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })

        // form reset
        form.reset();
        navigate('/');


    }

    return (
        <div className="w-10/12 mx-auto bg-gray-100 flex ">
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                                <FaSignInAlt className="text-red-600 fa-lg" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Create a new account here</h2>

                        </div>

                        <form onSubmit={handleRegister}>
                            <div className="mb-6 relative">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name='email'
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
                                    name='password'
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
                                Don&apos;t have an account?
                                <Link to="/login"
                                    type="button"
                                    className="ml-1 text-red-600 hover:text-red-700 font-semibold"
                                >
                                    Log in
                                </Link>
                            </p>

                        </form>
                        <SocialLogin></SocialLogin>
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
