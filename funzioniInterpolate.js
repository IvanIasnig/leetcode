/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  let f = functions.reverse();
  return function (x) {
    for (let i = 0; i < f.length; i++) {
      x = f[i](x);
    }
    return x;
  };
};

const fn = compose([]);

console.log(fn(4));
