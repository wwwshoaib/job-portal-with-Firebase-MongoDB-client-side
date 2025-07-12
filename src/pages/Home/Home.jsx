import Banner from "../../components/Banner/Banner";
import HotJobs from "../../components/HotJobs/HotJobs";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            {/* title */}
            <div className="text-center py-10">
                <h1 className="text-4xl font-bold text-gray-800">
                    All <span className="text-blue-600"> Jobs</span>
                </h1>
            </div>
            <HotJobs></HotJobs>


        </div>
    );
};

export default Home;