import { useState, useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import logo from '../../assets/favicon.png';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  console.log(user);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch(error => {
        console.error(error.message);
      });
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-white border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium"
            : "text-gray-300 hover:text-white hover:border-gray-300 border-b-2 border-transparent px-1 pt-1 text-sm font-medium"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/jobs"
        className={({ isActive }) =>
          isActive
            ? "text-white border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium"
            : "text-gray-300 hover:text-white hover:border-gray-300 border-b-2 border-transparent px-1 pt-1 text-sm font-medium"
        }
      >
        Jobs
      </NavLink>
      <NavLink
        to="/my-applications"
        className={({ isActive }) =>
          isActive
            ? "text-white border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium"
            : "text-gray-300 hover:text-white hover:border-gray-300 border-b-2 border-transparent px-1 pt-1 text-sm font-medium"
        }
      >
        My Applications
      </NavLink>
      <NavLink
        to="/addjob"
        className={({ isActive }) =>
          isActive
            ? "text-white border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium"
            : "text-gray-300 hover:text-white hover:border-gray-300 border-b-2 border-transparent px-1 pt-1 text-sm font-medium"
        }
      >
        Add Job
      </NavLink>
      <NavLink
        to="/my-posted-jobs"
        className={({ isActive }) =>
          isActive
            ? "text-white border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium"
            : "text-gray-300 hover:text-white hover:border-gray-300 border-b-2 border-transparent px-1 pt-1 text-sm font-medium"
        }
      >
        My Posted Jobs
      </NavLink>
    </>
  );

  return (
    <nav className="w-full md:w-10/12 mx-auto bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo & Nav */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src={logo} alt="Logo" />
              <span className="ml-2 text-xl font-bold">Job Portal</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">{navLinks}</div>
          </div>

          {/* Search and Profile */}
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

            {/* User Dropdown (Hover) */}
            {user ? (
              <div className="ml-3 relative group hidden md:block">
                <button className="bg-gray-800 flex text-sm rounded-full focus:outline-none">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                    alt="User"
                  />
                </button>

                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <span className="block px-4 py-2 text-sm text-gray-700 border-b">
                    <strong>{user.displayName}</strong>
                  </span>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Log out
                  </button>
                </div>
              </div>
            ) : (
              <div className="hidden md:flex space-x-4">
                <Link to="/login" className="text-gray-300 hover:text-white">Log in</Link>
                <Link to="/signup" className="text-gray-300 hover:text-white">Sign Up</Link>
              </div>
            )}

            {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 flex flex-col">
          {navLinks}
          {user ? (
            <div className="mt-4 border-t border-gray-700 pt-3 space-y-1">
              <span className="block px-3 py-2 text-sm text-white font-medium">{user.displayName}</span>
              <a href="#" className="block px-3 py-2 text-sm text-gray-300 hover:text-white">Your Profile</a>
              <a href="#" className="block px-3 py-2 text-sm text-gray-300 hover:text-white">Settings</a>
              <button
                onClick={handleSignOut}
                className="block w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white"
              >
                Log out
              </button>
            </div>
          ) : (
            <div className="mt-4 border-t border-gray-700 pt-3 flex flex-col space-y-2">
              <Link to="/login" className="text-gray-300 hover:text-white">Log in</Link>
              <Link to="/signup" className="text-gray-300 hover:text-white">Sign Up</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
