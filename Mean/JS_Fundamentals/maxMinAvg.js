function maxMinAvg(arr){
    var min = arr[0];
    var max = arr[0];
    var avg = 0;
    for(var i=0;i<arr.length;i++){
        if(min > arr[i]){
            min = arr[i];
        }
        if(max < arr[i]){
            max = arr[i];
        }
        avg += arr[i];
    }
    avg /= arr.length;
    return `The minimum is ${min}, the maximum is ${max}, and the average is ${avg}.`
}
maxMinAvg([1, -2, 9, 4]);