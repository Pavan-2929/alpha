import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { carImages, inspectionData } from "@/data/bmw";
import { RiCoupon2Fill } from "react-icons/ri";
import { IndianRupee } from "lucide-react";
import { MdLocationCity } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../components/Container";
import { carData } from "@/data/bmw";
import FAQAccordion from "../components/FAQAccordion";
import { TbView360Number } from "react-icons/tb";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EMI from "../components/EMI";
import { Link } from "react-router-dom";

function Bmw() {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  return (
    <div className="min-h-screen pt-16 pb-24">
      <Container>
        <div className="flex flex-wrap md:flex-nowrap gap-x-12">
          <div className="flex flex-col">

            <div className="w-full md:max-w-[750px] relative">
              <button
                onClick={() => sliderRef1?.current?.slickPrev()}
                className="absolute top-1/2 left-2 transform z-50 -translate-y-1/2 text-white bg-primary p-2 rounded-full hover:bg-green-700 transition-all"
              >
                <FiArrowRight className="rotate-180" size={24} />
              </button>
              <button
                onClick={() => sliderRef1?.current?.slickNext()}
                className="absolute top-1/2 right-2 transform z-50 -translate-y-1/2 text-white bg-primary p-2 rounded-full hover:bg-green-700 transition-all"
              >
                <FiArrowRight size={24} />
              </button>

              <Slider
                asNavFor={nav2 ?? undefined}
                ref={sliderRef1}
                fade={true}
                autoplay={true}
                autoplaySpeed={3000}
              >
                {carImages.map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg shadow-lg"
                  >
                    <img
                      src={image}
                      alt={`Car ${index + 1}`}
                      className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </Slider>

            </div>
            <div className="max-w-[750px] ">

              <Slider
                asNavFor={nav1 ?? undefined}
                ref={sliderRef2}
                slidesToShow={4}
                swipeToSlide={true}
                focusOnSelect={true}
                className="mt-4"
              >
                {carImages.map((image, index) => (
                  <div key={index} className="p-2">
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-20 object-cover rounded-md border border-gray-300 hover:border-blue-500 transition-all"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="w-full space-y-6">
            <div className="w-full space-y-6">
              <div className="text-white bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 flex items-center justify-between text-sm rounded-3xl animate-pulse">
                <p className="text-[16px] font-semibold font-serif">
                  Sweet <br /> December
                </p>
                <div className="flex space-x-4 items-center">
                  <RiCoupon2Fill className="text-white text-2xl" />
                  <p className="text-[13px]">
                    Free car for 3 lucky winners <br /> and trip to Paris
                  </p>
                </div>
              </div>
              <div className="space-y-4 p-6 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold text-gray-800">
                  {carData.title}
                </h2>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <span className="font-medium">Kilometers:</span>{" "}
                    {carData.details.kilometers}
                  </p>
                  <p>
                    <span className="font-medium">Fuel Type:</span>{" "}
                    {carData.details.fuelType}
                  </p>
                  <p>
                    <span className="font-medium">Transmission:</span>{" "}
                    {carData.details.transmission}
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MdLocationCity className="text-xl text-gray-800" />
                  <p>{carData.details.location}</p>
                </div>
                <div className="h-0.5 bg-gray-300" />
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-800">
                      <IndianRupee className="text-xl" />
                      <span className="text-lg font-semibold">
                        {carData.price}
                      </span>
                    </div>
                    <p className="text-sm text-green-600 font-medium">
                      {carData.availability}
                    </p>
                  </div>
                  <Link to="/bmw/360">
                    <TbView360Number className="text-primary size-10 cursor-pointer" />
                  </Link>
                </div>
                <div className="h-0.5 bg-gray-300" />
                <Dialog>
                  <DialogTrigger className="w-full py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-all flex items-center justify-center space-x-2">
                    <span>Check Loan Eligibility</span>
                    <FiArrowRight />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Check Eligibility</DialogTitle>
                      <DialogDescription>
                        <EMI />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4">Reasons to Buy</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 hover:shadow-lg transition-shadow">
              <AiFillSafetyCertificate className="text-4xl text-blue-500" />
              <div>
                <p className="font-bold text-gray-800">3-Year Warranty</p>
                <p className="text-sm text-gray-600">
                  Assured Plus car that comes in flawless condition and 3-year
                  powertrain warranty.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 hover:shadow-lg transition-shadow">
              <MdOutlineWorkspacePremium className="text-4xl text-yellow-500" />
              <div>
                <p className="font-bold text-gray-800">Premium Condition</p>
                <p className="text-sm text-gray-600">
                  Enjoy a premium car with guaranteed quality and extended
                  warranty.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Inspection Report
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {inspectionData.map((item, index) => (
              <div
                key={index}
                className={`p-6 bg-white rounded-lg shadow-md border-t-4 border-${item.color}-500 flex justify-between`}
              >
                <div className="flex items-center space-x-4">
                  <span
                    className={`text-2xl text-${item.color}-600 font-bold`}
                    aria-label={item.status}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <span
                    className={`px-3 py-2 rounded-full text-xs font-semibold bg-${item.color}-100 text-${item.color}-600`}
                  >
                    Status: {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <FAQAccordion />
      </Container>
    </div>
  );
}

export default Bmw;
