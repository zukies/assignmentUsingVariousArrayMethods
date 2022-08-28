"use strict";

const dog = [
  {
    weight: 22,
    curFood: 250,
    owners: ["Alice", "Bob"],
  },
  {
    weight: 8,
    curFood: 200,
    owners: ["Matilda"],
  },
  {
    weight: 13,
    curFood: 275,
    owners: ["Sarah", "John"],
  },
  {
    weight: 32,
    curFood: 340,
    owners: ["Michael"],
  },
];

// ARRAYS//
const ownerArray = [];
const sortedArrays = [];
const arrCurFood = [];
const dogsEatExact = [];

// #1
// ADDING THE EXTRA RECOMMENDED FOOD PROPERTY//

dog.forEach(function (el) {
  el.recFood = Math.trunc(el.weight ** 0.75 * 28);
});

// #2
//FINDING SARAH'S DOG TO SEE IF THAT DOG IS EATING RIGHT
const sarahDog = dog.find((el) => el.owners.includes("Sarah"));
sarahDog < dog.recFood + dog.recFood * 0.1 &&
sarahDog > dog.recFood - dog.recFood * 0.1
  ? console.log(`Sarah's dog is eating right`)
  : console.log(`Sarah's dog is not eating right`);

// FORMULAE FOR TOO MUCH OR TOO LITTLE FOOD//

// console.log(`${tooLittle}'s dogs are eating too much`);

// #3 OWNERS OF DOGS THAT EAT TOO MUCH

const eatTooMuch = dog
  .filter((el) => el.curFood < el.recFood - el.recFood * 0.1)
  .flatMap((el) => el.owners);
console.log(eatTooMuch);
console.log(`${eatTooMuch.join(" and ")}'s dogs are eating too much`);

// #4
// DOGS THAT EAT TOO LITTLE
const EatTooLittle = dog
  .filter((el) => el.curFood > el.recFood + el.recFood * 0.1)
  .map((el) => el.owners)
  .flat();
console.log(EatTooLittle);
console.log(`${EatTooLittle.join(" and ")}'s dogs are eating too little`);

// #5
// ARRAY OF DOGS EATING THE EXACT AMOUNT OF FOOD
const eatExact = dog.filter((el) => el.curFood === el.recFood);

eatExact.length === 0 ? console.log(true) : console.log(false);

// #6
// ANY DOGS EATING AN OK AMOUNT OF FOOD, IF TRUE..THEN THIS MEANS THERE ARE DOGS THAT EAT OK
const dogsEatRight = dog
  .filter(
    (el) =>
      el.curFood < el.recFood + el.recFood * 0.1 &&
      el.curFood > el.recFood - el.recFood * 0.1
  )
  .map((el) => el.owners);

// #7
// ARRAY OF DOGS EATING THE RIGHT AMOUNT OF FOOD
console.log(`${dogsEatRight}s dog is eating right`);

if (dogsEatRight.length > 0) {
  console.log(true);
}

//#8 ARRAY SORTED
// const arrCurFood = [];
const copyOfDogsArray = dog.slice().sort((a, b) => a.recFood - b.recFood);
console.log(copyOfDogsArray);

// OR...we can do the following as well...getting same result

copyOfDogsArray.forEach(function (el) {
  arrCurFood.push(el.curFood);
  arrCurFood.sort();
});

arrCurFood.forEach(function (value) {
  copyOfDogsArray.forEach(function (el) {
    if (el.curFood === value) {
      sortedArrays.push(el);
    }
  });
});
console.log(sortedArrays);
