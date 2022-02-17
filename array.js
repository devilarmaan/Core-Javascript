"use strict";

// literal way of declaring a array
var arr = [1, 2, 3, 4, 5];
arr[5] = 6;
arr[10] = 11;
console.log(arr[3]);
console.log([4]);
console.log(arr);
console.log(arr[5]);
console.log(arr);
console.log(arr[7]);
console.log(arr.length);
arr[2] = 33;
console.log(arr);

// constructor way of declaring a Array
var arr2 = Array(1, 3, 40, 50);
arr2[2] = 490;
console.log(arr2);

// Array traversing
var traverse = [3, 5, 66, 88, 10];
// in one case
traverse[0];
traverse[1];
traverse[2]; /// and so and so forth
console.log(traverse.length);
console.log(traverse[traverse.length - 1]);
console.log(traverse);

// traverse via a looping
for (var i = 0; i < traverse.length; i++) {
    //console.log(traverse[i]);
    traverse[i] = traverse[i]+2;
}
console.log(traverse, "HI all");

// sum of all index in array
var sum = 0;
// for (var i = 0; i < traverse.length; i++) {
//   sum += traverse[i];
// }

// console.log(sum);

// find the all event number from the array.
for (var i = 0; i < traverse.length; i++) {
  if (traverse[i] % 2 == 0) {
      sum+= traverse[i];
      console.log(traverse[i]);
    //   console.log(sum)
  }
}
console.log(sum)

// insert and remove element
var insert = [1, 2, 3, 4, 5, 6, 7, 8]
// insert 9 to index 3
// insert[3] = 9;
// console.log(insert)

// insert 9 to at last index of full array,because of push function
// insert.push(9)
// console.log(insert)

// insert 9 to at first index of full array,because of unshift function
// insert.unshift(9);
// console.log(insert);

// add remove and delete from a array
insert.splice(3, 0, 9);
console.log(insert);
// remove a last element
insert.pop();
console.log(insert)

// remove a first element of array 
insert.shift();


// search data
var search = [12, 11, 10, 54, 11, 13, 6, 0, 6];
var find = 100;
var isFound = false;
for(var i = 0; i<search.length; i++){
    if(search[i] === find){
      console.log('Data Found at index ', i);
      isFound= true;
      break;
    
    }
}
if(!isFound){
  console.log('Data not found!')
}
