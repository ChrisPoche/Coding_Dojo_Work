function bracesValid(str){
    if(str[0] == ")" || str[0] == "]" || str[0] == "}"){
        return false;
    }
    var tracker = [str[0]];
    for(var i=1;i<str.length;i++){
        if(str[i] == "(" || str[i] == "[" || str[i] == "{"){
            tracker.push(str[i]);
        }
        else if(str[i] == ")" || str[i] == "]" || str[i] == "}"){
            if((str[i] == ")" && tracker[tracker.length-1] != "(") || (str[i] == "]" && tracker[tracker.length-1] != "[") || (str[i] == "}" && tracker[tracker.length-1] != "{")){
                return false;
            }
            for(var j=0; j<tracker.length;j++){
                if((str[i] == ")" && tracker[j] == "(") || (str[i] == "]" && tracker[j] == "[") || (str[i] == "}" && tracker[j] == "{")){
                    shiftArr(tracker, j);
                }
            }
        }
        
    }
    return true;
}
bracesValid("{{()}}[]");


function shiftArr(arr, n){
    for(var i=n;i<arr.length-1;i++){
        arr[i] = arr[i+1];
    }
    arr.pop();
    return arr;
}