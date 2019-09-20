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
// 重排序方法
console.log('--- 重排序方法 ---')









})