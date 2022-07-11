//Q1 Store Mark's and John's mass and height in variables.
const markHeight = 178;
const markMass = 76.5;
const johnHeight = 191;
const johnMass = 88;

//Q2 Calculate both their BMIs and store their BMIs in variables.
const markBmi = Math.exp(markMass / markHeight);
const johnBmi = Math.exp(johnMass / johnHeight);
// console.log(markBmi, johnBmi);

//Q3 Create a boolean variable containing information about whether Mark has a higher BMI than John.
const markMoreBeefCake = markBmi > johnBmi;
// console.log(markMoreBeefCake);

//Q4 Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").

console.log(
  `Q4: Is Mark's BMI higher than John's? Why yes, it's ${markMoreBeefCake}, it is`
);

//Q5 Create an *if* statement which prints the name and BMI of the person with the highest BMI.

if (markMoreBeefCake === true) {
  console.log("Q5: ", "Mark", markBmi.toFixed(2));
} else {
  console.log("Q5: ", "John", johnBmi.toFixed(2));
}
