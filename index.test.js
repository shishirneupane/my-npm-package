const { helloNpm, filterItem } = require("./index");

test("Returns hello NPM", () => {
  expect(helloNpm()).toBe("hello NPM");
});

test("Filters selected item from array", () => {
  expect(filterItem([1, 2, 3], 2)).toStrictEqual([1, 3]);
});
