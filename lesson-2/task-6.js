
const array = [1, 2, 3, 4];
function array_sum (arr)
{
    var sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(array_sum(array));
