// src/data/carsData.js
import tataSierraImg from "./assets/CarsPhotos/TataSIara.avif";
import venueImg from "./assets/CarsPhotos/venue.jpg";
import tharImg from "./assets/CarsPhotos/Thar.avif";
import nexonImg from "./assets/CarsPhotos/tataNexon.avif";

export const carsByType = {
  SUV: [
    {
      id: "tata-sierra",
      name: "Tata Sierra",
      price: "₹11.49 Lakh*",
      image: tataSierraImg,
    },
    {
      id: "hyundai-venue",
      name: "Hyundai Venue",
      price: "₹7.90 - 15.69 Lakh*",
      image: venueImg,
    },
    {
      id: "mahindra-thar",
      name: "Mahindra Thar",
      price: "₹9.99 - 16.99 Lakh*",
      image: tharImg,
    },
    {
      id: "tata-nexon",
      name: "Tata Nexon",
      price: "₹7.32 - 14.05 Lakh*",
      image: nexonImg,
    },
  ],
  Hatchback: [
    {
      id: "maruti-swift",
      name: "Maruti Swift",
      price: "₹6.49 - 9.99 Lakh*",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/9226/1755777061785/front-left-side-47.jpg?tr=w-300",
    },
    {
      id: "maruti-baleno",
      name: "Maruti Baleno",
      price: "₹6.99 - 10.50 Lakh*",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Baleno/10492/1755851821713/front-left-side-47.jpg?tr=w-300",
    },
  ],
  Sedan: [
    {
      id: "maruti-dzire",
      name: "Maruti Dzire",
      price: "₹6.00 - 9.00 Lakh*",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Dzire/11387/1758802554630/front-left-side-47.jpg?tr=w-300",
    },
    {
      id: "hyundai-verna",
      name: "Hyundai Verna",
      price: "₹11.00 - 17.00 Lakh*",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Verna/8703/1755774556647/front-left-side-47.jpg?tr=w-300",
    },
  ],
  MUV: [
    {
      id: "toyota-innova-crysta",
      name: "Toyota Innova Crysta",
      price: "₹20.00 - 27.00 Lakh*",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Innova-Crysta/9608/1755846139274/front-left-side-47.jpg?tr=w-300",
    },
  ],
  Luxury: [
    {
      id: "land-rover-defender",
      name: "Defender",
      price: "₹96.00 Lakh*",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Land-Rover/Defender/9080/1755764417900/front-left-side-47.jpg?tr=w-300",
    },
  ],
};

