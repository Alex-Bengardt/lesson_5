let str = "luke, I am your father";
console.log(str[0].toUpperCase() + str.slice(1));

let str1 = "AbcdEfg";
let str2 = "abCDEFg";
console.log(str1.localeCompare(str2));
console.log(str1.toUpperCase().localeCompare(str2.toUpperCase()));

let years = [2000, 2001, 2002, 2003, 2004, 2005];
for (let year of years) {
	if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
		console.log(year);
	}
}

let numbers = [6, 187, 66, 4, 67, 30, 18];
console.log(numbers.sort());
console.log(numbers.reverse());