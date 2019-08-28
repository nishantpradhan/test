var _ = require('lodash');
let moment = require('moment')
var y = undefined;
const async = require('async');

// console.log(new Date().getTime())
var csv = require('csvtojson');

let string = null;

console.log('string', !string)
// console.log(string.replace(/ /g,'').substring(0,5))

var path = require('path')

// var async = require('async')

let date = '20180101'

// INSERT INTO `lighthouse_file` (`id`, `file_name`, `remark`, `file_source`, `file_status`, `changes_reversed`, `file_type`, `processing_date`, `file_date`, `is_active`, `created_date`, `last_modified_date`, `fk_id_account`, `fk_id_bank`, `fk_id_file`)
// VALUES
//   (1, 'xfile', 'PROCESSED', 'zzz', 1, 0, 0, NULL, NULL, 1, '2019-01-01 00:00:00', '2019-06-17 14:39:50', NULL, 2, NULL);


console.error('da')

let UBSHoldingExcelHeaderAttributes = [
    { header: 'Account owner code', keys: 'bankAccountNumber', width: 32 },
    { header: 'Statement date', keys: 'holdingDate', width: 32 },
    { header: 'ISIN number', keys: 'instrumentISIN', width: 32 },
    { header: 'Reference Currency code', keys: 'currency', width: 32 },
    { header: 'Activity flag', keys: 'isActive', width: 32 },
    { header: 'Short description', keys: 'instrumentName', width: 32 },
    { header: 'Holding Value currency code', keys: 'currencyCode', width: 32 },
    { header: 'Holding Value amount', keys: 'totalCurrentValue', width: 32 },
    { header: 'Market Price value', keys: 'currentPricePerUnit', width: 32 },
    { header: 'Holding Value amount', keys: 'totalCurrentValue', width: 32 },
    { header: 'Book Value currency code', keys: 'currency', width: 32 },
    { header: 'BBook Value amount', keys: 'investedAmount', width: 32 },
];







    // x Deal
    // x Exotic Options
    // sit/Loan Txn
    // sit/Loan Interest
    // x Positions
    // ty Txn
    // ings
    // Order Room Conf
    // orate Actions
    //  Debit
    //  Credit
    //  Balance Report

// item.includes("ZAA")||
// item.includes("ZAB")||
// item.includes("ZAD")||
// item.includes("ZAE")||
// item.includes("ZAF")||
// item.includes("ZAG")||
// item.includes("ZAH")||
// item.includes("ZAK")||
// item.includes("ZAN")||
// item.includes("ZAO")||
// item.includes("ZAP")||
// item.includes("ZAQ")||

   let  fileName="asd ads_ZAF_ZZZZZZZZZAD";

    console.log(fileName.search('ZAD'));

// let newObj={ currencyCode: 'UNIT',
//   totalCurrentValue: '22450',
//   currentPricePerUnit: '22.45',
//   currency: 'USD',
//   investedAmount: '18154',
//   amountOrUnit: '1000',
//   quantity: 1,
//   serviceProviderName: 'UBS',
//   fileName: '20190806072938888_2019-07-01_ZAH_83008699_AI5351_A8ZBHDVSTFFQHZ2A.txt',
//   holdingDate: '20190701',
//   totalInvestedAmount: 0,
//   bankAccountNumber: '0546008672750001',
//   instrumentISIN: 'USY5217N1183',
//   isActive: 'Y',
//   instrumentName: 'Lrs Tb Sp GDR Reg-S',
//   accountNumber: '05460000867275N1',
//   assetCode: '322143' };

//   let othernewObj={ totalInvestedAmount: 0,
//   quantity: 1,
//   bankAccountNumber: '0546008672750001',
//   holdingDate: '20190701',
//   instrumentISIN: 'USY5217N1183',
//   currency: 'USD',
//   isActive: 'Y',
//   instrumentName: 'Lrs Tb Sp GDR Reg-S',
//   accountNumber: '05460000867275N1',
//   assetCode: '322143' }


// console.log(Object.assign(newObj,othernewObj))
// _.each(record, item => {


//     let dataObject = {};

//     if (item != undefined) {
//         _.each(UBSHoldingExcelHeaderAttributes, function(value) {

