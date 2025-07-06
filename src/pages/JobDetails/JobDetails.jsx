
import PropTypes from 'prop-types';
import { Briefcase, MapPin, Clock, Calendar, Mail, User } from 'lucide-react';
import { useLoaderData } from 'react-router';

const JobDetails = ( ) => {
    const job = useLoaderData();
  const {
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
    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300 max-w-3xl mx-auto my-6 border border-gray-100">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <img src={company_logo} alt="Company Logo" className="w-16 h-16 rounded-full object-contain" />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500">{company} • {category}</p>
        </div>
      </div>

      {/* Meta Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600 mb-4">
        <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {location}</div>
        <div className="flex items-center gap-2"><Briefcase className="w-4 h-4" /> {jobType}</div>
        <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Deadline: {applicationDeadline}</div>
        <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> Salary: {min} - {max} {currency.toUpperCase()}</div>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm mb-4">{description}</p>

      {/* Requirements */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-1">Requirements:</h4>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {requirements.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Responsibilities */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-1">Responsibilities:</h4>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {responsibilities.map((res, idx) => (
            <li key={idx}>{res}</li>
          ))}
        </ul>
      </div>

      {/* HR & Apply */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 rounded-xl p-4 border mt-4">
        <div className="flex items-center gap-3 text-sm text-gray-700">
          <User className="w-4 h-4 text-blue-500" /> {hr_name}
          <Mail className="w-4 h-4 text-blue-500" /> {hr_email}
        </div>
        <button className="mt-2 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition">
          Apply Now
        </button>
      </div>
    </div>
  );
};

// 🧾 PropTypes validation
JobDetails.propTypes = {
  job: PropTypes.shape({
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
