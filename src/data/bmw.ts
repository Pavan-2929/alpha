import bmw1 from "../assets/bmw/bmw1.png";
import bmw2 from "../assets/bmw/bmw2.png";
import bmw3 from "../assets/bmw/bmw3.png";
import bmw4 from "../assets/bmw/bmw4.png";
import bmw5 from "../assets/bmw/bmw5.png";
import bmw6 from "../assets/bmw/bmw6.png";
import bmw7 from "../assets/bmw/bmw7.png";
import bmw8 from "../assets/bmw/bmw8.png";

export const carImages = [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6, bmw7, bmw8];

export const carData = {
  id: 1,
  title: "2021 Mahindra Thar LX 4 STR Hard Top Diesel MT 4WD",
  details: {
    kilometers: "13K km",
    fuelType: "Diesel",
    transmission: "Manual",
    location: "Spinny Car Hub, Trillium Avenue, Gurgaon",
    warranty: "Latest cars, 3 year warranty",
  },
  price: "13.26 Lakh",
  status: "Fixed on road price",
  availability: "This inventory is  available with us.",
};

export const inspectionData = [
  {
    status: "Passed",
    color: "green",
    icon: "✅",
    title: "Engine & Peripherals",
    description: "All systems functional with no leaks or overheating.",
  },
  {
    status: "Minor Issues",
    color: "yellow",
    icon: "⚠️",
    title: "Drivetrain",
    description: "Minor wear detected in CV joints, but functional.",
  },
  {
    status: "Failed",
    color: "red",
    icon: "❌",
    title: "Body Structure (Chassis)",
    description: "Frame misalignment detected, requires immediate repair.",
  },
  {
    status: "Passed",
    color: "green",
    icon: "✅",
    title: "Exterior",
    description: "No dents or scratches; paint quality intact.",
  },
  {
    status: "Minor Issues",
    color: "yellow",
    icon: "⚠️",
    title: "Interior",
    description: "AC performance slightly reduced.",
  },
  {
    status: "Passed",
    color: "green",
    icon: "✅",
    title: "Mechanical Components",
    description: "Suspension, brakes, and steering are in excellent condition.",
  },
];
