function peakIndexInMountainArray(arr: number[]) {
    let left = 0 
    let right = arr.length - 1
    while(left<right){
    if(arr[left] > arr[left + 1]) return left
    if(arr[right] > arr[right - 1]) return right - 1
    left ++
    right ++

    }
};

//trovata su leetcode, o avevo risolto come un twoPointer, ma in quel cosa la soluzione non è log(N)

// function peakIndexInMountainArray(arr: number[]): number {
//     let start = 0,
//         end = arr.length - 1,
//         mid = 0;

//     while (start < end) {
//         mid = Math.floor(start + (end - start) / 2);
//         if (arr[mid] < arr[mid + 1]) {
//             start = mid + 1;
//         } else {
//             end = mid;
//         }
//     }

//     return start;
// }

console.log(peakIndexInMountainArray([0,2,1,0]))