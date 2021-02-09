const argumentValue1 = process.argv[2];
const argumentValue2 = process.argv[3];

if (argumentValue1.toLowerCase() < argumentValue2.toLowerCase()) {
  console.log("-1");
} else if (argumentValue1.toLowerCase() > argumentValue2.toLowerCase()) {
  console.log("1");
} else if (argumentValue1.toLowerCase() === argumentValue2.toLowerCase()) {
  console.log("0");
}
