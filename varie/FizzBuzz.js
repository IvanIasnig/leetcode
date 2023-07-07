var fizzBuzz = function (n) {
  let a = [];
  for (i = 1; i < n + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      a[i-1] = "FizzBuzz";
    } else if (i % 5 === 0) {
      a[i-1] = "Buzz";
    } else if (i % 3 === 0) {
      a[i-1] = "Fizz";
    } else {
      a[i-1] = i.toString();
    }
  }
  return a;
};

console.log(fizzBuzz(100));
