var fib = function (n) {
  if (n === 1 || n === 0) {
    return n;
  }

  return fib(n - 2) + fib(n - 1);
};

console.log(fib(9));

//soluzionme carina ->

// var fib = function (n) {
//   return n <= 1 ? n : fib(n - 2) + fib(n - 1);
// };
