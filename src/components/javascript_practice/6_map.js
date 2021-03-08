const instructors = [
  {name: 'Quincy', specialty: 'Quantam Mechanics'},
  {name: 'Kenn', specialty: 'Norse Mythology'},
  {name: 'Carolyn', specialty: 'Kung Fu'},
  {name: 'Paul', specialty: 'Entomology'},
];

// Let's say that we want to iterate over this array and print just the names of the instructors. We'll use a forEach() method:

let instructor_names = [];

instructors.forEach(instructor => {
    instructor_names.push(instructor.name);
});

console.log(instructor_names); 

const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);

// Exact same thing, different parameter name
const instructorNamesTwo = instructors.map(i => i.name);
console.log(instructorNamesTwo);


// // NOTE: The .map() function requires a return value. This is a key rule of using .map(), so the fat arrow is taking care of that requirement.
// // Get some practice. Try the following. Fix the code:
// const instructorInfo = `${instructors.map(i => ${i.name}: ${i.specialty})}`;
// console.log(instructorInfo);

// .map() and React
// As stated, you'll see .map() everywhere. We recently had a student be asked to do this for a job interview. The question (Links to an external site.) came straight from the MDN docs and was based on this code. Study up!!!

// Notice that the below starts with an array of awkward objects, with keys and values separated. The returned 'rObj' is a correctly formatted {key: value} style object for each object in the original array. Console.log both the kvArray and the returned rObj objects to see what's going on. This can teach you a lot.


let kvArray = [
  {key: 1, value: 10},
  {key: 2, value: 20},
  {key: 3, value: 30}
];
console.log(kvArray);

let reformattedArray = kvArray.map(obj => {
  let rObj = {};
  rObj[obj.key] = obj.value;
  console.log(rObj);
});