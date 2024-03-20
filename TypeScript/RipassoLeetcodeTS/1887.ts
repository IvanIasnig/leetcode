// function reductionOperations(nums: number[]): number {

//     const x = nums.sort(function(a, b) {
//         return a - b;
//       }).reverse()
//     let res = 0;

//     for(let i = 0; i<x.length; i++){
//         if(x[i+1] && x[i+1] !== x[i]){
//             res = res + i + 1

//         }
//     }
//     return res
// };

//soluzione leggermente più performante
function reductionOperations(nums: number[]):number {

    const x = nums.sort(function(a, b) {
        return a - b;
      })
    let res = 0;

    for(let i = x.length - 1; i>=0; i--){

        if(x[i+1] && x[i+1] !== x[i]){
            res = res + (x.length - i) - 1

        }
    }
    return res
};


console.log(reductionOperations([1,2,2,3,3,3,3,4,5]))