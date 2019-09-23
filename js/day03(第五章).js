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











})