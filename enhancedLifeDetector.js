const argumentValue = process.argv[2];

switch (argumentValue) {
  case "0":
    return console.log("alive");
  case "1":
    return console.log("flowering");
  case "2":
    return console.log("shedding");
  default:
    return "other";
}
