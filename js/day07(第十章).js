$(function ($) {

// DOM
// 本章内容
// 理解包含不同层次节点的DOM
// 使用不同的节点类型
// 客服浏览器兼容性问题及各种陷阱
console.log('--- 理解包含不同层次节点的DOM ---')
console.log('--- 使用不同的节点类型 ---')
console.log('--- 客服浏览器兼容性问题及各种陷阱 ---')

// 节点层次
console.log('--- 节点层次 ---')

// node 类型
console.log('--- node 类型 ---')

// nodeName和nodeValue 属性
console.log('-- nodeName和nodeValue 属性 --')

// 节点关系
console.log('--- 节点关系 ---')


function convertToArray(nodes){
  var array = null;
  try {
array = Array.prototype.slice.call(nodes, 0); //    IE     } catch (ex) {
      array = new Array();
      for (var i=0, len=nodes.length; i < len; i++){
          array.push(nodes[i]);
      }
} catch {
  return array;
}}

//try-catch // 捕获错误❌


console.log(a); // 错误
var a = 1
f();
console.log(a) // 1
function f(){
    console.log(a) // 错误
    var a = 3;
    console.log(a) // 3
}
function aw() {
  // alert(3) //  3
}
aw();
console.log(a); // 1

// Document类型
console.log('-- Document类型 --')

// 文档的子节点
console.log('-- 文档的子节点 --')

// 修改文档标题
var originalTitle = document.title;

// 设置文档标题
document.title = "New page title";

// 文档信息
console.log('-- 文档信息 --')

// 查找元素
console.log('-- 查找元素 --')

//  getElementById()  getElementsByTagName()。

// namedItem()

console.log('namedItem()')

console.log('var myImage = images["myImage"];')

// (*) 表示全部
console.log()

{/* <fieldset>
  <legend>Which color do you prefer?</legend>
  <ul>
    <li><input type="radio" value="red" name="color" id="colorRed"> <label for="colorRed">Red</label></li>
    <li><input type="radio" value="green" name="color" id="colorGreen"> <label for="colorGreen">Green</label></li>
    <li><input type="radio" value="blue" name="color" id="colorBlue"> <label for="colorBlue">Blue</label></li>
  </ul>
</fieldset> */}


// 特殊集合



















})