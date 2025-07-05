import Banner from "../../components/Banner/Banner";
import HotJobs from "../../components/HotJobs/HotJobs";


const Home = () => {
    return (
        <div className="w-full md:w-10/12 mx-auto">
            <Banner></Banner>
            <HotJobs></HotJobs>
            
        </div>
    );
};

export default Home;