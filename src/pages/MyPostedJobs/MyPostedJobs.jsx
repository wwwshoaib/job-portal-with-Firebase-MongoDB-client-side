import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";

const MyPostedJobs = () => {
  const [myPostedJobs, setMyPostedJobs] = useState([]);
  const { user } = useAuth();

  

  useEffect(() => {
    {
      fetch(`http://localhost:5000/jobs?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyPostedJobs(data))
        .catch(err => console.error('Error fetching jobs:', err));
    }
  }, [user?.email]);




  return (
    <div className="w-10/12 mx-auto">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800">
          My <span className="text-blue-600">Posted Jobs</span>
        </h1>
      </div>

      <p className="text-2xl font-medium mt-6">
        Total Jobs Posted:
        <span className="font-bold">{myPostedJobs?.length}</span>
      </p>

      {/* Optional: List posted jobs */}
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl.</th>
              <th>Title</th>
              <th>Category</th>
              <th>Application Count</th>
              <th>Deadline</th>
              <th>View Applications</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              myPostedJobs.map((job, index) => (
                <tr key={job._id || index}>
                  <th>{index + 1}</th>
                  <td>{job.title}</td>
                  <td>{job.category}</td>
                  <td>{job.applicationCount}</td>
                  <td>{job.applicationDeadline}</td>
                  <td>
                    <Link to = {`/viewApplications/${job._id}`}
                  
                    >
                      <button className="btn btn-link">View Applications</button>
                    </Link>
                  </td>
                </tr>
              ))
            }


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
