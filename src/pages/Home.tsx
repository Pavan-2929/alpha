import Work from "@/components/Work"
import landing from "../assets/landing.png"
const Home = () => {
    return (
        <>
            <div className="w-full h-full bg-cover bg-center relative"
                style={{
                    backgroundImage: `url(${landing})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "88vh",
                }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Welcome to Alpha Solutions
                    </h1>
                    <p className="text-lg md:text-2xl mb-6">
                        Empowering businesses with innovative and tailored solutions to drive success.
                    </p>
                    <div className="flex space-x-4">
                        <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-lg">
                            Explore Now
                        </button>
                        <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-lg">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div >
            <div>
                <Work />
            </div>
        </>
    )
}

export default Home
