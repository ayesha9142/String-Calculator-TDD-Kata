export function add(numbers) {
  if (!numbers) return 0;

  let delimiters = /[\n,]/;

  if (numbers.startsWith("//")) {
    const newArray = numbers.split("\n");
    delimiters = new RegExp(newArray[0].slice(2));
    numbers = newArray[1];
  }

  const numArray = numbers.split(delimiters).map(Number);

  checkNegativeNumbers(numArray);

  return sumNumbers(numArray);
}

function sumNumbers(numArray) {
  return numArray.reduce((sum, num) => sum + num, 0);
}

function checkNegativeNumbers(numArray) {
  const negativeNumbers = numArray.filter((num) => num < 0);
  if (negativeNumbers.length) {
    throw new Error(
      `Negative numbers not allowed ${negativeNumbers.join(",")}`
    );
  }
}
