var binary = (arr, val) => {
  let lower = 0;
  let upper = arr.length - 1;

  while (lower <= upper) {
    console.log("try")
    const middle = lower + Math.floor((upper - lower) / 2);

    if (val === arr[middle]) {
      return middle;
    }

    if (val < arr[middle]) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  }
  return "nessun numero trovato";
};

console.log(binary([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
