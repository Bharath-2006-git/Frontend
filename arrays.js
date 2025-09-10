// let numbers=[1,2,3,4,5];
// console.log(numbers);

// numbers.push(6,7);
// console.log(numbers);

// numbers.unshift('a','b');
// console.log(numbers);

// numbers.splice(4,0,'c','d');
// console.log(numbers);

// console.log(numbers.indexOf(4));
// console.log(numbers.lastIndexOf(2));
// console.log(numbers.includes(2));
// console.log(numbers.includes(7));

// let del = numbers.pop();
// console.log(del);

// let beg = numbers.shift();
// console.log(beg);

// numbers.splice(2,2);
// console.log(numbers);

// numbers=[];
// console.log(numbers);

// numbers.length=0;
// console.log(numbers);

// let arr1=[1,2,3,4];
// console.log(arr1);
// let arr2=[5,6,7];
// console.log(arr2);
// let combined = arr1.concat(arr2);
// console.log(combined);

// let slice = combined.slice(2,4);
// console.log(slice);

// let num = [2,3,1];
// console.log(num);

// num.sort();
// console.log(num);

// num.reverse();
// console.log(num);

let array1 = [5,8,6,4,-2,-9,-1,10];
let array2 = [15,22,6,44,-25,-9,-1,10];
let common = array1.filter(function(num) {
  return array2.includes(num);
});
console.log(common);