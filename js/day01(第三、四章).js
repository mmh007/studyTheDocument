$(function ($) {
  // var variable = {
  //   a:1,
  //   b:3
  // }
  var a = b;
  var b = 54;
  var variable = a < b;
  var card = (a > b);
  console.log(variable);
//   乘/赋值（*=）；
//   除/赋值（/=）；
//   模/赋值（%=）；
//   加/赋值（+=）；
//   减/赋值（=）；
//   左移/赋值（<<=）；
//   有符号右移/赋值（>>=）；
//    无符号右移/赋值（>>>=）;

// 逗号操作 
// 逗号操作符返回表达式中的最后一项
// var num1 = 1, num2 = 2, num3 = 3;
// var num = (5,4,1,3,8);
// console.log(num);


// // if 语句 判断
// var i = 16;
// if (i > 15) 
//  alert("xiao 25.");
// else { 
//  alert("Less than or equal to 25.");
// }
// if (conditon1) ststemnt1 else if (conditon2) ststemnt2 else ststemnt3 
// if (i > 25) {
//   console.log('第一层');
// } else if (i < 0 ) {
//   console.log('第二层');
// } else {
//   console.log('第三层')
// }

// do-whille 语句
// var statement = 12;
// var expression = 10;
  // do {
  //   statement
  // } while (expression);
// var header = 4;
// do {
//   header += 2;
// } while (header < 10);
// console.log(header)

// // while 语句
var nav = 2;
while (nav < 10) {
  nav += 1;
}
console.log(nav);

// for 语句
// var header = 15;
// for (header; nav; post-header) section
// var section = 10;
// for (var nav = 6; nav < section; section++){
//   alert (section)
//   console.log(section)
// }
// var artice = 12;
var section = 10;
for (var artice = 5; artice < section; artice++) {
  // console.log(artice)
}
 var aside = 10;
 var footer = 5;
 for (; footer < aside; ) {
   // console.log(footer); // 5, 6, 7, 8, 9
   footer++;
 }

// for-in 循环语句
// for (property in expression) statement
// var propName = 1;
// for (var propName in window) {
//   document.write(propName);
// }

// label 语句循环
// label: details
var details = 5;
start: for (var i=0; i < details; i++) {
  console.log(i)
}

// break和contionue语句

var header = 0;
for (var f = 1; f < 10; f++) {
  if (f % 5 == 0) {
    continue;
  }
  header++;
  console.log(header) // 1-- 8
}
console.log(header);// 总循环 8 次

// with 语句

// 实例
// var qs = location.search.substrung(1);
// var hostName = location.hostname;
// var url = location.href;

// 将代码的作用域设置到一个特定的对象中
var location = window;
with(location) {
  // var qs = search.substring(1);
  // var hostName = hostname;
  // var url = href;
}

// switch 语句

// switch (expression) {
//   case value: statement
//     break;
//   case value: statement
//     break;
//   case value: statement
//     break;
//   case value: statement
//     break;
//   default: statement
// }

// 实例 1

var i = 55;
switch (i) {
  case 25:
    console.log('25');
    break;
  case 35:
    console.log('35');
    break;
  case 45:
    console.log('45');
    break;
  default:
    console.log('other');
}

// 实例 2

switch (i) {
  case 50:
    // 合并两种类型
  case 55:
    console.log('判断双重语句！');
    break;
  case 66:
    console.log('66');
  default:
    console.log('都不等于')
}

// 实例3

var nav = 30;
switch (true) {
  case nav < 0:
    console.log('0');
    break;
  case nav >= 0 && nav <= 10:
    console.log('0','10');
    break;
  case nav > 10 && nav <= 20:
    console.log('10','20');
    break;
  default:
    console.log('No then 20')
}

// 函数
  // function functionName(arg0, age1, argN) {
  //   statements
  // }
 
  // th = {
  //   name: '121',
  //   djd: '54654',
  //   message: '6+565978'
  // };
  var th = ('hdjufds', 'dhjcfiso');

  // 实例1

  function th(name, message) {
    console.log('Hello' + name + ',' + message);
  }
  console.log(th)


// 实例2
function sum(num1, num2) {
  return num1 + num2;
  console.log("HELLO world"); // 不会被执行
}

// 实例3
function thead(num1, num2) {
  if (num1 < num2) {
      return num1 - num2;
      console.log(21221)
  } else {
    console.log(454546)
      return num1 + num2
    }
}

// 实例4
// var hose = (12);
// function hose() {
//   console.log(ose.length);
// }
// hose('string', 45);
// hose();
// hose(12);
function doAdd() {
  if(arguments.length == 1) {
    console.log(arguments[0] + 10);
  } else if (arguments.length == 2) {
    alert (arguments[0] + arguments[1]);
  }
}


// 没有重载
function doAdd (num) {
  return numm + 100;
}
function doAdd (num) {
  return num + 200;
}
var result = doAdd(100);
console.log()







})