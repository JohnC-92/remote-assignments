// Assignment 5

function binarySearchPosition(numbers, target){
    var low = 0;
    var high = numbers.length - 1;
    while (low <= high) {
        mid = Math.round((low+high)/2);
        if (numbers[mid] > target) {
            high = mid - 1; 
        } else if (numbers[mid] < target) {
            low = mid;
        } else {
            return mid;
        }
    }
}

console.log( binarySearchPosition([1, 2, 5, 6, 7], 1) ); // should print 0
console.log( binarySearchPosition([1, 2, 5, 6, 7], 6) ); // should print 3