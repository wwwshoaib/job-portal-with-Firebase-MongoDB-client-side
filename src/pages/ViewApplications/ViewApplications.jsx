import { useLoaderData } from "react-router";



const ViewApplications = () => {
    const applications = useLoaderData();
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
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        applications.map((applicant, index) =>  <tr key = {applicant._id}>
                            <th>{index + 1}</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>)
                       }
                       
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ViewApplications;