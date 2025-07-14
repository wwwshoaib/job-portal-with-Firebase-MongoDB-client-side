import { useQuery } from "@tanstack/react-query";
import HotJobCard from "../HotJobCard/HotJobCard";

const HotJobs = () => {
    // Tanstack query
    const { isPending, error, data = [] } = useQuery({
    queryKey: ['jobs data'],
    queryFn: async () => {
      const res = await fetch('https://job-portal-server-drab-five.vercel.app/jobs');
      if (!res.ok) {
        throw new Error('Server response was not OK. Please wait a few minutes.');
      }
      return res.json();
    },
  });

  
  if (isPending) return <p className="text-center text-xl py-8">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error.message}</p>;



    return (
        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {
                data.map(job => <HotJobCard key ={job._id} job ={job} ></HotJobCard>)
            }
            
        </div>
    );
};

export default HotJobs;