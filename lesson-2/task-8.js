
const array = [1, 2, 3, 4];

function array_even_sum (arr)
{
    var sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 3 && arr[i] % 2 === 0){
            sum += arr[i];
        }
    }
    return sum;
}

console.log(array_even_sum(array));
