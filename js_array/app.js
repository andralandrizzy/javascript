const employee = [
	{ first_name: 'Andral', last_name: 'Orelus', age: 25, hair_color: 'Black', net_worth: 950000, gender: 'male' },
	{ first_name: 'John', last_name: 'Doe', age: 20, hair_color: 'Brown', net_worth: 3000, gender: 'male' },
	{ first_name: 'Mary', last_name: 'Rodgers', age: 26, hair_color: 'Black', net_worth: 550000, gender: 'female' },
	{ first_name: 'Joseph', last_name: 'More', age: 18, hair_color: 'Blonde', net_worth: 9000, gender: 'male' },
	{ first_name: 'Jane', last_name: 'De la Cruz', age: 17, hair_color: 'Brown', net_worth: 4000, gender: 'female' },
	{ first_name: 'Marc', last_name: 'Sacoon', age: 40, hair_color: 'Black', net_worth: 420000, gender: 'male' },
	{ first_name: 'Williams', last_name: 'Casie', age: 31, hair_color: 'Brown', net_worth: 40300, gender: 'male' },
	{ first_name: 'Stephanie', last_name: 'Laroch', age: 25, hair_color: 'red', net_worth: 19700, gender: 'female' }
];

const ages = [ 2, 15, 70, 25, 36, 45, 10, 15, 23, 17, 9 ];
/*
(FOR LOOP)
//Basic for loop
for (let i = 0; i < employee.length; i++) {
	console.log(employee[i]);
}
*/

/*
(FOR EACH)
for each loop.
employee.forEach(function(emp) {
	console.log(emp);
});

// Display only the first and last name using forEach
employee.forEach(function(emp) {
	console.log(`${emp.first_name} ${emp.last_name} is a ${emp.age} years old ${emp.gender} with ${emp.hair_color} color hair 
	and has a networth of $${emp.net_worth} saving.`);
});
*/

/*
(FILTER)
// Filter from the array
let allowToDrink = [];
for (let i = 0; i < ages.length; i++) {
	if (ages[i] >= 21) {
		allowToDrink.push(ages[i]);
	}
}
console.log(allowToDrink);

//Different way of doing the same thing using keyword filter
//Much cleaner way of doing things.
const iCanDrink = ages.filter(function(age) {
	if (age >= 21) {
		return age;
	}
});
console.log(iCanDrink);

// We can do the same thing using ES6 function.
// write less code.
const letMeDrink = ages.filter((ages) => ages >= 21);
console.log(letMeDrink);
*/

/*
// Filter Employees networth.
const employeeNetworth = employee.filter(function(emp) {
	if (emp.net_worth <= 100000) {
		return true;
	}
});
console.log(employeeNetworth);

// ES6 code style
const empNet = employee.filter((emp) => emp.net_worth >= 100000);
console.log(empNet);

// Filter all the employees age
const employeeAge = employee.filter(function(empAge) {
	if (empAge.age <= 30) {
		return true;
	}
});
console.log(employeeAge);

// ES6 filter age
const employeeAges = employee.filter((empAges) => empAges.age <= 21);
console.log(employeeAges);
*/

/*
// (MAP)
// Create an array of employee names.
// display the first and last name.
const empName = employee.map(function(eName) {
	return eName.first_name + ' ' + eName.last_name;
});
console.log(empName);

// Map square root for ages (ES5 Version)
const sqrtAges = ages.map(function(age) {
	return Math.sqrt(age);
});
console.log(sqrtAges);

// (ES6 Version) Map ages square root
const sqrtMyAges = ages.map((age) => Math.sqrt(age));
console.log(sqrtMyAges);
*/

/*
// (SORT)
// Sort the employees age (ES5 version)
const empAgeSorted = employee.sort(function(a, b) {
	if (a.age > b.age) {
		return 1;
	} else {
		return -1;
	}
});
console.log(empAgeSorted);

// Sort the employees age (ES6 version)
const empAge = employee.sort((a, b) => (a.age > b.age ? 1 : -1));
console.log(empAge);

// Sort the employees networth (ES5 version)
const empNetworth = employee.sort(function(a, b) {
	if (a.net_worth > b.net_worth) {
		return 1;
	} else {
		return -1;
	}
});
console.log(empNetworth);

// Sort the employees networth (ES6 version)
const net = employee.sort((a, b) => (a.net_worth > b.net_worth ? 1 : -1));
console.log(net);

/////// AGES ARRAY //////////
// Ages arrays sorted using (ES5 Version)
const sortAges = ages.sort(function(a, b) {
	return a - b;
});
console.log(sortAges);

// Ages arrays sorted using (ES6 Version)
const mySortedAges = ages.sort((a, b) => a - b);
console.log(mySortedAges);
*/

/*
//REDUCE
// sample for loop that added the sum of ages
let agesum = 0;
for (let i = 0; i < ages.length; i++) {
	agesum += ages[i];
}
console.log(agesum);

// using reduce to add the sum of ages (ES5 Version)
const ageReduceSum = ages.reduce(function(total, age) {
	return total + age;
}, 0);
console.log(ageReduceSum);

// using reduce to add the sum of ages (ES6 Version)
const myAgeSum = ages.reduce((total, age) => total + age, 0);
console.log(myAgeSum);

// using reduce to get the total age for all employess (ES5 Version)
const allEmpTotal = employee.reduce(function(total, emp) {
	return total + emp.age;
}, 0);
console.log(allEmpTotal);

// using reduce to get the total age for all employess (ES6 Version)
const anotherEmpAges = employee.reduce((total, empAge) => total + empAge.age, 0);
console.log(anotherEmpAges);
*/
