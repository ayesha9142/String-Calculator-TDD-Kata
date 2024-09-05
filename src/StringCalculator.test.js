import { add } from "./StringCalculator";

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number itself when one number is provided", () => {
  expect(add("1")).toBe(1);
});

test("returns the sum of two numbers", () => {
  expect(add("1,5")).toBe(6);
});

test("handles new lines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("Support different delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("throw an exception for negative numbers", () => {
  expect(() => add("1,-2,-3")).toThrow("Negative numbers not allowed -2,-3");
});
