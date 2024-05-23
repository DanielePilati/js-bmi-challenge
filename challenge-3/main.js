"use strict";

// For each of them, create an object with properties for their full name, mass, and height(Mark Miller and John Smith).
//Name these objects as mark and john, and their properties exactly as fullName, mass and height.
let mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
};

let john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
};
// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase),
// and also return it from the method.
function calcBMI(name) {
  let bmi = (name.mass / (name.height * name.height)).toFixed(1);
  return bmi;
}
// Log to the console who has the higher BMI, together with the full name and the respective BMI.
// Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

john.bmi = calcBMI(john);
mark.bmi = calcBMI(mark);
if (john.bmi > mark.bmi) {
  console.log(
    `John Smith's BMI (${john.bmi}) is higher than Mark Miller's (${mark.bmi})!`
  );
} else if (john.bmi < mark.bmi) {
  console.log(
    `Mark Miller's BMI (${john.bmi}) is higher than John Smith's (${mark.bmi})!`
  );
} else {
  console.log(
    `Mark Miller's BMI (${john.bmi}) is the same than John Smith's (${mark.bmi})!`
  );
}
// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
