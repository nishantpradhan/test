// iconsole.log("hello world");


console.log('need to revert this commmit')

// var _ = require("lodash");
var moment = require("moment");
var Promise = require("bluebird");
const fs = require('fs');
const path = require('path');
var _ = require('underscore');
var uniqid = require('uniqid');
let async = require('async');
console.log(uniqid() + 'testCreation'); // -> 4n5pxq24kpiob12og9
// console.log(uniqid(), uniqid());

// console.log(Object.keys({ a: '', b: '' }).length);
let Client = require('ssh2-sftp-client');
const os = require('os');
// const privKeyPath = path.join(os.homedir(), '.ssh', 'id_rsa');
// const privKey = fs.readFileSync(privKeyPath);o
// console.log(stooges,'stooges')

let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// words = _.map(words, item => {
//     return item.length > 6;
// });
// console.log('words', words)
let spArr = ["0,1,2,3,4,13,14"];
console.log('>>>>', spArr[0].split(',').every(item => parseInt(item) == item));
// console.log('newObj', newObj)
let obj1 = [{
    instrumentId: 34872,
    weightage: 0.5,
    priority: 2,
    modelPortfolioId: 46
},
{
    instrumentId: 34873,
    weightage: 0.5,
    priority: 1,
    modelPortfolioId: 46
}
];

let obj2 = [{
    instrumentId: '34872',
    weightage: 0.5,
    priority: 2,
    modelPortfolioId: 46
},
{
    instrumentId: 34873,
    weightage: 0.5,
    priority: 1,
    modelPortfolioId: 46
}
];


promise1
.then(function(){
    return Promise.delay(500);
}).then(function(){

    return resolve()
})

console.log(['instrumentId', 'weightage', 'priority', 'modelPortfolioId', 'effectiveDate'].join(',') , '<<<<<<<', 'addition');

