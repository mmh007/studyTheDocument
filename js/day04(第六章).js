$(function ($) {
  // 第六章 面向对象的程序设计

  console.log('// 本章内容')
  console.log('// 理解对象属性')
  console.log('// 理解并创建对象')
  console.log('// 理解继承')

// 理解对象
  var person = new Object();
  person.name = 'mameihau';
  person.age = 29;
  person.job = 'shlool form';

  person.sayName = function () {
    console.log(this.name)
  }

  var person = {
    name: 'mameihau',
    age: 29,
    job: 'shlool form',
    sayName: function () {
      console.log(this.name)
    }
  }

// 属性类型
console.log('--- 属性类型 ---')
console.log('--- 数据属性 ---')

// Object.defineProperty()方法 // 要修改属性默认的特性
// 属性所在的对象、属性的名字和一个描述符对象

// configurable、enumerable、writable
var person = {}; 
Object.defineProperty(person, "name", { 
 configurable: false, // 开关
 value: "Nicholas" 
}); 
console.log(person.name); //"Nicholas" 
delete person.name; // 删除name
console.log(person.name);

// 访问器属性
console.log('--- 访问器属性 ---')

var book = {
  _year: 2004,
  edition: 1
};

Object.defineProperty(book, 'year', {
  get: function() {
    return this._year;
  },
  set: function(newValue) {
    if (newValue > 2004) {
      this._year = newValue;
      this.edition += newValue - 2004;
    }
  }
});
book.year = 2005;
console.log(book.edition)

// 定义多个属性
console.log('--- 定义多个属性 ---')

var books = {};
Object.defineProperties(books, {
  _year: {
    value: 2004
  },
  edition: {
    value: 1
  },
  year: {
    get: function () {
      return this._year;
    },
    set: function(newValue) {
      if (newValue > 2004) {
        this._year = newValue;
        this.edition += newValue - 2004;
      }
    }
  }
});
console.log(books)

// 读取属性的特性
console.log('--- 读取属性的特性 ---')

// 创建对象
console.log('--- 创建对象 ---')
// 工厂模式
console.log('--- 工厂模式 ---')

function createPerson(name, age, job){ 
  var o = new Object(); 
  o.name = name; 
  o.age = age; 
  o.job = job; 
  o.sayName = function(){ 
  alert(this.name); 
  }; 
  return o; 
 } 
 var person1 = createPerson("Nicholas", 29, "Software Engineer"); 
 var person2 = createPerson("Greg", 27, "Doctor");
console.log(person1,'//  工厂模式');
console.log(person2,'//  工厂模式');

// 构造函数模式
console.log('--- 构造函数模式 ---')

// function Person(name, age, job){ 
//   this.name = name; 
//   this.age = age; 
//   this.job = job; 
//   this.sayName = function(){ 
//   console.log(this.name); 
//   }; 
//  } 
//  var person1 = new Person("Nicholas", 29, "Software Engineer"); 
//  var person2 = new Person("Greg", 27, "Doctor");
//  console.log(person1)
//  console.log(person2)

// 将构造函数当作函数
// console.log('--- 将构造函数当作函数 ---')

// var person = new Person('Nicholas', 29, 'ashdsuihda');
// person.sayName(); // 当作构造函数使用

// Person('Greg', 27, 'duasgf');
// window.sayName(); // 作为普通函数调用

// var o = new Object(); // 在另一个对象的作用域中调用
// Person.call(o, 'adsfas', 55, 'dsfafd');
// o.sayName();

// 构造函数的问题
console.log('--- 构造函数的问题 ---')

// 原型模式
console.log('--- 原型模式 ---')

// 理解原型对象
console.log('--- 理解原型对象 ---')
console.log('--- hasOwnProperty()方法  // 方法返回一个布尔值，判断对象是否包含特定的自身（非继承）属性-----')
console.log('--- Object.getOwnPropertyDescriptor()方法 ---')

// 原型与 in 操作符
console.log('--- 原型与 in 操作符 ---')

function Person(){ 
} 
Person.prototype.name = "Nicholas"; 
Person.prototype.age = 29; 
Person.prototype.job = "Software Engineer"; 
Person.prototype.sayName = function(){ 
 console.log(this.name); 
};
var person1 = new Person(); 
var person2 = new Person();

console.log(person1.hasOwnProperty("name")); //false 
console.log("name" in person1); //true

person1.name = "Greg"; 
console.log(person1.name,'// ——来自实例'); //"Greg" 
console.log(person1.hasOwnProperty("name")); //true 
console.log("name" in person1); //true

console.log(person2.name,'// ——来自原型'); //"Nicholas" ——来自原型
console.log(person2.hasOwnProperty("name")); //false 
console.log("name" in person2); //true
 
// 更简单的原型语法
console.log('--- 更简单的原型语法 ---')


function Paa() {}
Paa.prototype = {
  constructor : Paa,
  name: 'mamaeihua',
  age: 29,
  job: 'sjandj lskada',
  sayMame: function () {
    console.log(this.name)
  }
}























})