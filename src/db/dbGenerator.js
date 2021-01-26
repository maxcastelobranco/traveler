const fs = require("fs");

const faker = require("faker");
faker.seed(69);

const { architectureImages } = require("./data/architectureImages");
const { touristSpots } = require("./data/touristSpots");
const { foodAndDrinks } = require("./data/foodAndDrinks");
const { organizedEvents } = require("./data/organizedEvents");
const { userImages } = require("./data/users");

const shuffleStuff = () => {
  faker.helpers.shuffle(touristSpots);
  faker.helpers.shuffle(foodAndDrinks);
  faker.helpers.shuffle(organizedEvents);
};

const NUMBER_OF_CITIES = 100;
const CATEGORIES = ["Tourist Spots", "Food and Drinks", "Organized Events"];

const cityIds = [];
const data = { cities: [], locations: [], comments: [] };

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
      description: faker.lorem.sentences(faker.random.number({ min: 3, max: 6 })),
      category,
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

for (let l = 0; l < data.locations.length; l++) {
  const numberOfComments = faker.random.number({ min: 5, max: 20 });
  let totalRating = 0;

  for (let c = 0; c < numberOfComments; c++) {
    const rating = faker.random.float({
      min: 1,
      max: 5,
    });

    totalRating += rating;

    faker.helpers.shuffle(userImages);

    data.comments.push({
      id: faker.random.uuid(),
      locationId: data.locations[l].id,
      username: `${faker.name.firstName()} ${faker.name.lastName()}`,
      image: userImages[c],
      comment: faker.lorem.sentences(faker.random.number({ min: 4, max: 8 })),
      rating,
    });
  }

  data.locations[l].rating = Number((totalRating / numberOfComments).toPrecision(3));
}

fs.writeFile(
  "cities.json",
  JSON.stringify(data.cities.map(({ name }) => name).sort()),
  console.error
);
fs.writeFile("db.json", JSON.stringify(data), console.error);
