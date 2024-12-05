import React from "react";
import Container from "./Container";
import work1 from "../assets/work/work1.jpeg";
import work2 from "../assets/work/work2.jpeg";
import work3 from "../assets/work/work3.jpeg";

const Work = () => {
  return (
    <Container>
      <div className="text-center py-16">
        <div className="mb-12">
          <p className="text-4xl font-bold text-primary">How Spinny Works</p>
          <p className="text-lg text-gray-600 mt-2">
            You won't just love our cars, you'll love the way you buy them.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 my12">
          <div className="group flex flex-col items-center bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105">
            <img
              src={work1}
              alt="Choose from the best pre-owned cars"
              className="w-full h-48  rounded-md mb-4"
            />
            <p className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-500">
              Choose from the best pre-owned cars
            </p>
            <p className="text-gray-600">20,000+ fully inspected cars online</p>
          </div>

          <div className="group flex flex-col items-center bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105">
            <img
              src={work2}
              alt="Transparent buying process"
              className="w-full h-48 rounded-md mb-4"
            />
            <p className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-500">
              Transparent buying process
            </p>
            <p className="text-gray-600">No hidden fees, no surprises</p>
          </div>

          <div className="group flex flex-col items-center bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105">
            <img
              src={work3}
              alt="Test drive at your convenience"
              className="w-full h-48 rounded-md mb-4"
            />
            <p className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-500">
              Test drive at your convenience
            </p>
            <p className="text-gray-600">Book a home test drive or visit us</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Ready to Find Your Dream Car?</h2>
          <p className="text-gray-600 mt-2">
            Explore thousands of fully inspected cars and book a test drive today!
          </p>
          <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
            Browse Cars
          </button>
        </div>

      </div>
    </Container>
  );
};

export default Work;
