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

console.log(peakIndexInMountainArray([0,2,1,0]))