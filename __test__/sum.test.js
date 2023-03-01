const sum = require('../sum');

test('try out test with 1 + 6 to equal 7', () => {
  expect(sum(1, 6)).toBe(7);
});

test('try out test with 10 + 18 to equal 28', () => {
  expect(sum(10, 18)).toBe(28);
});
