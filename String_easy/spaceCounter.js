var mostWordsFound = function (sentences) {
  ris = 0;
  for (i = 0; i < sentences.length; i++) {
    num = 0;
    let str = sentences[i];
    for (k = 0; k < str.length; k++) {
      if (str[k] === " ") {
        num++;
      }
      if (num > ris) {
        ris = num;
      }
    }
  }
  return ris + 1;
};

console.log(
  mostWordsFound(
    (sentences = [
      "i think so too",
      "this is great thanks very much",
      "alice and bob love leetcode",
    ])
  )
);
