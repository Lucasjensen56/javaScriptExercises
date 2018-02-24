
'use strict';


const josh = {
    name: 'Josh', 
    age: 33,
    happy: true,
    hairColor: 'red',
}

const peter = {
    name: 'Peter',
    age: 27,
    happy: true,
    hairColor: 'brown',
}



const studentArray = [josh, peter];





// console.log(studentArray);

// only showing the name property /dollar sign curly braces is how you insert a variable 
for (let i = 0; i < studentArray.length; i++) {
    console.log(`Hello, ${studentArray[i].name}`);
}



















// const name = 'Josh';
// let happy = true;
// let age = 33;
// const hairColor = 'red';
// const test = 1/0;

// // const joshArray = [name, happy, age, hairColor];

// const josh = [name, happy, age, hairColor, ['kids', 'dogs', 4]];


// if (josh[1]===true) {
//     console.log(Array.isArray(josh), josh[4][0]);
// }



// for (let i =0; i < josh.length; i++) {
//     console.log(josh[i]);
// }










// console.log(Array.isArray(joshArray), joshArray[4][0]);

// console.log(typeof joshArray, joshArray);


//  console.log(Array.isArray(joshArray), joshArray[2][1]);


// // console.log(typeof sentence, sentence);
// // console.log(typeof happy, happy);
// // happy = false;
// // console.log(typeof happy, happy);
// // console.log(typeof age, age);
// console.log(typeof hairColor, hairColor)