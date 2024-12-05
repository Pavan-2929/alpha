import landing from "../assets/landing.png"
const Home = () => {
    return (
        <div className="w-full h-full bg-cover bg-center"
            style={{
                backgroundImage: `url(${landing})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "88vh",
            }}>
            <div>
                {/* <p>Your best car purchaase platfrom</p> */}
            </div>
        </div >
    )
}

export default Home
