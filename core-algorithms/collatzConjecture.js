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
