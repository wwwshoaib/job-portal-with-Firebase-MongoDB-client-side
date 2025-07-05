import { motion } from "motion/react";
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'

const Banner = () => {
    return (
        <div className="">
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/* part - 2: image */}
                    <div className="flex-1">
                        {/* team: 1 */}
                        <motion.img
                            src={team1}
                            className="max-w-sm rounded-br-3xl rounded-tl-3xl border-b-[6px] border-l-[6px] border-blue-500  shadow-2xl w-64"
                            animate={{ y: [0, 50, 0] }}
                            transition={{ duration: 10, repeat: Infinity }}
                        />
                         {/* team: 2 */}
                        <motion.img
                            src={team2}
                            className="max-w-sm rounded-br-3xl rounded-tl-3xl border-b-[6px] border-l-[6px] border-blue-500  shadow-2xl w-64"
                            animate={{ x: [0, 100, 0] }}
                            transition={{ duration: 10, delay:5, repeat: Infinity }}
                        />
                    </div>
                    {/*  part -1: find jobs */}
                    <div className="flex-1">
                        <motion.h1
                            className="text-2xl md:text-4xl font-bold"
                            animate={{ x: 20, color: ["#22a133", "#1549ab", "#dbed11", "#ed1111", "#0d0c0c"] }}
                            transition={{ duration: 2, delay: 1, repeat: Infinity, }}
                        >Latest  jobs for you!</motion.h1>

                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;