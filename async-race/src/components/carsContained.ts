export const carsCard = (carName: string, carSVG: string, id: number): string =>
  `<div class="car-card" id="${id}">
<div class="buttons-car">
  <h2 class="cars-card-name">${carName}</h2>
  <button class="cars-card-select" id="${id}">select</button>
  <button class="cars-card-remove" id="${id}">remove</button>
  <button class="cars-card-start" id="${id}">start</button>
  <button class="cars-card-stope" id="${id}">stope</button>
</div>
<div class="svg-car-container">
${carSVG}
</div>
</div>`;

export const carMarcs = [
  "Автокам",
  "Бронто",
  "ГАЗ",
  "ЗАЗ",
  "ЗИЛ",
  "ЗиС",
  "ИЖ",
  "Канонир",
  "Комбат",
  "ЛуАЗ",
  "Москвич",
  "СМ",
  "ТагАЗ",
  "УАЗ",
  "Эксклюзив",
  "AC",
  "Acura",
  "Adler",
  "Alfa Romeo",
  "Alpina",
  "Alpine",
  "AM General",
  "AMC",
  "Ariel",
  "Aro",
  "Asia",
  "Aston Martin",
  "Audi",
  "Austin",
  "Autobianchi",
  "Bajaj",
  "Baltijas",
  "Dzips",
  "Batmobile",
  "Beijing",
  "Bentley",
  "Bertone",
  "Bilenkin",
  "Bitter",
  "BMW",
  "Borgward",
  "Brabus",
  "Bricklin",
  "Brilliance",
  "Bristol",
  "Bufori",
  "Bugatti",
  "Buick",
  "BYD",
  "Byvin",
  "Cadillac",
  "Callaway",
  "Carbodies",
  "Caterham",
  "Changan",
  "ChangFeng",
  "Chery",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Cizeta",
  "Coggiola",
  "Dacia",
  "Dadi",
  "Daewoo2",
  "Daihatsu",
  "Daimler",
  "Datsun",
  "De Tomaso",
  "Delage",
  "DeLorean",
  "Derways",
  "DeSoto",
  "Dodge",
  "DongFeng",
  "Doninvest",
  "Donkervoort",
  "DS",
  "E-Car",
  "Eagle",
  "Eagle Cars",
  "Ecomotors",
  "Excalibur",
  "FAW",
  "Ferrari",
  "Fiat",
  "Fisker",
  "Ford",
  "Foton",
  "FSO",
  "Fuqi",
  "Geely",
  "Genesis",
  "Geo",
  "GMC",
  "Gonow",
  "Gordon",
  "Great Wall",
  "Hafei",
  "Haima",
  "Hanomag",
  "Haval",
  "Hawtai",
  "Hindustan",
  "Hispano-Suiza",
  "Holden",
  "Honda",
  "HuangHai",
  "Hudson",
  "Hummer",
  "Hyundai",
  "Infiniti",
  "Innocenti",
  "Invicta",
  "Iran Khodro",
  "Isdera",
  "Isuzu",
  "JAC",
  "Jaguar",
  "Jeep",
  "Jensen",
  "JMC",
  "Kia",
  "Koenigsegg",
  "KTM AG",
  " LADA (ВАЗ)",
  "Lamborghini",
  "Lancia",
  "Land Rover",
  "Landwind",
  "Lexus",
  "Liebao Motor",
  "Lifan",
  "Lincoln",
  "Lotus",
  "LTI",
  "Luxgen",
  "Mahindra",
  "Marcos",
  "Marlin",
  "Marussia",
  "Maruti",
  "Maserati",
  "Maybach",
  "Mazda",
  "McLare1",
  "Mega",
  "Mercedes-Benz",
  "Mercury",
  "Metrocab",
  "MG",
  "Microcar",
  "Minelli",
  "MINI",
  "Mitsubishi",
  "Mitsuoka",
  "Morgan",
  "Morris",
  "Nissan",
  "Noble",
  "Oldsmobile",
  "Opel",
  "Osca",
  "Packard",
  "Pagani",
  "Panoz",
  "Perodua",
  "Peugeot",
  "PGO",
  "Piaggio",
  "Plymouth",
  "Pontiac",
  "Porsche",
  "Premier",
  "Proton",
  "PUCH",
  "Puma",
  "Qoros",
  "Qvale",
  "Ravon",
  "Reliant",
  "Renaissance",
  "Renault",
  "Renault Samsung",
  "Rezvani",
  "Rimac",
  "Rolls-Royce",
  "Ronart",
  "Rover",
  "Saab",
  "Saleen",
  "Santana",
  "Saturn",
  "Scion",
  "SEAT",
  "Shanghai Maple",
  "ShuangHuan",
  "Skoda",
  "Smart",
  "Soueast",
  "Spectre",
  "Spyker",
  "SsangYong",
  "Steyr",
  "Subaru",
  "Suzuki",
  "Talbot",
  "TATA",
  "Tatra",
  "Tazzari",
  "Tesla",
  "Think",
  "Tianma",
  "Tianye",
  "Tofas",
  "Toyota",
  "Trabant",
  "Tramontana",
  "Triumph",
  "TVR",
  "Ultima",
  "Vauxhall",
  "Vector",
  "Venturi",
  "Volkswagen",
  "Volvo",
  "Vortex",
  "W Motors",
  "Wanderer",
  "Wartburg",
  "Westfield",
  "Wiesmann",
  "Willys",
  "Xin Kai",
  "Zastava",
  "Zenos",
  "Zenvo",
  "Zibar",
  "Zotye",
  "ZX",
];
