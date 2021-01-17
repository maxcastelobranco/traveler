const fs = require("fs");

const faker = require("faker");
faker.seed(69);

const { architectureImages } = require("./data/architectureImages");
const { natureImages } = require("./data/natureImages");
const { streetPhotography } = require("./data/streetPhotography");

const NUMBER_OF_CITIES = 100;
const CATEGORIES = ["Tourist Spots", "Foods and Drinks", "Organized Events"];

const cityIds = [];
const data = { cities: [], locations: [] };

for (let i = 0; i < NUMBER_OF_CITIES; i++) {
  cityIds.push(faker.random.uuid());
}

for (let i = 0; i < NUMBER_OF_CITIES; i++) {
  for (let l = 0; l < faker.random.number({ min: 5, max: 15 }); l++) {
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
      category: CATEGORIES[faker.random.number({ min: 0, max: CATEGORIES.length - 1 })],
      rating: faker.random.float({
        min: 1,
        max: 5,
      }),
      image: faker.random.boolean() ? natureImages[i] : streetPhotography[i],
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
    image: architectureImages[i],
    numberOfLocations,
  });
}

fs.writeFile(
  "cities.json",
  JSON.stringify(data.cities.map(({ name }) => name).sort()),
  console.error
);
// fs.writeFile("db.json", JSON.stringify(data), console.error);
