Array.prototype.last = function () {
  for (i = 0; i <= this.length; i++){
    if (this.length === 0) {
      return -1;
    }
    else if (this.length === i) {
      return this[this.length - 1]
    }
  }
};

const arr = [1,2,5];
console.log(arr.last());

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
