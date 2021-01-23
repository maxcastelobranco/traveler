const fs = require("fs");

const faker = require("faker");

const { architectureImages } = require("./data/architectureImages");
const { touristSpots } = require("./data/touristSpots");
const { foodAndDrinks } = require("./data/foodAndDrinks");
const { organizedEvents } = require("./data/organizedEvents");

const shuffleStuff = () => {
  faker.helpers.shuffle(touristSpots);
  faker.helpers.shuffle(foodAndDrinks);
  faker.helpers.shuffle(organizedEvents);
};

const NUMBER_OF_CITIES = 100;
const CATEGORIES = ["Tourist Spots", "Food and Drinks", "Organized Events"];

const cityIds = [];
const data = { cities: [], locations: [] };

for (let i = 0; i < NUMBER_OF_CITIES; i++) {
  cityIds.push(faker.random.uuid());
}

for (let i = 0; i < NUMBER_OF_CITIES; i++) {
  for (let l = 0; l < faker.random.number({ min: 50, max: 130 }); l++) {
    shuffleStuff();
    const category = CATEGORIES[faker.random.number({ min: 0, max: CATEGORIES.length - 1 })];

    data.locations.push({
      id: faker.random.uuid(),
      cityId:
        cityIds[
          faker.random.number({
            min: 0,
            max: NUMBER_OF_CITIES - 1,
          })
        ],
      name: faker.address.streetName(),
      description: faker.lorem.sentences(faker.random.number({ min: 1, max: 3 })),
      category,
      rating: faker.random.float({
        min: 1,
        max: 5,
      }),
      image:
        category === "Tourist Spots"
          ? touristSpots[i]
          : category === "Food and Drinks"
          ? foodAndDrinks[i]
          : organizedEvents[i],
    });
  }
}

for (let i = 0; i < NUMBER_OF_CITIES; i++) {
  const id = cityIds[i];
  let numberOfLocations = 0;

  for (let l = 0; l < data.locations.length; l++) {
    if (data.locations[l].cityId === id) {
      numberOfLocations++;
    }
  }

  data.cities.push({
    id,
    name: faker.address.city(),
    description: faker.lorem.sentences(faker.random.number({ min: 3, max: 6 })),
    image: architectureImages[i],
    numberOfLocations,
  });
}

fs.writeFile(
  "cities.json",
  JSON.stringify(data.cities.map(({ name }) => name).sort()),
  console.error
);
fs.writeFile("db.json", JSON.stringify(data), console.error);
