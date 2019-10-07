$(function ($) {

  // 第八章 BOM

//  理解 window 对象——BOM 的核心
//  控制窗口、框架和弹出窗口
//  利用 location 对象中的页面信息
//  使用 navigator 对象了解浏览器

// window 对象
console.log('--- window 对象 ---')
console.log('parseInt()','// 定义的任何一个对象、变量和函数')

// 全局作用域
console.log('--- 全局作用域 ---')

var age = 29;
function sayage () {
  console.log(this.age);
}
console.log(window.age);
sayage();
// window.sayage();

// 窗口关系及框架
console.log('--- 窗口关系及框架 ---')

console.log('// <frameset rows="160,*"> 框架')
console.log('// <frame src="anotherframe.htm" name="leftFrame"> 引入html')

//  窗口位置
console.log('---  窗口位置 ---')

// screenLeft 和 screenTop 属性 相对于屏幕左边和上边的位置
// screenX 和 screenY 属性 

//将窗口移动到屏幕左上角
window.moveTo(0,0); 
//将窗向下移动 100 像素
window.moveBy(0,100); 
//将窗口移动到(200,300) 
window.moveTo(200,300); 
//将窗口向左移动 50 像素
window.moveBy(-50,0);

// 窗口大小
console.log('--- 窗口大小 ---');
console.log('// innerWidth、innerHeight、outerWidth 和 outerHeight')
console.log('// outerWidth 和 outerHeight 返回浏览器窗口本身的尺寸')

// 导航和打开窗口
console.log('// 导航和打开窗口')

// 1. 弹出窗口
console.log('-- 1. 弹出窗口 --')
console.log('// window.open("首页.html","wroxWindow", "height=400,width=400,top=10,left=10,resizable=yes") 方法会返回一个指向新窗口的引用')// window.open() 方法会返回一个指向新窗口的引用
console.log('// 引入窗口 ', '// 进入页面打开新的窗口')

// 1.
// window.open("首页.html","wroxWindow", "height=400,width=400,top=10,left=10,resizable=yes");
// window.opener = null;

// 安全限制
console.log('-- 安全限制 --')

// 弹出窗口屏蔽程序

console.log('--- 弹出窗口屏蔽程序 ---');

// 2.

// var wroxWin = window.open("首页.html", "_blank"); 
// if (wroxWin == null){ 
//  alert("The popup was blocked!"); 
// }

// var blocked = false; 
// try { 
//   var wroxWin = window.open("首页.html", "_blank"); 
//     if (wroxWin == null){ 
//     blocked = true; 
//   } 
// } catch (ex){ 
//   blocked = true; 
// } 
// if (blocked){ 
//   alert("The popup was blocked!"); 
// }

// 间歇调用和超时调用
console.log('--- 间歇调用和超时调用 ---')

// 定时调用、打印
setTimeout(function () {
  console.log('Hello world!')
}, 800);

console.log('setTimeout() // 定时器')
console.log('clearTimeout() // 清除时间')
console.log('setInterval() // 设置时间间隔')
console.log('clearInterval() // 解除计时器')


// 系统对话框

// alert()、confirm()和 prompt()方法

// confirm('wdoqk')
console.log('alert() // 弹框')
console.log('confirm() // 确认框')
console.log('prompt()  // 输入框')



// 8.1.7 系统对话框
// var result = prompt('okfpwjefwe', '');
// if (result !== null) {
//   alert ('111,' + result);
// }


// location 对象


// 查询字符串参数
console.log('--- 查询字符串参数 ---')

function getQueryStringArgs() {
  // 取得查询字符串并去掉开头的问好
  var qs = (location.search.length > 0 ? location.search.substring(1) : ''),
  // 保存数据
  args = {},
  // 取得每一项
  items = qs.length ? qs.split('&') : [],
  item = null,
  name = null,
  value = null,
  // 在for循环中使用
  i = 0,
  len = otems.length;
  // 逐个将每一项添加到args对象
  for (i = 0; i < len; i ++ ) {
    item = items[i].split('=');
    name = decodeURIComponent(item[0]);
    value = decodeURIComponent(item[1]);
    if (name.length) {
      args[name] = value;
    }
  }
  return args;
}

// 位置操作
console.log('-- 位置操作 --')

// replace() // 要禁止用这种行为时
// reload() // 重新加载当前页面


// navigator 对象
console.log('--- 位置操作 ---')

// 检查插件
console.log('--- 检查插件 ---')

try {
  
} catch (error) {
  
}

// 注册处理程序
console.log('--- 注册处理程序 ---')


// scren 对象
console.log('--- screen 对象 ---')
console.log('// 指屏幕像素、大小等等')
console.log(' screen // 表示对象上只用来表明客户端的能力；')

// history 对象
console.log('--- history 对象 ---')
console.log('go() ','// 在用户历史记录中给人以跳转')

// 示例：
// history.go(-1);
console.log('history.go(-1)','// 指后退' )
console.log('history.go(1)','// 指前进' )
console.log('history.go(2)','// 指前进2页' )

// 后退一页（）
// history.back()
console.log('history.back()')
// 前进一页（）
// history.forward();
console.log('istory.forward();')

// sereen 对象保存着与客户端显示器有关的信息，这些信息一般自用与分析站点分析；
// history 对象访问浏览器的历史记录开了一个小缝隙











































































})