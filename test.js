iconsole.log("hello world");

  var _=require('lodash');
var moment=require('moment');
  const a=[];
  a.push('b');
  console.log(a);
// console.log(moment().startOf('day'));

// const promiseEach = require('promise-each-concurrency');
// or import promiseEach from 'promise-each-concurrency';
pqwiepqwie
qwe
qwe
qwe
q
qwe
q e .

asd asa sa
d as
d asda saas a
sd a asd a
adsadasdasd
startedasd
adsadasdasd
adsadasdas





adsadasd
asdas
dasda
dad
asdad
asd
// promiseEach(
//   [1, 2, 3],
//   function(x) {
//     return new Promise(function(resolve) {
//       setTimeout(resolve.bind(undefined, x), 1000);
//     })
//   },
//   {
//     concurrency: 1
//   }
// node --max-old-space-size=8192 --optimize-for-size --max-executable-size=8192  --max_old_space_size=8192 --optimize_for_size --max_executable_size=8192 node_modules/karma/bin/karma start --single-run --max_new_space_size=8192   --prod --aot


// // let a=[ 1541010600000,
// //   1542825000000,
// //   1543257000000,
// //   1543602600000,
// //   1544553000000 ];

//   let b=a;
//   a.push(1);
  // console.log('a',a,'b',b)

  // console.log(a.indexOf('1542825000000'));
  // console.log([1, 2, 3].includes(2));

// let newDate=new Date('2018-12-28');
// // console.log('newDate',newDate.setHours(0,0,0,0));
// // console.log(new Date());
//   // var d=new Date();
//   var date1=newDate.setHours(0,0,0,0)
//   var d = new Date().setHours(0,0,0,0);
// // d.setHours(0,0,0,0);
//   console.log(date1,d,date1==d)

//   var now = moment(new Date()),
// end = moment(now),
// days = end.diff(now, 'days');
//   console.log('GGGGG',days);

//   var arr = [{p: 'X', v: 50}, {p:'Y', v: 12}, {p:'X', v:80}, {p:'X', v:140}]
// arr.reduce(function(acc, curr){
//   if (acc[curr.p]){
//     acc[curr.p] = acc[curr.p] + curr.v
//   } else {
//     acc[curr.p] = curr.v
//   }
//     return acc;
//   }, {});


// console.log('arr',arr);

// let users = [{
//     name: 'John',
//     email: 'johnson@mail.com',
//     age: 25,
//     address: 'USA'
//   },
//   {
//     name: 'Tom',
//     email: 'tom@mail.com',
//     age: 35,
//     address: 'England'
//   },
//   {
//     name: 'Mark',
//     email: 'mark@mail.com',
//     age: 28,
//     address: 'England'
//   },{
//     name: 'Mark',
//     email: 'mark@mail.com',
//     age: 28,
//     address: 'England'
//   }
// ];

// let anotheruser=[];
// console.log('FFFF',users.concat(anotheruser));

//  //  _.forEach(users)
//  // let isPresent=   users.some(item=>{
//  //      return item.name==name;
//  //    });
//  // console.log('isPresent',isPresent);




// var arr = [{
//   class: "second",
//   fare: "a",
//   plane:"aaa"
// }, {
//   class: "second",
//   fare: "b"
// }, {
//   class: "first",
//   fare: "a"
// }, {
//   class: "first",
//   fare: "a"
// }, {
//   class: "second",
//   fare: "a",
//   plane:"bbb"

// }, {
//   class: "first",
//   fare: "c"
// }]
// var _unArray = [];
// arr.forEach(function(item) {
//   var isPresent = _unArray.filter(function(elem) {
//     return (elem.class === item.class && elem.fare === item.fare)
//   })
//   if (isPresent.length == 0) {
//     _unArray.push(item)
//   }
// })
// console.log(_unArray)



// 'use strict';

// const data= [{
//   class: "second",
//   fare: "a",
//   plane:"aaa"
// }, {
//   class: "second",
//   fare: "b"
// }, {
//   class: "first",
//   fare: "a"
// }, {
//   class: "first",
//   fare: "a"
// }, {
//   class: "second",
//   fare: "a",
//   plane:"bbb"

// }, {
//   class: "first",
//   fare: "c"
// }]

// let unique = [...new Set(data.map(item => item.class && item.fare))];
// console.log(unique);




// // I've started sticking Underscore in all new projects/ by default just so I never have to think about these little data-munging problems.

// var array = [{"name":"Joe", "age":17}, {"name":"Bob", "age":17}, {"name":"Carl", "age": 35},{"name":"Bob", "age":17,"aa":"bb"}];
// console.log(_.chain(array).map(function(item) { return item.age && item.name}).uniq().value());

// users.map(item=>{
//   console.log(item);
// }).filter()
