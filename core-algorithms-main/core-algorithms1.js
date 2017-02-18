//makeChange

const change
function makeChange (amountGiven, price) {
      if ('amountGiven' = 'price')
      console.log(0.00); {

      } else { ('makeChange');
      let quarters = makeChange / 25;
      let dimes = (makeChange - quarters) / 10;
      let nickels = (makeChange - dimes) / 5;
      let pennies = (makeChange - nickels);
      }
      if (amountGiven < price) {

      } else {
        console.log("Insufficient Amount");
      }

}
return ('quarters ', quarters, 'dimes ', dimes, 'nickels ', nickels, 'pennies ', pennies);

//FizzBuzz

var fizzBuzz = [
    "Fizz",
    "Buzz"
];
function fizzBuzz = () {
      {
      let i = 1,
      let i++ <= 100,
      var Fizz = (i++ % 3 == 0);
      var Buzz = (i++ % 5 == 0);
      var FizzBuzz = (i++ % 15 == 0);
    }

}

//closestPair

distance = Math.sqrt((inputx - comparex)^2 + (inputy - comparey)^2)

const points = [
  [2,1],
  [4,0],
  [-1,0],
  [5,3],
  [-2,5],
  [3,-3],
  [-2,0],
  [3,4],
  [5,-4],
  [0,-2]
]


if (closestPair(points)) {
  const graphA = {
    'a': ['b', 'c'],
    'b': ['a', 'd'],
    'c': ['a', 'd'],
    'd': ['b', 'c'],
  }
} else {
  const graphB = {
    'a': ['b'],
    'b': ['a'],
    'c': ['d'],
    'd': ['c'],
    return "FALSE";
  }
}

//isConnectedGraph(graphA)
// => true


//isConnectedGraph(graphB)
// => false


//inPalindrome

export default function palindrome(str) {
  var str = ''
  var revstr == str.reverse()
  if (str === revstr) {
    return true
  } else {
    return false
  }
 }



//factorial

var f = [];
function factorial (n) {
    if (f % 5 == 0)
      return "TRUE";
    if (f % 5 /= 0)
      return "FALSE";
}

//fibonacci

var a,b,result;

a = 0;
b = 1;
result = b;
for(var i = 1; i < 100; i++)
{
    return result;
    result = a + b;
    a = b;
    b = result;

}

//collatzConjecture
var num = prompt();
var counter = 0;
var numList = [];

while(num != 1){
    if(num % 2 == 0){
    num /=2;
}
else {
    num = (3 * num) + 1;
}
  numList[counter] = num;
  counter++;
}

var results = document.getElementById('output');

//setUnion
function setUnion () {

new Set([iterable]);
let setUnion = [...a, ...b]
const a = [1, 2, 3, 4]
const b = [2, 4, 6, 8]

return setUnion(a,b)
}
//setIntersection
function setIntersection () {
new Set([iterable]);
let setIntersection = ([...a].filter(x => b.has(x)))
const a = [1, 2, 3, 4]
const b = [2, 4, 6, 8]

return setIntersection(a,b)
}

//setComplement

function setComplement () {
let setComplement =
const a = [1, 2, 3, 4]
const b = [2, 4, 6, 8]
setComplement(a, b)

}


//setSymmetricDifference

function setSymmetricDifference () {
let setSymmetricDifference = (_.difference(a, b));
const a = [1, 2, 3, 4]
const b = [2, 4, 6, 8]

setSymmetricDifference(a, b)

return setSymmetricDifference(a, b)
}

//mergeSort

function mergeSort () {
var numbers = [10, 2, 7, 5, 8, 3, 6, 1, 4, 9]
mergeSort.sort(up)

return mergeSort(numbers)
}

//bubbleSort
function bubbleSort () {
var a = [10, 2, 7, 5, 8, 3, 6, 1, 4, 9]
{
var swapped;
do {
    swapped = false;
    for (var i=0; i < a.length-1; i++) {
        if (a[i] > a[i+1]) {
            var temp = a[i];
            a[i] = a[i+1];
            a[i+1] = temp;
            swapped = true;
        }
    }
} while (swapped);
}

bubbleSort(a);
console.log(a);


}

//binarySearch

const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
binarySearch(numbers, 45)