export const carDetails = {

  // ================= SUV =================

  "tata-sierra": {
    id: "tata-sierra",
    name: "Tata Sierra",
    heroImage: tataSierraImg,
    rating: 4.8,
    reviewsCount: 85,
    price: "₹11.49 Lakh*",
    city: "Ahmedabad",
    offerText: "Hurry up to lock festive offers!",
    description: "The 2025 Tata Sierra is a modern SUV with premium features, strong performance and advanced safety.",
    specs: {
      fuelType: "Petrol",
      cylinders: "4",
      torque: "145 Nm",
      transmission: "Manual",
      fuelTankCapacity: "50 Litres",
      groundClearance: "205 mm",
      engineDisplacement: "1498 cc",
      maxPower: "105 bhp",
      seatingCapacity: "5",
      bootSpace: "622 Litres",
      bodyType: "SUV",
    },
    features: [
      { name: "Power Steering", available: true },
      { name: "Climate Control", available: true },
      { name: "ABS", available: true },
      { name: "Dual Airbags", available: true },
      { name: "Touchscreen", available: true },
      { name: "Sunroof", available: false },
    ],
  },

  "hyundai-venue": {
    id: "hyundai-venue",
    name: "Hyundai Venue",
    heroImage: venueImg,
    rating: 4.5,
    reviewsCount: 120,
    price: "₹7.90 - 15.69 Lakh*",
    city: "Ahmedabad",
    offerText: "Exchange bonus available",
    description: "The Hyundai Venue is a compact SUV with connected technology and fuel-efficient engines.",
    specs: {
      fuelType: "Petrol / Diesel",
      cylinders: "4",
      torque: "172 Nm",
      transmission: "Manual / Automatic",
      fuelTankCapacity: "45 Litres",
      groundClearance: "195 mm",
      engineDisplacement: "1493 cc",
      maxPower: "118 bhp",
      seatingCapacity: "5",
      bootSpace: "350 Litres",
      bodyType: "SUV",
    },
    features: [
      { name: "Sunroof", available: true },
      { name: "Cruise Control", available: true },
      { name: "Rear Camera", available: true },
      { name: "Wireless Charging", available: true },
    ],
  },

  "mahindra-thar": {
    id: "mahindra-thar",
    name: "Mahindra Thar",
    heroImage: tharImg,
    rating: 4.7,
    reviewsCount: 210,
    price: "₹9.99 - 16.99 Lakh*",
    city: "Ahmedabad",
    offerText: "Special off-road accessories offers",
    description: "Mahindra Thar is a hardcore off-road SUV with powerful diesel and petrol engines.",
    specs: {
      fuelType: "Petrol / Diesel",
      cylinders: "4",
      torque: "300 Nm",
      transmission: "Manual / Automatic",
      fuelTankCapacity: "57 Litres",
      groundClearance: "226 mm",
      engineDisplacement: "2184 cc",
      maxPower: "130 bhp",
      seatingCapacity: "4",
      bootSpace: "Small",
      bodyType: "SUV",
    },
    features: [
      { name: "4x4", available: true },
      { name: "Touchscreen", available: true },
      { name: "Roll Cage", available: true },
      { name: "Rear Camera", available: true },
    ],
  },

  "tata-nexon": {
    id: "tata-nexon",
    name: "Tata Nexon",
    heroImage: nexonImg,
    rating: 4.6,
    reviewsCount: 190,
    price: "₹7.32 - 14.05 Lakh*",
    city: "Ahmedabad",
    offerText: "Low EMI schemes available",
    description: "Tata Nexon is India’s safest compact SUV with 5-star safety rating.",
    specs: {
      fuelType: "Petrol / Diesel",
      cylinders: "3 / 4",
      torque: "260 Nm",
      transmission: "Manual / AMT",
      fuelTankCapacity: "44 Litres",
      groundClearance: "209 mm",
      engineDisplacement: "1199 cc",
      maxPower: "118 bhp",
      seatingCapacity: "5",
      bootSpace: "382 Litres",
      bodyType: "SUV",
    },
    features: [
      { name: "6 Airbags", available: true },
      { name: "Sunroof", available: true },
      { name: "Wireless Charger", available: true },
      { name: "Rear Camera", available: true },
    ],
  },

  // ================= HATCHBACK =================

  "maruti-swift": {
    id: "maruti-swift",
    name: "Maruti Swift",
    heroImage: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/9226/1755777061785/front-left-side-47.jpg",
    rating: 4.4,
    reviewsCount: 250,
    price: "₹6.49 - 9.99 Lakh*",
    city: "Ahmedabad",
    offerText: "Best mileage hatchback deals",
    description: "Maruti Swift is a sporty hatchback known for mileage and low maintenance.",
    specs: {
      fuelType: "Petrol / CNG",
      cylinders: "3",
      torque: "111 Nm",
      transmission: "Manual / AMT",
      fuelTankCapacity: "37 Litres",
      groundClearance: "163 mm",
      engineDisplacement: "1197 cc",
      maxPower: "89 bhp",
      seatingCapacity: "5",
      bootSpace: "268 Litres",
      bodyType: "Hatchback",
    },
    features: [
      { name: "Dual Airbags", available: true },
      { name: "ABS", available: true },
      { name: "Touchscreen", available: true },
    ],
  },

  "maruti-baleno": {
    id: "maruti-baleno",
    name: "Maruti Baleno",
    heroImage: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Baleno/10492/1755851821713/front-left-side-47.jpg",
    rating: 4.5,
    reviewsCount: 210,
    price: "₹6.99 - 10.50 Lakh*",
    city: "Ahmedabad",
    offerText: "Premium hatchback offers",
    description: "Baleno is Maruti’s premium hatchback with great mileage and comfort.",
    specs: {
      fuelType: "Petrol",
      cylinders: "4",
      torque: "113 Nm",
      transmission: "Manual / AMT",
      fuelTankCapacity: "37 Litres",
      groundClearance: "170 mm",
      engineDisplacement: "1197 cc",
      maxPower: "89 bhp",
      seatingCapacity: "5",
      bootSpace: "318 Litres",
      bodyType: "Hatchback",
    },
    features: [
      { name: "HUD Display", available: true },
      { name: "Cruise Control", available: true },
      { name: "Rear Camera", available: true },
    ],
  },

  // ================= SEDAN =================

  "hyundai-verna": {
    id: "hyundai-verna",
    name: "Hyundai Verna",
    heroImage: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Verna/8703/1755774556647/front-left-side-47.jpg",
    rating: 4.6,
    reviewsCount: 160,
    price: "₹11.00 - 17.00 Lakh*",
    city: "Ahmedabad",
    offerText: "Year end deals available",
    description: "Hyundai Verna is a powerful and stylish sedan with ADAS safety.",
    specs: {
      fuelType: "Petrol",
      cylinders: "4",
      torque: "253 Nm",
      transmission: "Manual / Automatic",
      fuelTankCapacity: "45 Litres",
      groundClearance: "170 mm",
      engineDisplacement: "1497 cc",
      maxPower: "157 bhp",
      seatingCapacity: "5",
      bootSpace: "528 Litres",
      bodyType: "Sedan",
    },
    features: [
      { name: "ADAS", available: true },
      { name: "Sunroof", available: true },
      { name: "Ventilated Seats", available: true },
    ],
  },

  "maruti-dzire": {
    id: "maruti-dzire",
    name: "Maruti Dzire",
    heroImage: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Dzire/11387/1758802554630/front-left-side-47.jpg",
    rating: 4.3,
    reviewsCount: 180,
    price: "₹6.00 - 9.00 Lakh*",
    city: "Ahmedabad",
    offerText: "Low cost family sedan offers",
    description: "Dzire is a compact sedan with great comfort and mileage.",
    specs: {
      fuelType: "Petrol / CNG",
      cylinders: "4",
      torque: "113 Nm",
      transmission: "Manual / AMT",
      fuelTankCapacity: "37 Litres",
      groundClearance: "163 mm",
      engineDisplacement: "1197 cc",
      maxPower: "89 bhp",
      seatingCapacity: "5",
      bootSpace: "378 Litres",
      bodyType: "Sedan",
    },
    features: [
      { name: "Keyless Entry", available: true },
      { name: "Rear AC Vents", available: false },
    ],
  },

  // ================= MUV =================

  "toyota-innova-crysta": {
    id: "toyota-innova-crysta",
    name: "Toyota Innova Crysta",
    heroImage: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Innova-Crysta/9608/1755846139274/front-left-side-47.jpg",
    rating: 4.7,
    reviewsCount: 140,
    price: "₹20.00 - 27.00 Lakh*",
    city: "Ahmedabad",
    offerText: "Best MPV for long trips",
    description: "Innova Crysta is a premium MPV with massive space and comfort.",
    specs: {
      fuelType: "Diesel",
      cylinders: "4",
      torque: "360 Nm",
      transmission: "Manual",
      fuelTankCapacity: "55 Litres",
      groundClearance: "178 mm",
      engineDisplacement: "2393 cc",
      maxPower: "148 bhp",
      seatingCapacity: "7 / 8",
      bootSpace: "300+ Litres",
      bodyType: "MUV",
    },
    features: [
      { name: "Captain Seats", available: true },
      { name: "Cruise Control", available: true },
      { name: "Rear AC", available: true },
    ],
  },

  // ================= LUXURY =================

  "land-rover-defender": {
    id: "land-rover-defender",
    name: "Defender",
    heroImage: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Land-Rover/Defender/9080/1755764417900/front-left-side-47.jpg",
    rating: 4.9,
    reviewsCount: 60,
    price: "₹96.00 Lakh*",
    city: "Ahmedabad",
    offerText: "Luxury off-road SUV",
    description: "Defender is a luxury 4x4 SUV with extreme off-road capability.",
    specs: {
      fuelType: "Petrol / Diesel",
      cylinders: "4 / 6",
      torque: "650 Nm",
      transmission: "Automatic",
      fuelTankCapacity: "90 Litres",
      groundClearance: "218 mm",
      engineDisplacement: "1997 cc",
      maxPower: "394 bhp",
      seatingCapacity: "5 / 7",
      bootSpace: "786 Litres",
      bodyType: "SUV",
    },
    features: [
      { name: "Air Suspension", available: true },
      { name: "Terrain Modes", available: true },
      { name: "Panoramic Sunroof", available: true },
    ],
  },

};
