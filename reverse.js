function reverse(arr){
    let output = [];
    for (let i = arr.length - 1; i> -1; i--){
        output.push(arr[i]);
    }

    return output;
}

console.log(reverse([1,2,3]));