/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  ris = [];

  for (i = 0; i < image.length; i++) {
    x = image[i];
    x=x.reverse()
    sinistra = 0;
    destra = x.length - 1;
    while (sinistra <= destra) {
      if (sinistra !== destra) {
        x[sinistra] = !x[sinistra];
        x[destra] = !x[destra];
        sinistra++;
        destra--;
      } else {
        x[sinistra] = !x[sinistra];
        sinistra++;
        destra--;
      }
    }
    ris[i] = x;
  }
  return ris;
};

console.log(
  flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])
);