//             if (value.header == 'Holding Value currency code' + ' SUBBAL1') {
//                 console.log('insdie true', value.header)
//             }


//             dataObject[value.keys] = item[value.header];
//         });

//         if (!_.isEmpty(dataObject)) {
//             dataObject.totalInvestedAmount = 1233;
//             dataObject.serviceProviderName = 'UBS';
//             dataToProcess.push(dataObject);
//         }
//     }

// })



//
// let objKeys = record[0];

//    console.log(record.length)

// let data = record.splice(1);
//     let finalData=[];

//    for(let key in objKeys){
//        // console.log(key)
//    }

//    console.log(data.length)

// _.each(data, item => {
//     let ubsObj = {};
//     for (let key in objKeys) {
//         ubsObj[objKeys[key]] = item[key]
//     }
//     finalData.push(ubsObj)

// });
// console.log('finalData',finalData)


let obj = {};
// console.log('obj', obj.length)


let mdate = moment("2019-05-30T18:30:00.000Z").subtract(7, "days");
// console.log(mdate)

// var async = require('async');
var count = 0;
var functionData = { some: 'dat a' };


// async.retry({ times: 25, interval: 1000 }, myFunction.bind(functionData), function(err, results) {
//     console.log("===================================")
//     console.log("Async function finished processing")
//     return;
// });
// var x = {
//     key: 1,
//     key2: function() {
//         console.log('inside value for key 2')
//     }
// }

// console.log(path.resolve())

// x.key2()
let alpha = ['a', 'sd', 'fd', 'g', 'c', 'bb'];

let numbers = [1, 2, 4, 7, 0, 1, 1, 2, 111, 1, 1, 1];

let x = [{ a: 33 }, { a: 2 }, { a: 3 }];


// console.log('INdex', x.findIndex(valueGreaterThan2));

function valueGreaterThan2(e, i, array) {
    // if(){
    // console.log('e.a==>', e.a, 'e', e, 'i', i, 'array', array, 'e.a == 33', e.a == 33)
    if (e.a == 33) {
        // console.log()
        var index = { "key": i };
        return index;

    }
    // return ;
}


// let yy=[{a:1},{a:2},{a:3}]
// console.log(_.find(yy,item=>{
//   return item.a>2
// }))


// tenure

// risk profile with respect to account id

// investment amount (LUMPSUM)




// ive split the invsntment amount  15000 into 8 categories now 4 for equity and 4 for debt
// and ive got some amount for each category
// now if the amount in any category falls below 5000 then  assign that amount to priotiry 1 category ?



// cat 1 PR 1  5400    surplus 400  remaining 0                                                                 cat 1 PR 1 5000 + cat 3 PR 3 900=5900
// cat 2 PR 2  3300    surplus 0    remaining 1700  cat 1 PR 1 400 +  cat 2 PR 2 3300 + cat 3 PR 3 1300 =5000
// cat 3 PR 3  2200    surplus 0    remaining 2800  cat 3 PR 3 900
// cat 4 PR 4  0       surplus 0    remaining 5000


// cat 1 PR 1  3600    surplus 0    remaining 1400     cat 1 PR 1 3600 + cat 3 PR 3 5400 =9000
// cat 2 PR 2  0       surplus 0    remaining 0
// cat 3 PR 3  5400    surplus 400  remaining 0        cat 3 PR 3 0
// cat 4 PR 4  0       surplus 0    remaining 0


// cat 1 PR 1  5400    surplus 400  remaining 0
// cat 2 PR 2  3300    surplus 0    remaining 1700
// cat 3 PR 3  2200    surplus 0    remaining 2800
// cat 4 PR 4  0       surplus 0    remaining 5000

// cat 1 PR 1  5400    surplus 400  remaining 0
// cat 2 PR 2  6600    surplus 0    remaining 1700
// cat 3 PR 3  5700    surplus 0    remaining 2800
// cat 4 PR 4  8888    surplus 0    remaining 5000







// Sample code to perform I/O:

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");
// var stdin_input = "";

// process.stdin.on("data", function (input) {
//     stdin_input += input;                               // Reading input from STDIN
// });

// process.stdin.on("end", function () {
//    main(stdin_input);
// });

// function main(input) {
//     process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
// }

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here


//var mapData=[]
