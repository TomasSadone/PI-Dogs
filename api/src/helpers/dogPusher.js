const dogPusher = (arrToMap, dogs) => {
  arrToMap.forEach((dog) => {
    dogs.push(dog);
  });
};

module.exports = dogPusher;
