import Lottie from 'lottie-react';
import addJob from '../../assets/lottie/add-job.json';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';


const AddJob = () => {

  
const { user } = useAuth();

  const navigate = useNavigate();

  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    const { min, max, currency, ...newJobData } = initialData;
    newJobData.salaryRange = { min, max, currency };

    // Convert multi-line text to arrays
    newJobData.requirements = newJobData.requirements.split('\n');
    newJobData.responsibilities = newJobData.responsibilities.split('\n');
    newJobData.hr_email = user.email;

    fetch('https://job-portal-server-drab-five.vercel.app/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJobData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success('Job posted successfully!');
          navigate('/');
        } else {
          toast.error('Failed to post job.');
        }
      })
      .catch((err) => {
        toast.error('Server error!');
        console.error(err);
      });
  };

  return (
    <div className="w-10/12 mx-auto">
      {/* Title */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Add <span className="text-blue-600">Jobs</span>
        </h1>
      </div>

      {/* Form Container */}
      <div className="container max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow overflow-hidden">
        {/* Lottie Animation */}
        <div className="relative hidden xl:block xl:w-1/2 h-full">
          <Lottie animationData={addJob}></Lottie>
        </div>

        {/* Form Section */}
        <div className="w-full xl:w-1/2 p-8">
          <form onSubmit={handleAddJob} className="py-4 px-6" method="POST">
            {/* Job Title */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                Job Title
              </label>
              <input
                id="title"
                type="text"
                name="title"
                placeholder="Enter job title"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Job Location */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
                Job Location
              </label>
              <input
                id="location"
                type="text"
                name="location"
                placeholder="Enter job location"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Job Type */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="jobType">
                Job Type
              </label>
              <select
                defaultValue="select-job-type"
                id="jobType"
                name="jobType"
                required
                className="select shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option disabled value="select-job-type">
                  Select Job Type
                </option>
                <option value="hybrid">Hybrid</option>
                <option value="intern">Intern</option>
                <option value="remote">Remote</option>
                <option value="part-time">Part-Time</option>
                <option value="full-time">Full-Time</option>
                <option value="contractual">Contractual</option>
              </select>
            </div>

            {/* Category */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
                Category
              </label>
              <select
                defaultValue="select-category"
                id="category"
                name="category"
                required
                className="select shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option disabled value="select-category">
                  Select Category
                </option>
                <option >Engineering</option>
                <option >Marketing</option>
                <option >Finance</option>
                <option >Teaching</option>
                <option >Management</option>
                <option >Data Science</option>
                <option >Design</option>
              </select>
            </div>

            {/* Application Deadline */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="applicationDeadline">
                Deadline
              </label>
              <input
                id="applicationDeadline"
                type="date"
                name="applicationDeadline"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Salary */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Salary</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  name="min"
                  placeholder="Minimum"
                  required
                  className="w-1/3 border rounded py-2 px-2"
                />
                <input
                  type="number"
                  name="max"
                  placeholder="Maximum"
                  required
                  className="w-1/3 border rounded py-2 px-2"
                />
                <select name="currency" required className="w-1/3 border rounded py-2 px-2">
                  <option disabled value="">
                    Select Currency
                  </option>
                  <option value="BDT">BDT</option>
                  <option value="USD">USD</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                Job Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="3"
                placeholder="Enter job description"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>

            {/* Company Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="company">
                Company Name
              </label>
              <input
                id="company"
                type="text"
                name="company"
                placeholder="Enter company name"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Requirements */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="requirements">
                Job Requirements
              </label>
              <textarea
                id="requirements"
                name="requirements"
                rows="3"
                placeholder="Enter each requirement in a new line"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>

            {/* Responsibilities */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="responsibilities">
                Job Responsibilities
              </label>
              <textarea
                id="responsibilities"
                name="responsibilities"
                rows="3"
                placeholder="Enter each responsibility in a new line"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>

            {/* HR Email */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="hr_email">
                HR Email
              </label>
              <input
                id="hr_email"
                type="email"
                name="hr_email"
                placeholder="Enter HR Email"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* HR Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="hr_name">
                HR Name
              </label>
              <input
                id="hr_name"
                type="text"
                name="hr_name"
                placeholder="Type HR name"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Company Logo */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="company_logo">
                Company Logo URL
              </label>
              <input
                id="company_logo"
                type="text"
                name="company_logo"
                placeholder="Provide logo image URL"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center mb-4">
              <button
                type="submit"
                className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              >
                Post Job Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
