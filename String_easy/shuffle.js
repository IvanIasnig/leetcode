var restoreString = function (s, indices) {
  let ris = [];
  let arrStr = s.split("");
  for (i = 0; i < s.length; i++) {
    for (k = 0; k < s.length; k++) {
      if (i === indices[k]) {
        ris[i] = arrStr[k];
      }
    }
  }
  return ris.toString().replaceAll(",", "");
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
