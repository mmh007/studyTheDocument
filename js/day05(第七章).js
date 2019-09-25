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

function vertical () {
  var transition = new Array();

  for (var i = 0;  i < 10; i++) {
    result[i] = function (num) {
      return function() {
        return num;
      }
    }(i);
  }
  console.log(transition)
}
console.log('这里的匿名函数有一个参数 num，也就是最终的函数要返回的值。在调用每个匿名函数时，我们传入了变量 i。由于函数参数是按值传递的，所以就会将变量 i 的当前值复制给参数 num。而在这个匿名函数内部，又创建并返回了一个访问 num 的闭包。')



// 关于this对象
console.log('--- 关于this对象 ----')

// 内存泄漏
console.log('--- 内存泄漏 ----')

// 模仿块级作用域
console.log('--- 模仿块级作用域 ---')
console.log('--- JavaScript 没有块级作用域的概念。 ---')

// (function(){ 
//   //这里是块级作用域
//  })();

 // 先定义了一个函数，然后立即调用了它
 console.log('// 先定义了一个函数，然后立即调用了它')
 var someFunction = function(){ 
  //这里是块级作用域
 }; 
 someFunction(); 

 console.log('// 而函数声明后面不能跟圆括号。')
 console.log('// 函数表达式的后面可以跟圆括号')


 console.log('--- 私有作用域 ----')
  // 全局函数
 function outputNumbers(count){ 
  // 私有作用域
  (function(){ 
    var now = new Date(); 
    if (now.getMonth() == 0 && now.getDate() == 1){ 
    alert("Happy new year!"); 
    } 
   })();
 }

// 私有变量
console.log('私有变量')
console.log('// 任何在函数中定义的变量，都可以认为是私有变量，因为不能在函数的外部访问这些变量')
function add(num1, num2){ 
  var sum = num1 + num2;  // 私有变量
  return sum; 
 }


 function mytransition () {
   // 私有变量和私有函数
   var pripod = 10;
    // 私有函数
   function pripoda () {
     return false;
   }

   // 特权方法
   this.pripods = function () {
     pripod ++;
     console.log(pripoda())
     return pripoda()
   };
 }

//  console.log(mytransition())

// 静态私有变量
console.log('---- 静态私有变量 ----')

// 模块模式

console.log('---- 模块模式 ----')
// var singleton = { 
//   name : value, 
//   method : function () { 
//   //这里是方法的代码
//   } 
//  };


 var singleton = function(){ 
  //私有变量和私有函数
  var privateVariable = 10; 
    function privateFunction(){ 
      return false; 
  }
  //特权/公有方法和属性
    return { 
  publicProperty: true, 
  publicMethod : function(){ 
      privateVariable++; 
      return privateFunction(); 
    } 
  }; 
 }();


// 增强的模块模式
console.log('--- 增强的模块模式 ---')


var application = function(){ 
  //私有变量和函数
  var components = new Array(); 
  //初始化
  components.push(new BaseComponent()); 
  //创建 application 的一个局部副本
  var app = new BaseComponent(); 
  //公共接口
  app.getComponentCount = function(){ 
    return components.length; 
  }; 
  app.registerComponent = function(component){ 
    if (typeof component == "object"){ 
    components.push(component); 
   } 
  }; 
  //返回这个副本
  return app; 
  };

// 匿名函数和普通函数的区别
// 匿名函数：如 var a=function(){ return 1 };

// 此函数function 没有函数名，但是它将值赋给了变量 a

// 普通函数: function abc(){  return 1  };

// 此函数声明了一个名为abc的函数。



















































})