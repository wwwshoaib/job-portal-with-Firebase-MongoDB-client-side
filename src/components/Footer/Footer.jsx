
import { Link } from "react-router";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    svgPath:
      "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    svgPath:
      "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    svgPath:
      "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    svgPath:
      "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
];

const Footer = () => {
  return (
    <footer className="w-full md:w-10/12 mx-auto bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-xl font-bold">Job Portal</span>
            </div>
            <p className="text-gray-400">Your Gateway to Great Careers</p>
            <div className="flex space-x-4">
              {socialLinks.map(({ name, href, svgPath }) => (
                <a key={name} href={href} className="text-gray-400 hover:text-white transition" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">{name}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={svgPath} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Job Seekers */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Job Seekers</h3>
            <ul className="space-y-2">
              
                <li >
                  <Link to = '/signup' className="text-gray-400 hover:text-white transition">Create Account</Link>
                </li>
                <li >
                  <Link to = '/jobs' className="text-gray-400 hover:text-white transition">Search all Jobs</Link>
                </li>
                <li >
                  <Link to = '/faqs' className="text-gray-400 hover:text-white transition">FAQs</Link>
                </li>
                <li >
                  <Link to = '/my-applications' className="text-gray-400 hover:text-white transition">My Applications</Link>
                </li>
                
            
            </ul>
          </div>

            {/* Recruiter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Recruiter</h3>
            <ul className="space-y-2">
              
                <li >
                  <Link to = '/signup' className="text-gray-400 hover:text-white transition">Create Account</Link>
                </li>
                <li >
                  <Link to = '/addjob' className="text-gray-400 hover:text-white transition">Post a Job</Link>
                </li>
                <li >
                  <Link to = '/faqs' className="text-gray-400 hover:text-white transition">FAQs</Link>
                </li>
                <li >
                  <Link to = '/my-posted-jobs' className="text-gray-400 hover:text-white transition">My Posted Jobs</Link>
                </li>
            
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p> <strong>Shoaib Ahmed,</strong> Aspiring Web Developer</p>
            
              <p>Modina Market, Akhalia,</p>
              <p>Sylhet, 3100, Bangladesh</p>
              <p className="mt-2">
                Email:{" "}
                <a href="mailto:info@company.com" className="hover:text-white transition">
                  shoaibskisc@gmail.com
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a href="tel:+11234567890" className="hover:text-white transition">
                  +880 1554 734 402
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 Company. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item, idx) => (
              <a key={idx} href="#" className="text-gray-500 hover:text-white text-sm transition">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
