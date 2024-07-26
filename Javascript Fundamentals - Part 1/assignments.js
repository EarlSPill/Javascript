// Values and Variables

const country = "Philippines";
const continent = "Asia";
let population = 115600000;

console.log(country);
console.log(continent);
console.log(population);

// Data Types
const isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const, and var
language = "Tagalog";

// Basic Operators
console.log(population / 2);

population++;

console.log(population);
console.log(population > 6000000);
console.log(population < 33000000);

let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language +
  ".";

console.log(description);

// Strings and Template Literals
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// Taking Decisions: if / else Statements
const testPopulation = 33000000;

if (population > testPopulation) {
  console.log(
    `${country} population is ${population - testPopulation} above average.`
  );
} else {
  console.log(
    `${country} population is ${
      testPopulation - population
    } below average average.`
  );
}

// Type Conversion and Coercion
console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> 617
console.log("19" - "13" + 17); // -> 23
console.log("123" < 57); // -> False
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143

// Equality Operators: == vs. ===
const numNeighbors = Number(prompt("How many neighbor countries does your country have?"));

if (numNeighbors === 1) {
  console.log('Only 1 border!')
} else if (numNeighbors > 1) {
  console.log('More than 1 border')
} else {
  console.log('No borders')
}

