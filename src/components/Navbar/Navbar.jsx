import { useState } from 'react';
import { FaBars, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router';
import AuthContext from '../../Context/AuthContext';
import { useContext } from 'react';
import toast from 'react-hot-toast';


const menuItems = [

  {
    label: 'Frisuren',
    children: ['Haarschnitte', 'Styling-Tipps', 'Haarpflege'],
  },
  {
    label: 'Gesundheit',
    children: ['Ernährung', 'Fitness', 'Wellness'],
  },
  {
    label: 'Leben',
    children: ['Lifestyle', 'Wohnen', 'DIY'],
  },
  {
    label: 'Familie',
    children: ['Kinderwunsch', 'Schwangerschaft', 'Erziehung'],
  },
];

const Navbar = () => {

  const { user,   signOutUser } = useContext(AuthContext);

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

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});

  const toggleDropdown = (label) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <nav className=" border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Mobile menu toggle */}
        <div className="flex justify-between md:hidden py-3">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-gray-800 text-2xl">
            <FaBars />
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex justify-center space-x-8 text-gray-800 py-4 font-medium">
          <li><a href="/" className="hover:text-pink-500">Home</a></li>
          {menuItems.map((item) => (
            <li key={item.label} className="relative group">
              <a href="#" className="hover:text-pink-500">{item.label}</a>
              {/* Dropdown */}
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg z-10 py-2 opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none group-hover:pointer-events-auto">
                {item.children.map((child) => (
                  <a
                    href="#"
                    key={child}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {child}
                  </a>
                ))}
              </div>
            </li>
          ))}
          {
            user ?
              <>
              <button onClick={handleSignOut}
              >Logout</button>

              </>
              :
              <>
                <li><Link to="/login">Log in</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>

              </>
          }

        </ul>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white">
            <ul className="py-2">
              {menuItems.map((item) => (
                <li key={item.label} className="border-b border-gray-200">
                  <div
                    onClick={() => toggleDropdown(item.label)}
                    className="flex justify-between items-center px-4 py-2 cursor-pointer"
                  >
                    <span>{item.label}</span>
                    {mobileDropdowns[item.label] ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {mobileDropdowns[item.label] && (
                    <div className="bg-gray-50 py-2">
                      {item.children.map((child) => (
                        <a
                          href="#"
                          key={child}
                          className="block px-6 py-1 text-sm"
                        >
                          {child}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
              <li className="border-b border-gray-200 py-2">
                <a href="#" className="block px-4">Horoskop</a>
              </li>
              <li className="py-2">
                <a href="#" className="block px-4">Gewinnspiele</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
