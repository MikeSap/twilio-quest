const argumentValue = process.argv[2];

if (parseInt(argumentValue) % 3 === 0 && parseInt(argumentValue) % 5 === 0) {
  console.log("JavaScript");
} else if (parseInt(argumentValue) % 3 === 0) {
  console.log("Java");
} else if (parseInt(argumentValue) % 5 === 0) {
  console.log("Script");
} else {
  console.log(argumentValue);
}
