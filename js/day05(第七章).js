$(function ($) {

  // 第七章 函数表达式

  // 函数表达式的特征
  // 使用函数实现递归
  // 使用必报定义私有变量
  console.log('----- 函数表达式的特征 -----')
  console.log('----- 使用函数实现递归 -----')
  console.log('----- 使用必报定义私有变量 -----')

  // 使用必报定义私有变量
  function color (propertypeName) {
    return function (object1, object2) {
      var value1 = object1[propertypeName];
      var value2 = object2[propertypeName];
      if (value1 < value2) {
        // return -1;
        console.log(-1)
      }else if (value1 > value2) {
        // return 1;
        console.log(-1)
      } else {
        // return 0;
        console.log(-1)
      }
    };
  }
  color();

  //  递归
  console.log('--- 递归 ---')
// arguments.callee //  是指向一个正在执行的函数的指针

var factoria1 = (function f(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * f(num - 1); // 代替函数名
  }
})
console.log('调用递归时使用','// arguments.callee','是不会出问题的')


// 闭包
console.log('-- 闭包 --')

// 创建函数
// var compare = createComparisonFunction('name');
// 调用函数
// var result = compare({name: 'mameihua'}, {name: 'gongg'});
// 解除对一名函数的引用（以便释放内存）
// compare = null;

// 闭包与变量
console.log('----  闭包与变量 ----')

































})