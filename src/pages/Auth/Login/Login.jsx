
import Lottie from 'lottie-react';
import { FaEnvelope, FaEye, FaSignInAlt } from 'react-icons/fa';
import LoginLottieData from '../../../assets/lottie/login.json';
import { Link, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import AuthContext from '../../../Context/AuthContext';
import { useContext } from 'react';
import SocialLogin from '../../../components/SocialLogin/SocialLogin';

const Login = () => {

  const { signInUser } = useContext(AuthContext)
  const navigate = useNavigate();
  const handleLogin = e => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;

  

  signInUser(email, password)
    .then(result => {
      console.log(result.user);
      toast.success("Log in successfully!");
      navigate("/");
      form.reset();
    })
    .catch(error => {
      
      if (error.code === "auth/user-not-found") {
        toast.error("User not found. Please check your email.");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password. Please try again.");
      } else {
        toast.error("Login failed. " + error.message);
      }
    });
};

  return (
    <div className="w-10/12 mx-auto min-h-screen bg-gray-100 flex">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <FaSignInAlt className="text-red-600 fa-lg" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Please Log in to continue</h2>
            </div>

            <form onSubmit={handleLogin}>
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
                Log in
              </button>

              <p className="mt-6 text-center text-gray-600">
                Don&apos;t have an account?
                <Link to="/signup"
                  type="button"
                  className="ml-1 text-red-600 hover:text-red-700 font-semibold"
                >
                  Sign up
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
          <Lottie animationData={LoginLottieData} ></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Login;
