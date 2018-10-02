function bubbleSort(arr){
    var moves = 0;
    for(var i=0; i<arr.length-1;i++){
        console.log(arr);
        if(arr[i] >= arr[i+1]){
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            moves++;
            console.log(arr);
            console.log(moves, "moves");
        }
        if(i == arr.length-2 && moves == 0){
            console.log(arr);
            console.log(moves, "moves");
            return arr;
        }
    }
    bubbleSort(arr);
}

bubbleSort([5,3,1,6,7,2,4,8,15,13,12,14,11,9,10]);