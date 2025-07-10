import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import AuthContext from "../../Context/AuthContext";
import toast from "react-hot-toast";

const JobApply = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleJobApplicationForm = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;

        console.log(linkedIn, github, resume)

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            github,
            resume
        }

        fetch('http://localhost:5000/job-applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    toast.success('Application submitted successfully!')

                }

                navigate('/my-applications')

            })
        //clear the form after submitting
        form.reset();


    }
    return (
        <div className="w-10/12 mx-auto min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                {/* Gradient background shape */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

                {/* Form Container */}
                <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="text-center pb-6">
                        <h1 className="text-3xl font-semibold">Apply for the Job</h1>
                        <p className="text-gray-300">
                            Fill out the form below and our HR will reach out soon.
                        </p>
                    </div>

                    <form onSubmit={handleJobApplicationForm}>
                        <input
                            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="url"
                            placeholder="Your LinkedIn URL"
                            name="linkedIn"
                            required
                        />

                        <input
                            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="url"
                            placeholder="Your GitHub URL"
                            name="github"
                            required
                        />

                        <input
                            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="url"
                            placeholder="Your Resume URL"
                            name="resume"
                        />



                        <div className="flex justify-between">
                            <button
                                type="submit"
                                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Send ➤
                            </button>
                            <button
                                type="reset"
                                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobApply;
