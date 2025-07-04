
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="w-11/12 mx-auto py-6">
      <div className="flex justify-between items-center">
        {/* Left empty area */}
        <div className="w-1/4 md:w-1/3"></div>

        {/* Logo section */}
        <div className="text-center w-1/2 md:w-1/3">
          <a href="/" className="inline-block">
            <div className="flex items-center justify-center">
              <span className="logo-font text-5xl italic font-normal text-gray-900">active</span>
              <img
                src="https://placehold.co/40x25/FF6B00/FFFFFF?text=dm"
                alt="DM Logo"
                className="ml-2 mt-3"
              />
            </div>
            <div className="text-5xl font-bold text-gray-900 -mt-2">BEAUTY</div>
          </a>
        </div>

        {/* Search section */}
        <div className="w-1/4 md:w-1/3 flex justify-end">
          <div className="flex items-center">
            <span className="text-sm text-gray-600 mr-2">Suche</span>
            <div className="border-b border-gray-300 pb-1 flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="border-none focus:outline-none bg-transparent w-24"
              />
              <button className="p-1">
                <FaSearch className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
