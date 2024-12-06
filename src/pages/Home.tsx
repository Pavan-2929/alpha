import Work from "@/components/Work";
import landing from "../assets/landing.png";
import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <div
        className="w-full h-full bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${landing})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "88vh",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white text-center px-4">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4 animate-glowText"
          >
            Welcome to Alpha Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-2xl mb-6"
          >
            Empowering businesses with innovative and tailored solutions to
            drive success.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Link
              to="/car/bmw"
              className="px-6 py-3 bg-primary hover:bg-green-600 text-white rounded-lg shadow-lg flex items-center"
            >
              Explore Now
              <MdArrowForward className="ml-2" size={20} />{" "}
            </Link>
          </motion.div>
        </div>
      </div>
      <div>
        <Work />
      </div>
    </>
  );
};

export default Home;
