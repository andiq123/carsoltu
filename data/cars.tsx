export type Car = {
  brand: string;
  model: string;
  price: number;
  km: number;
  year: number;
  horsepower: number;
  fuel: string;
  transmission: string;
  imageUrl: string;
  motorization: string;
  isNew: boolean;
  formattedPrice?: string;
  // altri dettagli opzionali
};

export const cars = [
  {
    brand: "Ford",
    model: "Focus",
    price: 12000,
    km: 55000,
    year: 2016,
    horsepower: 125,
    fuel: "Diesel",
    transmission: "Manual",
    imageUrl: "/images/cars/fordfocus.jpg",
    motorization: "1.6 TDCi",
    isNew: false,
    formattedPrice: "€12,000",
  },
  {
    brand: "BMW",
    model: "X3",
    price: 35000,
    km: 42000,
    year: 2018,
    horsepower: 190,
    fuel: "Petrol",
    transmission: "Automatic",
    imageUrl: "/images/cars/bmwx3.jpg",
    motorization: "2.0i",
    isNew: false,
  },
  {
    brand: "Audi",
    model: "A5",
    price: 28000,
    km: 62000,
    year: 2017,
    horsepower: 150,
    fuel: "Diesel",
    transmission: "Manual",
    imageUrl: "/images/cars/audia5.jpg",
    motorization: "2.0 TDI",
    isNew: false,
    formattedPrice: "€28,000",
  },
  {
    brand: "Toyota",
    model: "Prius",
    price: 18000,
    km: 81000,
    year: 2015,
    horsepower: 136,
    fuel: "Hybrid",
    transmission: "Automatic",
    imageUrl: "/images/cars/toyotaprius.jpg",
    motorization: "1.8 Hybrid",
    isNew: false,
  },
  {
    brand: "Mercedes-Benz",
    model: "C-Class",
    price: 25000,
    km: 50000,
    year: 2016,
    horsepower: 184,
    fuel: "Diesel",
    transmission: "Automatic",
    imageUrl: "/images/cars/mercedescclass.jpg",
    motorization: "C220d",
    isNew: false,
  },
  {
    brand: "Renault",
    model: "Clio",
    price: 8000,
    km: 68000,
    year: 2014,
    horsepower: 90,
    fuel: "Petrol",
    transmission: "Manual",
    imageUrl: "/images/cars/renaultclio.jpg",
    motorization: "1.2",
    isNew: false,
    formattedPrice: "€8,000",
  },
  {
    brand: "Volkswagen",
    model: "Tiguan",
    price: 20000,
    km: 45000,
    year: 2018,
    horsepower: 150,
    fuel: "Diesel",
    transmission: "Manual",
    imageUrl: "/images/cars/vwtiguan.jpg",
    motorization: "2.0 TDI",
    isNew: false,
  },
  {
    brand: "Peugeot",
    model: "308",
    price: 12000,
    km: 58000,
    year: 2016,
    horsepower: 120,
    fuel: "Diesel",
    transmission: "Manual",
    imageUrl: "/images/cars/peugeot308.jpg",
    motorization: "1.6 BlueHDi",
    isNew: false,
    formattedPrice: "€12,000",
  },
];
