import toast from "react-hot-toast";
import { useLoaderData } from "react-router";



const ViewApplications = () => {
    const applications = useLoaderData();
    //console.log(applications);
    const handleStatusUpdate = (e, id) => {
        console.log(e.target.value, id)
        const data = {
            status: e.target.value
        }
        fetch(`https://job-portal-server-drab-five.vercel.app/job-applications/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })
        .then(res => res.json())
        .then(data => {
           if(data.modifiedCount) {
             toast.success('Status updated successfully!')
           }
        })
    }
    return (
        <div className="w-10/12 mx-auto">
            <div className="text-center py-10">
                <h1 className="text-4xl font-bold text-gray-800">
                    Applications for this <span className="text-blue-600">job</span>

                </h1>
                <p>Total applications for this job {applications.length}</p>
            </div>
            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl.</th>
                            <th>Applicant Email</th>
                            <th>LinkedIn Link</th>
                            <th>GitHub Link</th>
                            <th>Resume Link</th>
                            <th>Status</th>
                            <th>Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applications.map((applicant, index) => <tr key={applicant._id}>
                                <th>{index + 1}</th>
                                <td>{applicant.applicant_email}</td>
                                <td>{applicant.linkedIn}</td>
                                <td>{applicant.github}</td>
                                <td>{applicant.resume}</td>
                                <td></td>
                                <td>
                                    <select defaultValue= {applicant.status || 'change status'} className="select select-md"
                                    onChange={(e) => handleStatusUpdate(e, applicant._id)}
                                    >
                                        <option disabled={true}>Change Status</option>
                                          <option value="pending">Pending</option>
                                        <option value="approved">Approved</option>
                                        <option value="rejected">Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ViewApplications;