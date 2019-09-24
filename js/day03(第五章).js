$(function ($) {

  // object 类型
  console.log('----- object 类型 ------')

  // 创建object类型有两种

  // 实例1
  var header = new Object(); // 通过object（） 创建
  header.name = 'nav';
  header.age = 28;
  header.diploma = 'junior college';
  console.log(header); // 对象

  // 实例2
  var propertyName = 'age'; // 优点是通过变量来访问属性
  var header = { // 通过使用对象字面量方法
    name: 'Mameihua',
    age: 25,
    diploma: 'junior college'
  }
  console.log(header['name']);
  console.log(header.name);
  console.log(header[propertyName]); // 打印通过变量来访问属性的方法

  // 实例3
  var header3 = {};
  header3.name = 'mameihua';
  header3.age = 30;
  console.log(header3[propertyName]); // 打印通过变量来访问属性的方法
  // 实例4
  function header4(nav) {
    var output = '';

    if(typeof nav.name == 'string') {
      output += 'name: ' + nav.name + '\n';
    }

    if(typeof nav.age == 'number') {
      output += 'Age: ' + nav.age + '\n';
    }

    console.log(output);
  }
  header4({   //  第一次封装的数据
    name: 'mameihua',
    age: 29
  });
  header4({    //  第二次封装的数据
    name: 'Greg'
  });


  // Array 类型(构造函数)

  // 创建数组的第一种方法
  console.log('----- Array 类型 -----');

  // 实例1
  var colors = new Array(20); // 创建length的长度
  console.log(colors); // length 20
  
  // 实例2
  var colors = new Array('red', 'blue', 'green'); // 创建3个字符串的数组
  console.log(colors); // ['red', 'blue', 'green']

  // 实例3
  var colors3 = ['red', 'mmh', 'yellow']; // 创建一个包含3个字符串的数组
  // colors3.length = 2; 
  console.log(colors3);
  console.log(colors3[0]); // 打印查找第几项
  colors3[2] = 'block'; // 修改第二项
  console.log(colors3)
  var names3 = []; // 创建一个空数组
  console.log(names3);
  var values3 = [1, 2,]; // 错误 语法
  console.log(values3);
  var options3 = [,,,,,]; //错误 语法
  console.log(options3);


  // 实例4
  if (Array.isArray(colors3)){ // 检测某个值到底是不是数组
    // 对数组执行某些操作
    console.log(colors3)
  }


  var storage=window.localStorage;
  storage.a=5;
  storage.b=5;
  storage.c=5;
  storage.d=5;
  storage.setItem("c",3);
  for(var i=0;i<storage.length;i++){
      var key=storage.key(i);
      console.log(key);
  }

// 队列方法
console.log('--- 队列方法 --- ')
console.log('--- push()  ---')
console.log('--- shift()  ---')
console.log('--- unshift()  ---')
console.log('--- pop()  ---')

var red = new Array();
red = ['yeoolw'];
var blue = red.push('red','green'); // 向后添加
console.log(blue); // 获取长度push后的长度
console.log(red); // 获取结果

var item = red.shift(); // 删除第一项
console.log(item);
console.log(item.length);

var itemm = red.unshift('ddd','dada'); // 向前添加
console.log(itemm)
console.log(red)
var itemma = red.pop(); // 删除最后一项
console.log(itemma);

// 重排序方法
console.log('--- 重排序方法 ---')

console.log('reverse()--指反转') // 指反转
console.log('sort()--指排序') // 指排序

var value = [1, 2, 3, 4, 5, 6];
value.reverse(); // 将数组反转，改变内容
console.log(value);

value.sort();
console.log(value);

function compare(value1, value2) {
  if (value1 < value2) {
    return 1 ;
  } else if (value1 > value2) {
    return -1;
  } else {
    return 0;
  }
}
var values = [0, 1, 5, 10, 15];
values.sort(compare); //  得到顺序改变
console.log(values)

 function compare( value1, value2) {
   return value2 -value1;
 }

// 操作方法
console.log('--- 操作方法  ---')
console.log('--- concat()  ---')
console.log('--- slice() 含返回项的启示位置和结束位置 ---')
console.log('--- splice() 删除：（指定2个参数、第一项为位置、第二项为项数即个数）  ---')

var mark = ['red', 'moumou', 'liu'];
var mark1 = mark.concat('yellow',['block', 'brown']);
console.log(mark); // 原数组
console.log(mark1); // 新数组，将数组添加到新数组的结果中

var a = ['1', '2', '3', '4', '5'];
var b = a.slice(1);
console.log(a); // 原数组
console.log(b); // 不该变原素组，进行创建新数组（只包含启示位置）
var c = a.slice(1,4); // 包含返回项的启示位置和结束位置
console.log(c);


// 删除
console.log('--- 删除 ---')
var nav = ['bolu', 'red', 'yellow'];
console.log(nav, '// 原数组')
var removed = nav.splice(0, 1);
console.log(nav, '// 返回被删除后的结果'); // 返回被删除后的结果
console.log(removed, '// 返回删除的数'); // 返回删除的数

console.log('--- 插入 ---')
removed = nav.splice(1, 0, 'hahah', 'dada'); // 从位置1开始插入两项
console.log(nav, ' // 起示位置1， 删除0个，插入2个（hahah, dada）');
console.log(removed, ' // 没有删除所以返回空数组')

console.log('--- 替换 ---')
var removed = nav.splice(1,1,'aaa', 'bbb'); // 插入两项，删除一项
console.log(nav, ' // 起示位置1， 删除1个，插入2个（aaa, bbb）');

// 位置方法
console.log('----- 位置方法 -----')

console.log('indexof(), // 从数组开头位置查找')
console.log('IastIndexof(), // 从数组的末尾开向前查找')

var number = [1,2,3,4,5,5,4,3,2,1];
console.log(number.indexOf(4),'// 查找到数组中的位置4， 返回结果 ‘3’');
console.log(number.indexOf(4, 4),' // 查找到最后那一位＋1');
console.log(number.lastIndexOf(4),' // 查找到最后那一位＋1 ,// 找不到返回－1');

// 迭代方法
console.log('----- 迭代方法 -----')
console.log('every()','// 对数组中的每一项给定函数,判断数组的每一项是否满足条件，全部满足返回true')
console.log('filter()','// 过滤属性，运行给定函数，返回带函数会返回true的项，组成的数组')
console.log('forEach()','// 每一项给定函数，没有返回值，遍历所有')
console.log('map()','// 返回每次函数调用的结果组成的数组，映射')
console.log('some()','// 给任何一项true，且都返回true')


console.log('--- every() ---')
console.log('--- some() ---')
var numbers = [1,2,3,4,5,4,3,2,1];
var addaa = {};
var addaa = numbers.every(function(item,index,array){
  console.log(item)
  console.log(index)
  console.log(array)
  console.log(numbers)
  console.log(addaa)
  return (item > 1);
});
 console.log(addaa,'// 判断数组的每一项是否满足条件，全部满足返回true()一项满足不返回'); // false

var bba = numbers.some(function(item,index,array){
  return (item > 2);
})
console.log(bba,'// 给任何一项true，且都返回true'); // true


console.log('--- filter() ---')


var maps = [1,2,3,4,5,4,3,2,1];
var forecaha = maps.filter(function (item,index,array) {
  console.log(item,'// item')
  console.log(index, '// index')
  console.log(array, '// array')
  return (item > 2);
})
console.log(forecaha, '// 过滤掉item小余2的数组');


console.log('--- map() ---')

var pops = [1,2,3,4,5,4,3,2,1];
var mapRes = pops.map(function (item,index,array) {
  console.log(item,'// item')
  console.log(index, '// index')
  console.log(array, '// array')
  return item * 2;
})
console.log(mapRes);


console.log('--- forEach() ---')

var goodlist = [1,2,3,4,5,4,3,2,1];
goodlist.forEach(function(item,index,array) {
  console.log(item,'// item')
  console.log(index, '// index')
  console.log(array, '// array')
})


// 归并方法
console.log('--- 归并方法 ---')
console.log('reduce()','// 从数组第一项开始，逐个遍历到最后')
console.log('reduceRight()','// 从数组的最后一项开始，向前遍历到第一项')
console.log('接受4个参数：前一个值、当前值、项的索引、数组对象')

// 示例：
console.log('--- reduce() ---')

var values = [1,2,3,4,5];
var sum = values.reduce(function (prev, cur, index, array) {
  console.log(prev, '// 指当前值1,第二个值为prev+cur=值')
  console.log(cur, '// 当前值')
  console.log(index, '// 项的索引')
  console.log(array, '// 数组对象')
  return prev + cur;
})
console.log(sum, '// 总和' );

console.log('--- reduceRight() ---')
console.log('// 主要取决于要从那头开始遍历数组')


// 5.3 Date 类型
console.log('----- Date 类型 -----')
console.log('----- Date.parse()  // 接受一个标示日期的字符串参数 -----')
console.log('----- Date.UTC() // 同样是返回日期的毫秒数，参数分别表示年份，基于0的月份指一月份 -----')



var now = new Date();
console.log(now);
var nnn = new Date(Date.parse('may 25, 2004'));
console.log(nnn)

console.log('Date.parse()','// 接受一个标示日期的字符串参数')

console.log('Date.UTC()','// 同样是返回日期的毫秒数，参数分别表示年份，基于0的月份指一月份')
 var y2k = new Date (Date.UTC(2000,0))
 console.log(y2k, '// 返回年份、月份')
 var y2ks = new Date (Date.UTC(2000,6,4,17,55,55));
 console.log(y2ks,' // 返回结果：年月日，时分秒')


 console.log('--- Date.now()//  返回时间码 ---')
console.log('https://www.jianshu.com/p/fc21765aade0');
// var result = 111;

//  function doSomething() {
  //  var start = Date.now();
  //  console.log(start);
  //  console.log(Date.parse(this.start));
//  }

//  doSomething();

//  var stop = +new Date();
//  result = stop - start;
//  console.log(result);

console.log('日期格式话方法')

console.log('toDateString()','// 星期几、月、日、年')
console.log('toTimeString()','// 时、分、秒')
console.log('toLocaleDateString()','// 星期几、月、日、年')
console.log('toLocaleTimeString()','// 时、分、秒')
console.log('toUTCString()','// 以特定实现的格式完整的UTC日期')
console.log('toLocaeString()','// ')

// 日期／时间组件方法
console.log('--  日期／时间组件方法 --')

// RegExp 类型
console.log('--  RegExp 类型 --')

// var mou = /patten/flags;
// console.log(mou);

console.log('g','// 表示全局模式')
console.log('i','// 表示不区分大小写模式')
console.log('m','// 表示多行模式')

var papap = /at/g;
console.log(papap,'// 全局查找');

var papapp = /[bc]at/i;
console.log(papapp, '// 不区分大小写');

var papapp3 = /.at/gi;
console.log(papapp3,'// 结尾的3个字符组合，不区分大小写');

console.log('----- 示例方法 -----')
console.log('----- 构造函数属性方法 -----')

console.log('--- function 类型 ---')
// function sum(num1, num2) {
//   return num1 + num2;
// }
// console.log(sum(10,10));
// var red = sum;
// console.log(red(10,11))

function aaa(a,b){
  return a + b;
}
console.log(aaa(10,10),'// aaa 函数')

var sss = aaa;
console.log(sss(11,10),'// 指向同一个函数');

aaa = null;
console.log(sss(11,11),'// 没有关系的设置')

// 没有重载（深入理解）
console.log('----- 没有重载（深入理解） -----')

function add(items) {
  return items + 100;
}

function add(items) {
  return items + 200;
}

var navmark = add(1);
console.log(navmark,'// 后面的函数覆盖了前面的函数');




// 函数声明与函数表达式
console.log('---- 函数声明与函数表达式 -----')

console.log(sum9(12,12));
function sum9 (num5,num6) {
  return num5 + num6;
}

// 作为指的函数
console.log('----- 作为指的函数 ----- ')
 function www(ac,ag) {
   return ac(ag);
 }

 //
 function add101(to) {
   return to + 10;
 }
 var qwsa = www(add101, 1);
 console.log(qwsa,'// 参数作为值传递的结果')


function getma(name){
  return "sada, " + name;
};
var qwsa2 = www(getma,'我是函数传参');
console.log(qwsa2,'// 通过函数传参的方式，传值给另一个函数');



// 函数中返回另一个函数

function creatmark (propertyName) {

  return function (object1, object2) {
    var value1 = object1[propertyName];
    var value2 = object2[propertyName];

    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  };
}

//
var data = [{
  name: 'moumou', age: 24,
  name: 'mama', age: 25
}];
data.sort(creatmark('name'));
console.log(data[0].name)

data.sort(creatmark('age'));
console.log(data[0].name);


// 函数内部属性
console.log('---- 函数内部属性 ---')

function factorial (snum) { // 该属性是一个指针，指向拥有这个 arguments 对象的函数
  if (snum <= 1 ){
    return 1;
  } else {
    return snum * factorial(snum - 1)
  }
}
function factorial(snum) { // 消除紧耦合现象
  if (snum <= 1) {
    return 1;
  } else {
    return snum * arguments.callee(snum-1)
  }
}
// console.log(factorial(4));

var trueFactorial = factorial;
factorial = function () { // 都可以保证正常完成递归调用
  return 0;
}

console.log(trueFactorial(5))
console.log(factorial(5))

// this的作用域

window.color = 'redddd';
var aca = {color: 'blue'};

function sctly() {
  console.log(this.color);
}
sctly();
console.log(sctly());

aca.sctly = sctly;
aca.sctly();
console.log(aca.sctly())

// 函数的名字是一个包含指针的变量而已。

function outer() {
  inner();
}

function inner() {
  console.log(inner.caller);
}
outer();

// 函数属性和方法

function saynmae(name) {
  console.log(name);
}

function summ(num1q, num2q) {
  return num1q + num2q;
}

function sayHi () {
  console.log('hi');
}

console.log(saynmae.length,'// 函数内部长度');
console.log(summ.length);
console.log(sayHi.length);


console.log('apply()',' // 一个是在其中运行函数的作用域，另一个是参数数组')

window.coloee = '123';
var o = {color: 'red'};

// fucntion sss () {
//   console.log(this.o)
// }

// 基本包装类型
console.log('--- 基本包装类型 ---');


// Boolean 类型
console.log('--- Boolean类型 ---')


// Number 类型
console.log('----- Number 类型 ----')

var numberobject = new Number(10);

// 示例
console.log('toFixed()');
var num = 10;
console.log(num.toFixed(2),'// 返回数值');

console.log(num.toExponential(1))


// String类型
console.log('--- String类型 ---')

// 字符方法

console.log('字符串方法')
console.log('charAt()','// 返回给定位置')
console.log('charCodeAt()')

var stringValue = 'hello world';
console.log(stringValue.charAt(1));

// 字符串操作方法
console.log('concat()', '// 将一个或多个字符串拼接起来')

var string = 'hello';
var reult = string.concat(',', 'world' );
console.log(reult);

// 拼接字符串的方法：
console.log('slice(), // ')
console.log('substr()')
console.log('substring()')

// 字符串位置方法
console.log('indexof(),// 开头向后搜索字符串')
console.log('lastIndexof()， // 从末尾向后搜索子字符串')

var indexss = 'hello world';
console.log(indexss.indexOf('o'),'// 取第一次出现的地方');
console.log(indexss.lastIndexOf('o'),'// 取最后一次出现的地方');

var mameihua = 'you i into ffootr, ijwidwdnoi fsdjhfi isdjdios';
var position = new Array();
var pos = mameihua.indexOf('e');
console.log(pos);
while(pos > -1) {
  position.push(pos);
  pos = mameihua.indexOf('e',pos + 1);
}
console.log(position)


console.log('replace() // 方法，替换')
var text = 'cat, bat, ccadat ,ieuat';
var result = text.replace('at','bat');
console.log(result);

result = text.replace(/at/g,'111');
console.log(result,'// 将查找到的at，替换为111');

//
function htmlEscapa(text) {
  return text.replace(/[<>"g]/g, function(match, pos, originalText){
    switch(match) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "\"":
        return "&quot;";
    }
  })
}
console.log(htmlEscapa("<p class=\"greeting\">Hellow world!</p>"));

//  localeCompare()方法 这个方法比较两个字符串
console.log('---  localeCompare()方法 ---');

var stringValue = "yellow"; // 字母表中排序
console.log(stringValue.localeCompare("brick"),'// 该排在字符串参数之前，则返回一个负数'); //1 
console.log(stringValue.localeCompare("yellow"),'// 字符串等于字符串参数，则返回 0'); //0 
console.log(stringValue.localeCompare("zoo"),'// 该排在字符串参数之后，则返回一个正数'); //-1


function determineOrder(value) { 
  var result = stringValue.localeCompare(value); 
  if (result < 0){ 
    console.log("The -1 '" + value + "'."); 
  } else if (result > 0) { 
    console.log("The 1 '" + value + "'."); 
  } else {
    console.log("The 0 '" + value + "'."); 
  } 
 } 
 determineOrder("brick");
 determineOrder("yellow"); 
 determineOrder("zoo");

// fromCharCode() 方法
console.log(String.fromCharCode(104, 101, 108, 109, 111),'// 传递的是字符串"hello"中每个字母的字符编码');


// 单体内置对象
console.log('--- 单体内置对象 ---')

// Object、Array 、 String

// Global对象
console.log('--- Global对象 ---')

//eval()方法 
console.log('--- eval()方法 --- // 它只接受一个参数')

console.log('undefined 特殊值undefined Date 构造函数Date')
  console.log('NaN 特殊值NaN RegExp 构造函数RegExp')
    console.log('Infinity 特殊值Infinity Error 构造函数Error')
      console.log('Object 构造函数Object EvalError 构造函数EvalError')
        console.log('Array 构造函数Array RangeError 构造函数RangeError')
          console.log('Function 构造函数Function ReferenceError 构造函数ReferenceError')
            console.log('Boolean 构造函数Boolean SyntaxError 构造函数SyntaxError')
              console.log('String 构造函数String TypeError 构造函数TypeError')
                console.log('Number 构造函数Number URIError 构造函数URIError')

// window 对象
console.log('--- window 对象 ----')

// var color = "red";  // 全局变量
// function sayColor(){  // 全局函数
//  alert(window.color); 
// } 
// window.sayColor(); //"red"


// 5.7.2 Math对象
console.log('----- Math对象 ---- ')



// min()和 max()方法
console.log('--- min()和 max()方法 ---')

var max = Math.max(3, 45, 546, 54);
console.log(max,'// 最大值')
var min = Math.min(55, 48, 878, 9);
console.log(min,'// 最小值')

console.log('-- apply() --')
var valuess = [1, 344, 6756, 11, 5];
var max = Math.max.apply(Math.valuess);
console.log(valuess,'// 元素组');
console.log(max,'// ')

// 3. 舍入方法
console.log('---- 舍入方法 ----')
console.log('Math.ceil()','// 执行向上舍入，即它总是将数值向上舍入为最接近的整数；')
console.log('Math.floor()','// 执行向下舍入，即它总是将数值向下舍入为最接近的整数；')
console.log('Math.round()','// 执行标准舍入，即它总是将数值四舍五入为最接近的整数; ')

console.log(Math.ceil(25.9),'// 向上舍入'); //26 向上舍入
console.log(Math.ceil(25.5)); //26 
console.log(Math.ceil(25.1)); //26 

console.log(Math.round(25.9),'// 向下舍入'); //26 向下舍入
console.log(Math.round(25.5)); //26 
console.log(Math.round(25.1)); //25 

console.log(Math.floor(25.9),'// 标准舍入'); //25 标准舍入
console.log(Math.floor(25.5)); //25 
console.log(Math.floor(25.1)); //25


// random()方法
console.log('--- random()方法 ---')

var num882 = Math.floor(Math.random() * 10 + 1);
console.log(num882)


console.log('===== 小节总结 =====')
console.log('引用类型与传统面向对象程序设计中的类相似，但实现不同；')
console.log('Object 是一个基础类型，其他所有类型都从 Object 继承了基本的行为；')
console.log('Array 类型是一组值的有序列表，同时还提供了操作和转换这些值的功能；')
console.log('Date 类型提供了有关日期和时间的信息，包括当前日期和时间以及相关的计算功能；')
console.log('RegExp 类型是 ECMAScript 支持正则表达式的一个接口，提供了最基本的和一些高级的正则表达式功能')



})