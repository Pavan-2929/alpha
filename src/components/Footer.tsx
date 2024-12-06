import { motion } from "framer-motion";
const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className=" text-primary border-t border-gray-500 font-semibold font-serif py-4"
        >
            <div className="max-w-7xl mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Alpha. All rights reserved.</p>
            </div>
        </motion.footer>
    );
};

export default Footer;
