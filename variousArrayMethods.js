"use strict";
// const testData1 = [5, 2, 4, 1, 15, 8, 3];
// const testData2 = [16, 6, 10, 5, 6, 1, 4];

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
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];
const dogsEatRight = [];
const arrayForAllDogsFood = [];
const sortingArray = [];
const ownerArray = [];
const sortedArrays = [];
const recommendedPortion = [];
const twoArrays = [];

const copyOfDogsArray = dog.slice();
dog.forEach(function (el) {
  arrayForAllDogsFood.push(el.curFood);
  ownerArray.push(el.owners);
});

{
  dog.forEach(function (el) {
    arrayForAllDogsFood.push(el.curFood);
  });
}

// ARRAY SORTED
const sortt = arrayForAllDogsFood.sort();

sortt.forEach(function (value) {
  copyOfDogsArray.forEach(function (el) {
    if (el.curFood === value) {
      sortedArrays.push(el);
    }
  });
});

// #8
console.log(sortedArrays);

// #1

// ADDING THE EXTRA RECOMMENDED FOOD PROPERTY//
dog.forEach(function (el) {
  {
    el.recommendedFood = () => (el.weight / 1000) * 0.75 * 28 * 1000;
  }

  // FORMULAE FOR TOO MUCH OR TOO LITTLE FOOD//

  {
    const tooMuchFood =
      el.curFood + (el.recommendedFood() + el.recommendedFood() * 0.9);

    const tooLittleFood =
      el.curFood - (el.recommendedFood() + el.recommendedFood() * 1.1);

    if (el.curFood < tooLittleFood) {
      // #4
      // DOGS THAT EAT TOO LITTLE
      console.log(`${el.owners}'s dog eats too little`);
      ownersEatTooLittle.push(el.owners);
      // #3
      // NAMES OF OWNERS WHO'S DOGS EAT TOO LITTLE
      console.log(ownersEatTooLittle);
    }
    if (el.curFood > tooMuchFood) {
      ownersEatTooLittle.push(el.curFood);

      // #4 DOGS THAT EAT TOO MUCH
      console.log(`${el.owners}'s dog eats too much`);
      ownersEatTooMuch.push(el.owners);
      // #3 NAMES OF OWNERS WHO'S DOGS EAT TOO LITTLE
      console.log(ownersEatTooMuch);
    }

    // #5 THE RANGE (EATING THE RIGHT AMOUNT)
    if (el.curFood < tooMuchFood && el.curFood > tooLittleFood) {
      dogsEatRight.push(el.curFood);
      console.log(`${el.owners}'s dog eats right`);
    }

    // #2
    //FINDING SARAH'S DOG
    {
      if (el.owners.length > 1) {
        const splitter = [];
        splitter.push(el.owners);
        const [spplit] = [...splitter];

        spplit.forEach(function () {
          spplit.find(function (sarahName) {
            if (sarahName === "Sarah") {
              el.curFood < tooMuchFood || el.curFood > tooLittleFood
                ? console.log(`Sarah's dog is eating right`)
                : console.log(`Sarah's dog is not eating right`);
            }
          });
        });
      }
    }
  }
});

// #6
// IF THERE is A DOG THAT EATS THE RIGHT AMOUNT OF FOOD, IF TRUE..THEN THIS MEANS THERE ARE DOGS THAT EAT CORRECTLY
if (dogsEatRight.length > 0) {
  console.log(true);

  // #7
  // ARRAY OF DOGS EATING THE RIGHT AMOUNT OF FOOD
  console.log(dogsEatRight);
}
