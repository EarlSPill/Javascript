// Values and Variables

const country = 'Philippines';
const continent = 'Asia';
let population = 115600000

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
language = 'Tagalog';

// Basic Operators
console.log(population /2);

population++

console.log(population);
console.log(population > 6000000);
console.log(population < 33000000);

let description = country + ' is in ' + continent + ', and its ' +
                    population + ' million people speak ' + language + '.';

console.log(description);

// Strings and Template Literals
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);