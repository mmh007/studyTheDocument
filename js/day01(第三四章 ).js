$(function ($) {

  // 变量 （动态的属性）
  console.log('变量 （动态的属性）');

  // 实例1

  var person = new Object();
  person.name = 'Nicholas';
  console.log(person.name) // Nicholas

  // 实例2
  var name = 'Nicholas';
  name.age = 27;
  console.log(name.age); // undefined


// 实例3
  var obj1 = new Object();
  var obj2 = obj1;
  obj1.name = '666666';
  console.log(obj2.name) // 666666

// 实例4
// function addTen (num) {
//   num += 10;
//   return unm;
// }
// var count = 20;
// var result = addTen(count);
// console.log(count);
// console.log(result)

// function setName(obj) {
//   obj.name = 'nann';
// }
// var person = new Object();
// setName(person);
// console.log(person.name)

// 为了证明对象是按值传递
// function setName(obj) {
//   obj.name1 = 'naeeeeeeeeeeeeeeee';
//   obj = new Object();
//   obj.name1 = 'Greg';
// }
// console.log(setName.name1)
// var person = new Object();
// setName(person);
// console/log(person.name1)



// 检测类型
  var a = 'nav';
  var b = true;
  var i = 22;
  var u;
  var n = null;
  var o = new Object();

  console.log(typeof a); // string
  console.log(typeof b); // boolean
  console.log(typeof i); // number
  console.log(typeof u); // undefinde
  console.log(typeof n); // object
  console.log(typeof o); // object


// 执行环境和作用域
  var color = 'bule';
  function changColor() {
    if (color === 'bule') {
      color = 'red';
    } else {
      color = 'bule';
    }
  }
  changColor();
  console.log('color is' + color);

  // 局部作用域中定义变量可以在局部环境中与全局变量互换使用

  // var color = 'red'; // 全局变量
  
  // function addColr() {
  //   // 局部变量
  //   var font = 'blue';

  //   function swapCOlor() {
  //     var tempColor = font;
  //     font = color;
  //     color = tempColor;
  //   }
  //   console.log(swapCOlor());
  //   swapCOlor();
  // }
  // addColr();
  // console.log(addColr());



// 实例2

 var color = 'blue'; // 统称为：全局环境 
 
 function changColor() {   // changColor() 内部称为：局部环境
  var anotherColor = 'red';  

   function swapColor() { // swapColor() 内部称为：局部环境
     var tempColor = anotherColor;
     anotherColor = color;
     color = tempColor;
     console.log(tempColor); // red
   }
   swapColor();
 }
 changColor();


 // 延长作用域链
 function buildUrl() {
   var nav = '?debug=true';
   with(location) {
     var url = href + nav;
    }
   return nav;
 }

// 没有块级作用域

if (true) { // 不存在的块级作用域
  var color = 'blue';
}
console.log(color);

for (var i=0; i < 10; i++){
  console.log(i)
}
console.log(i)


// 声明变量


function add(num1, num2) {
  var sum = num1 + num2;
  return sum;
}
var result = add(10, 30); // 初始化变量没有声明时，该变量会自动添加到全局；
console.log(result) // 输出结果 40


// 查询标识符

// 实例1
 var footer = '层级查找的关系（window中的变量）';
//  var aaa = '87';
//  function aaa() {
  //  var asas = 'sadasdas';
   function getFooter() {
     return footer;
   }
   console.log(getFooter()); // 层级查找的关系
  // }

  // 实例2
  // 如果局部变量存在同名的标识符，就不会使用福环境中的标识符；
   var colornav = 'addColor我是全局window中的变量';
   
   function getCOloraa() {
     var colornav = 'detail我是局部变量';
     return colornav;
   }
   console.log(getCOloraa()); // details

// 

























})