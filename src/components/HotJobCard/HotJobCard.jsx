import PropTypes from 'prop-types';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router';

const HotJobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    salaryRange: { min, max, currency },
    description,
    company,
    company_logo,
  } = job;

  return (
    <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition duration-300 border border-gray-100 h-full flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={company_logo}
          alt={`${company} logo`}
          className="w-12 h-12 rounded-full object-contain"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>

      {/* Meta Info */}
      <div className="space-y-2 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" /> {location}
        </div>
        <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4" /> {jobType}
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" /> {min} - {max} {currency.toUpperCase()}
        </div>
      </div>

      {/* Short Description */}
      <p className="text-sm text-gray-700 line-clamp-3 mb-4">{description}</p>

      {/* Button */}
            <Link
                to={`/jobs/${_id}`}
                className="mt-auto bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-lg text-sm font-medium transition text-center block"
            >
                Apply Now
            </Link>
    </div>
  );
};

// PropTypes validation
HotJobCard.propTypes = {
  job: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    jobType: PropTypes.string.isRequired,
    salaryRange: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    company_logo: PropTypes.string.isRequired,
  }).isRequired,
};

export default HotJobCard;
