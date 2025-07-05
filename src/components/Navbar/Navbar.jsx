import { useState } from 'react';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/favicon.png'

const Navbar = () => {

  const { user, signOutUser } = useContext(AuthContext);

  //handle sign out
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Log out successfully!")

      })
      .catch(error => {
        console.log(error.message)
      })
  }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);

  return (
    <nav className="w-full md:w-10/12 mx-auto bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src= {logo} alt="Logo" />
              <span className="ml-2 text-xl font-bold">Job Portal</span>
            </a>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <NavLink to="/"
              className="text-white border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium">Home</NavLink>
              <NavLink to= "/team"
              className="text-gray-300 hover:text-white hover:border-gray-300 border-b-2 border-transparent px-1 pt-1 text-sm font-medium">Team</NavLink>
              <NavLink className="text-gray-300 hover:text-white hover:border-gray-300 border-b-2 border-transparent px-1 pt-1 text-sm font-medium">Projects</NavLink>
              <NavLink className="text-gray-300 hover:text-white hover:border-gray-300 border-b-2 border-transparent px-1 pt-1 text-sm font-medium">Calendar</NavLink>
            </div>
          </div>

          <div className="flex items-center">
            <div className="hidden md:flex md:ml-4">
              <div className="relative">
                <input
                  type="text"
                  className="bg-gray-800 text-white rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
                  placeholder="Search..."
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="ml-3 relative hidden md:block">
              {
                user ?
                  <>

                    <button
                      onClick={toggleUserMenu}
                      className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                    >
                      <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" alt="" />
                      <span><strong>{user.email}</strong></span>
                    </button>
                    {userMenuOpen && (
                      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white text-gray-700 z-20">
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Your Profile</a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Settings</a>
                        <button onClick={handleSignOut}
                          className="block px-4 py-2 text-sm hover:bg-gray-100">Log out</button>
                      </div>
                    )}

                  </>
                  :
                  <>
                    <Link to="/login">Log in</Link> &nbsp; &nbsp;
                    <Link to="/signup">Sign Up</Link>

                  </>
              }

            </div>

            <div className="flex md:hidden ml-4">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="bg-gray-800 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
          </div>

          <div className="px-2 pb-3">
            <div className="relative">
              <input
                type="text"
                className="bg-gray-800 text-white w-full rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>



          <div className="pt-4 pb-3 border-t border-gray-700">
            {
              user ?
                <>
                  <div className="flex items-center px-5">
                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" alt="" />
                    <div className="ml-3">
                      <div className="text-base font-medium text-white">{user.displayName}</div>
                      <div className="text-sm font-medium text-gray-400">{user.email}</div>
                    </div>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>
                  </div>
                </>
                :
                <>
                  <Link to="/login">Log in</Link> &nbsp; &nbsp;
                  <Link to="/signup">Sign Up</Link>
                </>
            }

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
