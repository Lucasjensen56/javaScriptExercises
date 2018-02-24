
'use strict';

const name = 'Josh';
let happy = true;
let age = 33;
const hairColor = 'red';
const test = 1/0;

// const joshArray = [name, happy, age, hairColor];

const josh = [name, happy, age, hairColor, ['kids', 'dogs', 4]];


if (josh[1]===true) {
    console.log(Array.isArray(josh), josh[4][0]);

}




// console.log(Array.isArray(joshArray), joshArray[4][0]);

// console.log(typeof joshArray, joshArray);


//  console.log(Array.isArray(joshArray), joshArray[2][1]);


// // console.log(typeof sentence, sentence);
// // console.log(typeof happy, happy);
// // happy = false;
// // console.log(typeof happy, happy);
// // console.log(typeof age, age);
// console.log(typeof hairColor, hairColor)