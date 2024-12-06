import Container from "./Container";
import work1 from "../assets/work/work1.jpeg";
import work2 from "../assets/work/work2.jpeg";
import work3 from "../assets/work/work3.jpeg";
import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <Container>
      <div className="text-center py-16 ">
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-primary"
          >
            How Spinny Works
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-lg text-gray-600 mt-2"
          >
            You won't just love our cars, you'll love the way you buy them.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 my12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            className="group flex flex-col items-center bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105"
          >
            <img
              src={work1}
              alt="Choose from the best pre-owned cars"
              className="w-full h-48  rounded-md mb-4"
            />
            <p className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-500">
              Choose from the best pre-owned cars
            </p>
            <p className="text-gray-600">20,000+ fully inspected cars online</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="group flex flex-col items-center bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105"
          >
            <img
              src={work2}
              alt="Transparent buying process"
              className="w-full h-48 rounded-md mb-4"
            />
            <p className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-500">
              Transparent buying process
            </p>
            <p className="text-gray-600">No hidden fees, no surprises</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            className="group flex flex-col items-center bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105"
          >
            <img
              src={work3}
              alt="Test drive at your convenience"
              className="w-full h-48 rounded-md mb-4"
            />
            <p className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-500">
              Test drive at your convenience
            </p>
            <p className="text-gray-600">Book a home test drive or visit us</p>
          </motion.div>
        </div>
        <div className="mt-20 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl font-bold text-gray-800"
          >
            Ready to Find Your Dream Car?
          </motion.h2>
          <motion.p className="text-gray-600 mt-2">
            Explore thousands of fully inspected cars and book a test drive
            today!
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Link
              to="/car/bmw"
              className="px-6 py-3 w-fit mx-auto mt-6 bg-primary hover:bg-green-600 text-white rounded-lg shadow-lg flex items-center"
            >
              Explore Now
              <MdArrowForward className="ml-2" size={20} />{" "}
            </Link>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Work;
