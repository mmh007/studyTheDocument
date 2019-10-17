$(function ($) {

console.log('－－ 选择符API  －－')

// querySelector() 方法
console.log('-- querySelector() // 方法接受一个css选择符--')
console.log('-- // 取ID、selected、伪类--')

// querySelectorAll()
console.log('-- querySelectorAll() // 方法接受一个css选择符--')


// matchesSelector() 方法
console.log('matchesSelector() // 返回true/false')

//  元素遍历
//childElementCount() 返回子元素
// firstElementChild() 指向第一个子元素
// lastElementChild() 指向最后一个子元素
// previousElementSibling() 指向前一个同辈元素
// nextElementSibling() 指向后一个同辈元素
})

//  HTNML5
console.log('=== HTNML5 ===')

// 与类相关的扩充方法

// getElementsByClassName() 方法
// classList() 属性 添加删除、替换类名

// add(value)  添加
// contains(value) true／false
// remove(value) 删除
// toggle(value) 判断

//  "current"  5
//  "disabled"  div.classList.remove("disabled");
// div.classList.add("current");
//  "user"  div.classList.toggle("user");
// 定  中     定的  
// if (div.classList.contains("bd") && !div.classList.contains("disabled"))


console.log('-- 焦点管理 --')

var button = document.getElementById("myButton");
button.focus();
console.log(document.activeElement === button);

// HTMLDocument() 变化

//  自定义数据属性
console.log('===＝＝＝＝＝＝=====  自定义数据属性(重点) ===＝＝＝＝＝＝======')
console.log('data- // 注意前缀一定要加data-')
// dataset.自定义属性 （）    ／／ 方法

// innerHtml()属性

// outerHTML() 属性

// insertAdjacentHTML() 方法

// 内存与性能问题

// scrollIntoView() 方法 滚动
console.log('--- scrollIntoView() 方法 滚动 ---')

// 文档模式

// children 属性
// contains() 方法

// 插入文本
console.log('-- 插入文本 --')

// innerText() 属性
// outerText 属性

// 滚动
console.log('--- 滚动 ---')
