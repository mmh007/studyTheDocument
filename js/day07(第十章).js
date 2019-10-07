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


























})