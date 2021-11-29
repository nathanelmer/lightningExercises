const printPetPreference = (breed) => {
  if (breed) {
    return `When it comes to pets, my favorite dog breed is ${breed}.`;
  } else {
     return `I like cats.`;
  }
};

const favAnimal = printPetPreference("labradoodle");

console.log(favAnimal);
