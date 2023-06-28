var defangIPaddr = function (address) {
let newStr = address.replace(/\./g, '[.]');
return newStr;
};

console.log(defangIPaddr("112.48.12.32"));

// input -> 112.48.12.32
// output -> 112[.]48[.]12[.]32