var divisorSubstrings = function(num, k) {

    let numArray =  num.toString().split("")
    let k_interval = "";
    let ris = 0;

    for (i = 0; i < numArray.length; i++) {
      k_interval = k_interval + numArray[i]
      if (i >= k - 1) {
        if (num % parseInt(k_interval) === 0){ris++}
        k_interval = k_interval.slice(1);
      }

    }
    
    return ris;
  };
  
  console.log(divisorSubstrings(430043 , 2))