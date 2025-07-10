import Lottie from 'lottie-react';
import addJob from '../../assets/lottie/add-job.json'

const AddJob = () => {

  /** 
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
   */
  return (
    <div className="w-10/12 mx-auto">
      {/* Title: Add Job */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Add <span className="text-blue-600">Jobs</span>
        </h1>
      </div>

      {/* Form Container */}
      <div className="container max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow overflow-hidden">
        {/* Image Section */}
        <div className="relative hidden xl:block xl:w-1/2 h-full">
          <Lottie animationData={addJob} ></Lottie>
        </div>

        {/* Form Section */}
        <div className="w-full xl:w-1/2 p-8">
          <form className="py-4 px-6" action="" method="POST">
            {/* title */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Job Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name='title'
                placeholder="Enter job title"
              />
            </div>

            {/* location */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Job Location
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name='location'
                placeholder="Enter job location"
              />
            </div>

            {/* Job Type */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Job Type
              </label>
              <select defaultValue="Select Job Type"
                className="select shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="service"
                name="jobType"
              >
                <option disabled={true} >Select Job Type</option>
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
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Category
              </label>
              <select defaultValue="Select Category"
                className="select shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="service"
                name="category"
              >
                <option disabled={true}>Select Category</option>
                <option value="engineering">Engineering</option>
                <option value="marketing">Marketing</option>
                <option value="finance">Finance</option>
                <option value="teaching">Teaching</option>
                <option value="management">Management</option>
                <option value="data-science">Date Science</option>
                <option value="design">Design</option>
              </select>
            </div>

            {/* Deadline */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
                Deadline
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date"
                type="date"
                placeholder="Select a date"
                name='applicationDeadline'
              />
            </div>

            {/* Salary */}
            <div className="mb-4 ">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
                Salary
              </label>
              <div className='mt-1'>
                <input type="number" name='min' placeholder='Minimum' className='border border-spacing-1' />
              </div>
              <div className='mt-1'>
                <input type="number" name='max' placeholder='Maximum' className='border border-spacing-1' />
              </div>
              <div className='mt-1'>
                <select defaultValue="Select Currency" className="select border border-spacing-1 " name='currency'>
                  <option disabled={true}>Select Currency</option>
                  <option value="bdt">BDT</option>
                  <option value="usd">USD</option>

                </select>

              </div>

            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                Job Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="4"
                placeholder="Enter job description"
                name='description'
              ></textarea>
            </div>

            {/* company */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Company Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name='company'
                placeholder="Enter company name"
              />
            </div>

            {/* Requirements */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                Job Requirements
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="3"
                placeholder="Enter each requirement in a new line"
                name='requirements'
              ></textarea>
            </div>

            {/* Responsibilities */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                Job Responsibilities
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="3"
                placeholder="Enter each responsibility in a new line"
                name='responsibilities'
              ></textarea>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                HR Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="email"
                name='hr_email'
                placeholder="Enter HR Email"
              />
            </div>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
                HR Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date"
                type="text"
                placeholder="Type HR name"
              />
            </div>
{/* company logo */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
                Company Logo
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="time"
                type="text"
                placeholder="Give Logo URL"
                name='company_logo'
              />
            </div>

          

           

            <div className="flex items-center justify-center mb-4">
              <button
                className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                type="submit"
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
