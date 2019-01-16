// iconsole.log("hello world");

  var _=require('lodash');
var moment=require('moment');
  // const a=[];
  // a.push('b');
  // console.log(a);
// console.log(moment().startOf('day'));

// const promiseEach = require('promise-each-concurrency');
// or import promiseEach from 'promise-each-concurrency';

  let z={
    asd:123,
    dsa:333
  }

let a={
    "assetName": {
        "terms": { "field": "assetName.keyword", "order": {}, "missing": "N/A", "size": 10000 },
        "meta": { "parentName": "ASSET", "keysToInclude": ["assetId"] },
        "aggs": {}
    }
};
// console.log(a.assetName)





  console.log(typeof z);

  console.log(typeof a);
// console.log(JSON.stringify(a,null,2));
  console.log(typeof JSON.stringify(a))
// {
//     "productName": {
//         "terms": { "field": "productName.keyword", "order": {}, "missing": "N/A", "size": 10000 },
//         "meta": { "parentName": "PRODUCT", "keysToInclude": ["productId"] },
//         "aggs": {}
//     }
// }

// const a = [{
//   item:"value",
//   item1:"value2"
// }, {
//   item:"value",
//   item1:"value2"
// },{
//   item:"value3",
//   item1:"value4"
// }]
// tId"] }, "aggs": {} } }console.log(_.groupBy(a,'item'));
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
// // node --max-old-space-size=8192 --optimize-for-size --max-executable-size=8192  --max_old_space_size=8192 --optimize_for_size --max_executable_size=8192 node_modules/karma/bin/karma start --single-run --max_new_space_size=8192   --prod --aot
// new chanfed
// adding one line

// // let a=[ 1541010600000,
// //   1542825000000,
// //   1543257000000,
// //   1543602600000,
// //   1544553000000 ];

//   let b=a;
//   a.push(1);
  // console.log('a',a,'b',b)

  // console.log(a.indexOf('1542825000000'));
  // c


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

