
const Footer = () => {
    return (
        <footer className=" text-primary border-t border-gray-500 font-semibold font-serif py-4">
            <div className="max-w-7xl mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Alpha. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
