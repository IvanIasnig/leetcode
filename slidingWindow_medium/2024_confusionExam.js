var maxConsecutiveAnswers = function (answerKey, k) {
  answerKey = answerKey.split("");
  var consecBool = function (TF) {
    let currSum = 0;
    let maxOutput = 0;
    let start = 0;
    let end = 0;
    let f = 0;

    while (end < answerKey.length) {
      currSum++;
      if (answerKey[end] == TF) {
        f++;
      }

      end++;

      if (f > k) {
        currSum--;
        f--;
        while (start < end && answerKey[start] != TF) {
          start++;
          currSum--;
        }
        start++;
      }
      maxOutput = Math.max(currSum, maxOutput);
    }
    return maxOutput;
  };

  return Math.max(consecBool("T"), consecBool("F"));
};

console.log(maxConsecutiveAnswers("FTFFTFTTTFFTT", 2));
console.log(maxConsecutiveAnswers("TFFT", 1));

//sta soluzione fa cagare, ho replicato la stesso while due volte, devo farlo tutto dentro uno
//ho rifatto la stessa porcheria ma in maniera più chiara, ho integrato una funziona innestata che prende TF come parametro per T e F.
//Il risultato di fatto è lo stesso di prima, ma almeno il codice è più coinciso.
// https://leetcode.com/problems/maximize-the-confusion-of-an-exam/description/

/*ChatGPT mi da questa risposta:

var maxConsecutiveAnswers = function (answerKey, k) {
  let maxOutput = 0;
  ['T', 'F'].forEach(TF => {
    let start = 0;
    let end = 0;
    let f = 0;
    while (end < answerKey.length) {
      if (answerKey[end] !== TF) f++;
      end++;
      while (f > k) {
        if (answerKey[start] !== TF) f--;
        start++;
      }
      maxOutput = Math.max(end - start, maxOutput);
    }
  });
  return maxOutput;
};

*/
