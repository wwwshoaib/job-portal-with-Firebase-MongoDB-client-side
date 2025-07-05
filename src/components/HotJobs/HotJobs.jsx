import { useQuery } from "@tanstack/react-query";
import HotJobCard from "../HotJobCard/HotJobCard";

const HotJobs = () => {
    // Tanstack query
    const { isPending, error, data = [] } = useQuery({
    queryKey: ['jobs data'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/jobs');
      if (!res.ok) {
        throw new Error('Server response was not OK. Please wait a few minutes.');
      }
      return res.json();
    },
  });

  
  if (isPending) return <p className="text-center text-xl py-8">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error.message}</p>;

  console.log(data)

    return (
        <div>
            {
                data.map(job => <HotJobCard key ={job._id} job ={job} ></HotJobCard>)
            }
            
        </div>
    );
};

export default HotJobs;