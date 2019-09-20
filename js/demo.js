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
