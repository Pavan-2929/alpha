import { motion } from 'framer-motion';
import { FaCarSide, FaCheckCircle, FaUsers, FaShieldAlt, FaRoad } from 'react-icons/fa'; // Adding more icons
import Container from '@/components/Container';

const About = () => {
    return (
        <Container>
            <motion.div
                className="text-center mb-6 mt-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <h2 className="text-4xl font-semibold text-primary font-serif">Welcome to the Future of Car Buying</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 pt-20">
                <motion.div
                    className="card bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <FaCarSide className="text-4xl text-blue-600 mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold text-gray-800">Car Listings</h3>
                    <p className="text-gray-600 mt-2">Explore a wide variety of cars with detailed specifications, pictures, and pricing. We offer the best deals in the market!</p>
                </motion.div>

                <motion.div
                    className="card bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <FaCheckCircle className="text-4xl text-green-500 mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold text-gray-800">Verified Sellers</h3>
                    <p className="text-gray-600 mt-2">All our listings are from verified sellers to ensure a smooth, secure, and trustworthy transaction.</p>
                </motion.div>

                <motion.div
                    className="card bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <FaUsers className="text-4xl text-yellow-500 mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold text-gray-800">Customer Support</h3>
                    <p className="text-gray-600 mt-2">We are always available to help you with any questions or concerns you have during your car buying experience.</p>
                </motion.div>

                <motion.div
                    className="card bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <FaShieldAlt className="text-4xl text-blue-600 mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold text-gray-800">Secure Transactions</h3>
                    <p className="text-gray-600 mt-2">We ensure all transactions are secure and smooth. Your safety is our top priority.</p>
                </motion.div>

                <motion.div
                    className="card bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <FaRoad className="text-4xl text-red-600 mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold text-gray-800">Wide Range of Cars</h3>
                    <p className="text-gray-600 mt-2">Whether you're looking for a sedan, SUV, or sports car, we have a wide selection to choose from, all with detailed info.</p>
                </motion.div>
            </div>
        </Container>
    );
}

export default About;
