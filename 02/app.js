console.log('app');
 


// Create
var todos = ['운동']
var todo = '게임';
todos.push(todo);
console.log(todos);

// Read

todos.forEach(function(todo){
    console.log(todo);
});

var arr = [1,2];
arr[1] = 3;
// arr = 1, 3

//Update
/*
var todos = ['운동', '게임'];
var updateTodo = '게임';
var updateIndex = todos.findIndex(function(todo) {
  return todo === updateTodo;
});
todos[updateIndex] = '공부';
console.log(todos);

*/

//Delete
/*
var todos = ['운동', '공부', '목욕'];
var deleteTodo = '공부';
var deleteIndex = todos.findIndex(function(todo) {
  return todo === deleteTodo;
});
todos.splice(deleteIndex, 1);
console.log(todos);
*/
/*
var isMan = false;
if(isMan) {
    console.log('1');
}
else if(!isMan && isHero){

}

else {
    console.log('2');
}
*/

// var gender = isMan ? "남자" : "여자"
// console.log(gender);

// window.alert("안녕하세요");
// var who = prompt("당신은 누구세요?");
// var isDelete = confirm("정말로 삭제하시겠습니까?");

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(1, 2));

// var car = {
//     year: 2014,
//     starting: function() {
//         console.log("starting!!!");
//     },
// };

// car.starting();

// (function() {
//     var a = "a";
//     console.log(a);
// })();

/*function sum(x, y) {
    if (!y) y = 1;
    return x + y;
}

console.log(sum(3));*/

/*
function average(array){
  let result = 0;
  for(let item of array){
    result += item;
  }
  return result/array.length;
}

var count = [10,20,30,40,50,60,70,100];
console.log("평균값 : " + average(count));*/

for(i=2; i<10; i++){
    for(j=1; j<10; j++){
        console.log(i + '*' + j + '=' + (i*j));
    }
    console.log('\n');
}
