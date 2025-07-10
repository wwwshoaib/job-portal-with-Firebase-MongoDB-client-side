import PropTypes from 'prop-types';
import { Briefcase, MapPin, Clock, Calendar, Mail, User } from 'lucide-react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';

const JobDetails = () => {
  const job = useLoaderData();

  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange: { min, max, currency },
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = job;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 lg:px-24">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Job Content - 3/4 */}
        <div className="w-full lg:w-3/4 bg-white shadow-lg rounded-3xl p-8 transition duration-300 border border-gray-100">
          {/* Header */}
          <div className="flex items-center gap-5 mb-6">
            <img
              src={company_logo}
              alt="Company Logo"
              className="w-20 h-20 rounded-full object-contain border"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
              <p className="text-sm text-gray-500">{company} • {category}</p>
            </div>
          </div>

          {/* Meta Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> {location}
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> {jobType}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Deadline: {applicationDeadline}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> Salary: {min} - {max} {currency.toUpperCase()}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Job Description</h3>
            <p className="text-gray-700 text-base leading-relaxed">{description}</p>
          </div>

          {/* Requirements */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Requirements</h3>
            <ul className="list-disc list-inside text-base text-gray-700 space-y-1">
              {requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>

          {/* Responsibilities */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside text-base text-gray-700 space-y-1">
              {responsibilities.map((res, idx) => (
                <li key={idx}>{res}</li>
              ))}
            </ul>
          </div>

          {/* HR & Apply */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-blue-50 rounded-xl p-4 border mt-6">
            <div className="flex items-center gap-4 text-base text-gray-700 flex-wrap">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" /> {hr_name}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" /> {hr_email}
              </div>
            </div>
            <Link to ={`/jobApply/${_id}`}
            >
              <button className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl text-base font-medium transition">
              Apply Now
            </button>
            </Link>
          </div>
        </div>

        {/* Google Map - 1/4 */}
        <div className="w-full lg:w-1/4">
          <div className="h-full rounded-3xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="Google Map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`}
              className="w-full h-[400px] lg:h-full"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

// 🧾 PropTypes validation
JobDetails.propTypes = {
  job: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    jobType: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    applicationDeadline: PropTypes.string.isRequired,
    salaryRange: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    requirements: PropTypes.arrayOf(PropTypes.string).isRequired,
    responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
    status: PropTypes.string,
    hr_email: PropTypes.string.isRequired,
    hr_name: PropTypes.string.isRequired,
    company_logo: PropTypes.string.isRequired,
  }).isRequired,
};

export default JobDetails;
