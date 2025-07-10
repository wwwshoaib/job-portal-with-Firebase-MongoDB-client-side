import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";




const MyApplications = () => {
    const { user } = useContext(AuthContext);

    const [jobApplications, setJobApplications] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/job-applications?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobApplications(data))
    }, [user.email])

    return (
        <div className="w-10/12 mx-auto">
            {/* title */}
            {/* Title: Add Job */}
            <div className="text-center py-10">
                <h1 className="text-4xl font-bold text-gray-800">
                    My <span className="text-blue-600">Applications</span>
                </h1>
            </div>
            {/* Table */}
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Company Name & Post Name</th>
                                <th>Job location & Category</th>
                                <th>Deadline</th>
                                <th></th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                jobApplications.map(jobApplication =>
                                    <tr key={jobApplication._id}>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={jobApplication.company_logo}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{jobApplication.company}</div>
                                                    <div className="text-sm opacity-50">{jobApplication.title}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {jobApplication.location}
                                            <br />
                                            <span className="badge badge-ghost badge-sm">{jobApplication.jobType}</span>
                                        </td>
                                        <td>{jobApplication.applicationDeadline}</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">details</button>
                                        </th>
                                    </tr>)
                            }



                        </tbody>
                        
                    </table>
                </div>

            </div>


        </div>
    );
};

export default MyApplications;