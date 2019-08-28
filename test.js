// iconsole.log("hello world");

var _ = require("lodash");
var moment = require("moment");
var Promise = require("bluebird");
// const fs = require('fs');
const path = require('path');


const fs = require('fs');
// const doAsync = require('dpoasyn);

const arr = [1, 2, 3, 4, 5];

console.log(arr.splice(1))
let spawn = require('child_process').spawn

const os = require('os');


const dir = os.homedir() + '../node_modules';
const ls = spawn("ls", [process.cwd()]);

let ex = '90025';
let str = 'AVQ.SG.3RDP.LIGHTHOUSE.TRANS_20190801.csv';
// console.log('str includes',str.includes('TRANS'));
var check = 0;
// var data;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var debtAsset = {
    "weightage": 0.5,
    "priority": 2,
    "id": 45,
    "isActive": true,
    "createdDate": "2019-08-20T08:18:09.000Z",
    "lastModifiedDate": "2019-08-20T08:18:09.000Z",
    "modelPortfolioId": 23,
    "assetId": 4,
    "investmentAmount": 250000,
    "numberOfSchemes": 4,
    "categories": [{
            "weightage": 0.65,
            "priority": 1,
            "id": 177,
            "isActive": true,
            "createdDate": "2019-08-20T08:18:56.000Z",
            "lastModifiedDate": "2019-08-20T08:18:56.000Z",
            "modelPortfolioId": 23,
            "instrumentCategoryId": 54,
            "modelPortfolioAssetId": 45,
            "modelPortfolioProductId": null,
            "investmentAmount": 162500,
            "schemes": [{
                    "amount": 75000
                },
                {
                    "amount": 75000
                },
                {
                    "amount": 12500
                }
            ],
            "NumberOfSchemesToShow": 3
        },
        {
            "weightage": 0.2,
            "priority": 2,
            "id": 178,
            "isActive": true,
            "createdDate": "2019-08-20T08:18:56.000Z",
            "lastModifiedDate": "2019-08-20T08:18:56.000Z",
            "modelPortfolioId": 23,
            "instrumentCategoryId": 53,
            "modelPortfolioAssetId": 45,
            "modelPortfolioProductId": null,
            "investmentAmount": 50000,
            "schemes": [{
                "amount": 50000
            }],
            "NumberOfSchemesToShow": 1
        },
        {
            "weightage": 0.15,
            "priority": 4,
            "id": 180,
            "isActive": true,
            "createdDate": "2019-08-20T08:18:56.000Z",
            "lastModifiedDate": "2019-08-20T08:18:56.000Z",
            "modelPortfolioId": 23,
            "instrumentCategoryId": 22,
            "modelPortfolioAssetId": 45,
            "modelPortfolioProductId": null,
            "investmentAmount": 37500,
            "schemes": [{
                "amount": 37500
            }],
            "NumberOfSchemesToShow": 1
        }
    ],
    "numberOfCategories": 3,
    "additionalAmountToRebase": 0,
    "weightageForRebase": 1
};


var debtArrArr = [
    [{
            "weightage": 0.8,
            "priority": 1,
            "id": 7,
            "isActive": true,
            "createdDate": "2019-08-20T08:20:15.000Z",
            "lastModifiedDate": "2019-08-20T08:20:15.000Z",
            "instrumentId": 79512,
            "modelPortfolioId": 23,
            "modelPortfolioCategoryId": 177,
            "modelPortfolioAssetId": 45,
            "modelPortfolioProductId": null
        },
        {
            "weightage": 0.2,
            "priority": 2,
            "id": 8,
            "isActive": true,
            "createdDate": "2019-08-20T08:20:15.000Z",
            "lastModifiedDate": "2019-08-20T08:20:15.000Z",
            "instrumentId": 62774,
            "modelPortfolioId": 23,
            "modelPortfolioCategoryId": 177,
            "modelPortfolioAssetId": 45,
            "modelPortfolioProductId": null
        }
    ],
    [{
            "weightage": 0.2,
            "priority": 1,
            "id": 10,
            "isActive": true,
            "createdDate": "2019-08-20T08:20:15.000Z",
            "lastModifiedDate": "2019-08-20T08:20:15.000Z",
            "instrumentId": 62774,
            "modelPortfolioId": 23,
            "modelPortfolioCategoryId": 178,
            "modelPortfolioAssetId": 45,
            "modelPortfolioProductId": null
        },
        {
            "weightage": 0.2,
            "priority": 3,
            "id": 6,
            "isActive": true,
            "createdDate": "2019-08-20T08:20:15.000Z",
            "lastModifiedDate": "2019-08-20T08:20:15.000Z",
            "instrumentId": 62774,
            "modelPortfolioId": 23,
            "modelPortfolioCategoryId": 178,
            "modelPortfolioAssetId": 45,
            "modelPortfolioProductId": null
        }
    ],
    []
];
// console.log(debtAsset.categories)
let azzz = { 'abc': 123 };
let bzzz = { 'def': 456, 'vvv': 567 };



    console.log(JSON.stringify(debtAsset,null,2))
// console.log('azzz',azzz)

let hashSet = new Set();

hashSet.add('123-das');
hashSet.add('123=dsa');
hashSet.add('123-das');
hashSet.add(4);

// console.log('hashSet',hashSet.has('123-das'))
   // let



// console.log(JSON.stringify(debtAsset, null, 2))


     //  _.each(_.get(debtAsset, 'categories'), (catItem, catInd) => {.  //working
 //     _.zipWith(catItem.schemes, debtArrArr[catInd], function(a, b, c) {
 //         return a && b ? Object.assign(a, b) : a;
 //     })
 // })

// Object.keys(debtAsset).map((keys)=>{      //working
//     if(debtAsset['categories']){
//         _.forEach(debtAsset['categories'],(catItem,catIndex)=>{
//                 _.forEach(catItem.schemes,(schItem,schInd)=>{
//                     if(debtArrArr[catIndex][schInd] && catItem.id==debtArrArr[catIndex][schInd].modelPortfolioCategoryId &&
//                         catItem.modelPortfolioAssetId == debtArrArr[catIndex][schInd].modelPortfolioAssetId){
//                              Object.assign(schItem, debtArrArr[catIndex][schInd])
//                     }
//                 })
//         })
//     }
// })
// _.forEach(debtArr, debtItem => {

// })

// console.log(eachcategory.id, debtItem.modelPortfolioCategoryId, 'index', index)
// if(debtItem && eachcategory.id==debtItem.modelPortfolioCategoryId && eachcategory.modelPortfolioAssetId==debtItem.modelPortfolioAssetId){
// && eachcategory.modelPortfolioAssetId==debtItem.modelPortfolioAssetId){

//                debtArr= debtArr.reduce((acc,curArr)=>{
//                     return curArr.length>0? neglectIds.indexOf()> -1:  neglectIds.push(curObj.id)
//                 },[])
//   Object.assign(schemeItem,debtItem)
// console.log('debtItem',debtItem)
// debtArr=_.filter(debtArr,item=>!item.id)

// debtArr= debtArr.length==index? debtArr.splice(index+1):debtArr
// console.log('debtArr',debtArr)

// }



//         console.log(schemeItem)
//     _.each(debtAddetArr,debtArrArr=>{
//         console.log(debtArrArr)
//         _.each(debtArrArr,(eachObj,index)=>{
//             console.log('eachObj',eachObj)
//                 Object.assign(eachObj,schemeItem)
//            debtAddetArr=debtArrArr.splice(index+1);
//         })
//     })
// })
// }
//
// console.log(debtAsset.categories.schemes)




















// check?console.log('true'):console.log('false');

// var whiteSpaceVariable=' ';
//    whiteSpaceVariable= whiteSpaceVariable.trim();

// var downloadEmailAttachments = require('download-email-attachments');

// var onEnd = function (result) {
//   if (result.error) {
//     console.log(result.error)
//     return
//   }
//   console.log("done")
//   console.log(result.latestTime)
// }

// downloadEmailAttachments({
//   invalidChars: /[^A-Z]/g, //Regex of Characters that are invalid and will be replaced by X
//   account: '"lit2015013@iiitl.ac.in":Saurabh1999*@imap.gmail.com:993', // all options and params besides account are optional
//   directory: './',
//   // filenameTemplate: '{day}-{filename}',
//   filenameFilter: /.xlsx?$/,
//   timeout: 3000,
//   log: {warn: console.warn, debug: console.info,  info: console.info },
//   since: '2015-01-12',
//   // lastSyncIds: ['234', '234', '5345'], // ids already dowloaded and ignored, helpful because since is only supporting dates without time
//   attachmentHandler: function (attachmentData, callback, errorCB) {
//     console.log(attachmentData)
//     callback()
//   }
// }, onEnd)
// console.log('data',data)

// var shell = require('shelljs');
//     let lsout=shell.ls('-R','/Users/admin/work/code/work/wealthfy/server/wealthfyfiles/holdingfiles/');
//     console.log(lsout)


//     const exec = require('child_process').exec;
// const child = exec('../test/hw.sh', (error, stdout, stderr) => {
//         console.log(stdout);
//         console.log(stderr);
//         if (error !== null) {
//             console.log(`exec error: ${error}`);
//         }
// });
// shell.ls( '/Users/admin/work/code/work/wealthfy/server/wealthfyfiles/holdingfiles/Positions_23Aug.xls');
// const readXlsxFile = require('read-excel-file/node');

// File path.
// readXlsxFile('/Users/admin/work/code/work/wealthfy/server/wealthfyfiles/holdingfiles/Positions_23Aug.xls',{ sheet: 'Sheet1' })
// .then((rows,error) => {
//         // if(error){
//         //     console.log(error)
//         // }
//       // `rows` is an array of rows
//   // each row being an array of cells.
//   console.log(rows)
// }).catch()

// Readable Stream.


// let headerObj;finalArr=[];
// for (let i = 0; i < data.length; i++) {
//     if (Object.keys(data[i]).length > 100 && data[i]['field1']=='Asset code' && !headerObj) {
//         headerObj=data[i];
//             finalArr.push(headerObj);
//     } else if (Object.keys(data[i]).length > 100 && headerObj) {
//             finalArr.push(data[i])
//     }
// }

// let testarr=[1,2,3,34,5,6];
// let newtestArr=testarr.slice(1,4);
// console.log(JSON.stringify(finalArr,null,2));


// _.each(data, (item, index) => {

//     if (item.field1 && item.field1 == 'Asset code') {
//         data = data.splice(index+1, data.length);
//         console.log(data.length)
//         console.log('true inside Asset code data.length', data.length)

//     } else {
//         if (Object.keys(item).length > 100) {
//             console.log('true')
//         }
//     }
// });




























// whiteSpaceVariable?console.log('whiteSpaceVariable'):console.log('whiteSpaceVariable2');
//     console.log(_.uniq([1,2,3,4,5,5]));
// console.log('difference',_.difference([1,2,3,4,5,5], [1,3]));

//     // console.log('union',_.union([],[]));

// let arrayToReturn=[1,2,3,1,1,1];

//     let str='AVQ.SG.3RDP.LIGHTHOUSE.POS_20190801.csv';

//     console.log('date',moment(str.split('_')[1].split('.')[0],'YYYYMMDD').format('YYYY-MM-DD'));


// arrayToReturn=_.map(arrayToReturn,item=>{
//     if(item>1){
//         return item
//     }

// })


//     console.log('arrayToReturn',arrayToReturn)

// let fileList = [];
// let fileArray=[]

// ls.stdout.on("data", function(data) {

//     fileList = data.toString().split('\n');

//     console.log('fileList',fileList)
//     _.each(fileList, item => {
//         if (item.includes('ZAH')) {
//             // console.log(item)
//             fileArray.push(item);
//         }
//     })

// });

// ls.stderr.on("data", function(data) {

//      reject()
//   //  fileList = data.toString().split('\n');
//    // console.log('insdie stderr',fileList);
// });

// ls.on("close", function(code) {
//     console.log(`child process exited with code ${code}`);
// });








































// doAsync(fs).readFile('package.json', 'utf8')
//   .then(result => {
//     console.dir(JSON.parse(result), {colors: true});
//   });
//  ../../../ubuntu/wealthfyfiles/holdingfiles/
// /home/ubuntu/wealthfyfiles/holdingfiles/
///home/ubuntu/UBS/XYZ
// let str='M006_POS_lghths-sg_20190719_01.xml';
// console.log()
//                    scp source   dest
// scp    ubuntu@lighthouse-uat:/home/ubuntu/UBS/XYZ/20190606125737257_ZAF_download.txt  /var/lib/jenkins

// const dl = require('download-file-with-progressbar');

// option = {
//     filename: 'the filename to store, default = path.basename(YOUR_URL) || "unknowfilename"',
//     dir: 'the folder to store, default = os.tmpdir()',
//     onDone: (info)=>{
//         console.log('done', info);
//     },
//     onError: (err) => {
//         console.log('error', err);
//     },
//     onProgress: (curr, total) => {
//         console.log('progress', (curr / total * 100).toFixed(2) + '%');
//     },
// }

// var dd = dl('YOUR_URL', option);

// dd.abort()




// to abort the download
// console.log(moment(1497052800000).format("YYYY-MM-DD"))

// console.log(moment(1497225600000).format("YYYY-MM-DD"))


// let letA = [
//   "0546008610090001",
//   "0546008610090001",
//   "0546008610090001",
//   "0546008610090001",
//   "0546008610090001",
//   "0546008610090001",
//   "0546008610090001",
//   "0546008610090001",
//   "0546008610090001",
//   "0546008610090001",
//   "0546008610090001",
//   "0546008610090001",
//   "0546008610090001",
//   "0546008610090001",
//   "0546008610090001",
//   "0546008610090001",
//   "0546008610090003",
//   "0546008610090003",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546008662250001",
//   "0546001337330001",
//   "0546001337330001",
//   "0546001337330001",
//   "0546001337330001",
//   "0546001337330001",
//   "0546001337330001",
//   "0546001337330001",
//   "0546001337330001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008326930001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008662130001",
//   "0546008672750001",
//   "0546008672750001",
//   "0546008672750001",
//   "0546008672750001",
//   "0546008672750001",
//   "0546008672750001",
//   "0546008672750001",
//   "0546008672750001"
// ]

// console.log(_.union(letA))
// console.log('new Date()',new Date())

let a = 1,
    b = 2,
    c = 3;
// console.log({ a, b, c })

// console.log(moment(1562739073000).utc().format('YYYY-MM-DD HH:mm:ss'))
let obj = {};

let item = {
    hldPos: {
        //     posnQty: 2,
        //     hldId: {
        //         asstDetail: {
        //             prcFactor: 1
        //         }
        //     }
    }
};


// if (item.hldPos && item.hldPos.posnQty && item.hldPos.hldId && item.hldPos.hldId.asstDetail && item.hldPos.hldId.asstDetail.prcFactor) {
//     obj.quantity = item.hldPos.posnQty * item.hldPos.hldId.asstDetail.prcFactor;
// } else if (item.hldPos && !item.hldPos.posnQty) {
//     console.log('insdie else if')
//     obj.quantity = item.hldPos.posnQty;
// } else {
//     obj.quantity = 0;
// }

// console.log(obj)

let mat = '3.08 % TIME LOANS MAT 31/07/19 coupon 3.08';

// console.log(Number(mat.split('%')[0].trim()));
//
// console.log('###', moment(mat.split('MAT ')[1].split(' ')[0].trim(), 'DD-MM-YYYY').format('YYYY-MM-DD'))
// let str = "accountNumber": "DEMAND IB ACCOUNT - 6225780300";
// let str1 = "accountNumber": "DEMAND IB ACCOUNT - 6525780401##Interest 01 MAR 2019 - 26 MAR 2019",
obj = {
    "1": {
        "_": "19930049",
        "$": {
            "refType": "Valor"
        }
    },
    "0": {
        "_": "IE00B84J9L26",
        "$": {
            "refType": "BSIN"
        }
    },
    "2": {
        "_": "000064235309",
        "$": {
            "refType": "ZARA"
        }
    },
    "3": {
        "_": "000064235309",
        "$": {
            "refType": "AARA"
        }
    }
}; //[3,2,1]
// function sortObjectKeys(obj) {
//     return Object.keys(obj).sort().reduce((acc, key) => {
//         if (Array.isArray(obj[key])) {
//             acc[key] = obj[key].map(sortObjectKeys);
//         }
//         if (typeof obj[key] === 'object') {
//             acc[key] = sortObjectKeys(obj[key]);
//         } else {
//             acc[key] = obj[key];
//         }
//         return acc;
//     }, {});
// }

// test it
obj = {
    telephone: '069911234124',
    name: 'Lola',
    access: true,
    cars: [{
            name: 'Family',
            brand: 'Volvo',
            cc: 1600
        },
        {
            name: 'City',
            brand: 'VW',
            cc: 1200,
            interior: {
                wheel: 'plastic',
                radio: 'blaupunkt'
            }
        },
        {
            cc: 2600,
            name: 'Killer',
            brand: 'Plymouth',
            interior: {
                wheel: 'wooden',
                radio: 'earache!'
            }
        }
    ]
};
// console.log(JSON.stringify(sortObjectKeys(obj), null, 2))
// console.log(Object.values(obj).sort((a,b)=> a['$'].refType>b['$'].refType))
// (function(s){var t={};Object.keys(s).sort().forEach(function(k){t[k]=s[k]});return t})({b:2,a:1,c:3})


// nestedSort = (prop1, prop2 = null, direction = 'asc') => (e1, e2) => {
//     const a = prop2 ? e1[prop1][prop2] : e1[prop1],
//         b = prop2 ? e2[prop1][prop2] : e2[prop1],
//         sortOrder = direction === "asc" ? 1 : -1
//     return (a < b) ? -sortOrder : (a > b) ? sortOrder : 0;
// }

// let sortedValue = Object.values(obj).sort((a, b) => { return a['$'].refType > b['$'].refType ? 1 : a['$'].refType < b['$'].refType ? -1 : 0; });

// console.log(sortedValue)


// var array = [{ fruit: 'Tomato' }, { fruit: 'Banana' }, { fruit: 'Apple' }, { fruit: 'Orange' }]
// array.sort(function(a, b) {
//     //return (a.fruit < b.fruit ? -1 : (a.fruit > b.fruit ? 1 : 0));
//     return a.fruit < b.fruit ? 1 : a.fruit > b.fruit ? -1 : 0; //if a > b then swap =1 if a is less then swap =-1  else 0 no swap
// })


// console.log(array)

// {
//     '1': { _: '19930049', '$': { refType: 'Valor' } },
//     '2': { _: '000064235309', '$': { refType: 'SARA' } }
// }
// let unicode = '5.625% Electricit� de France EDF Notes 2014-Perpetual Reg-S';
// console.log(unicode.replace(/[^\x00-\x7F]/g, ""));

// { _: 'USD', '$': { refType: 'CURRENCY' } }



// let ISIN, sspc;
// ISIN = _.map(obj, (v, k) => {
//     if (v['$'] && v['$'].refType == 'ISIN') {

//         return v['_'];
//     }
// }).filter(item => {
//     return item;
// })[0];

// let arr = arr// let sortedValue;
// console.log('ISIN', ISIN)
// if (!ISIN) {

// }
// console.log('sortedValue', sortedValue)
// [objs].sort(nestedSort("moreDetails", "age"));


// }

// console.log(str.replace(/##/g, ' '))



var param = {
    "startTransfer": {
        "version": "2",
        "uniqueRequestNo": "Vishwa40141",
        "appID": "453733",
        "customerID": "453733",
        "debitAccountNo": "000190600017042",
        "beneficiary": {

            "beneficiaryDetail": {


                "beneficiaryName": {

                    "fullName": "Motilal Oswal  LTD"
                },
                "beneficiaryAddress": {

                    "address1": "IFC",
                    "country": "IN"
                },
                "beneficiaryContact": {
                    "mobileNo": "919920655985",
                    "emailID": "XYZ@MS.com"
                },
                "beneficiaryAccountNo": "200300000824",
                "beneficiaryIFSC": "ICIC00PCTBL",
            }
        },
        "transferType": "IMPS",
        "transferCurrencyCode": "INR",
        "transferAmount": "1000",
        "remitterToBeneficiaryInfo": "FUND TRANSFER"
    }
};




var getBalance = {
    "getBalance": {
        "version": "2",
        "appID": "453733",
        "customerID": "453733",
        "AccountNumber": "188201500403"
    }
};


var getStatus = {
    "getStatus": {
        "version": "1",
        "appID": "453733",
        "customerID": "453733",
        "requestReferenceNo": "Vishwa40145"
    }
};

// const fs = require('fs')
// , path = require('path')
// let certFile = path.resolve(__dirname, 'ysl-uat.crt');
// let keyFile = path.resolve(__dirname, 'ysl-uat.key');
// let UserId = 'testclient';
// let Password = 'OxYcool@123';
// let request = require('request');
// let auth = new Buffer(UserId + ':' + Password).toString('base64');
// const options = {
//     url: 'https://uatsky.yesbank.in:444/app/uat/fundtransfer2R/startTransfer',
//     // url: 'https://uatsky.yesbank.in:444/app/uat/fundtransfer2R/getbalance',
//     // url: 'https://uatsky.yesbank.in:444/app/uat/fundtransfer2R/getstatus',
//     // auth: {
//     //     username: 'testclient',
//     //     password: 'OxYcool@123'
//     // },
//     headers: {
//         "Content-Type": "application/json",
//         Authorization: 'Basic ' + auth,
//         "X-IBM-Client-Id": "6f4458b7-abdd-4de6-a11c-015c3ac33940",
//         // "UserId": "testclient",
//         "X-IBM-Client-Secret": "jM4jP0aT0wG1rP5kR0jS8gT4sO7jD2xA3dQ3lG7bC5mJ4pM7oR",
//         // "Password": "OxYcool@123"
//     },
//     agentOptions: {
//         cert: fs.readFileSync(certFile),
//         key: fs.readFileSync(keyFile),
//     },

//     // Or use `pfx` property replacing `cert` and `key` when using private key, certificate and CA certs in PFX or PKCS12 format:
//     // pfx: fs.readFileSync(pfxFilePath),
//     // passphrase: 'OxYcool@123',
//     // securityOptions: 'SSL_OP_NO_SSLv3',

//     json: true,
//     // form: param
//     // body: getStatus
//     body: param

// };

// request.post(options, function(error, response, body) {


// console.log('response==>', JSON.stringify(response, null, 2))
// if (response.statusCode == 201) {
// console.log('document saved as',+response)
// } else {
// console.log('response',response)

// console.log('URL: ' + response['request'].uri.href)
// console.log('headers :' + JSON.stringify(response['request'].headers, null, 2))
// console.log('Response: ' + JSON.parse(response.body,null,2))
// let reponseData = JSON.parse(response.body, null, 2);
// console.log('reponseData', reponseData)

// console.log(body)
// }
// });


// {
//     "Fault": {
//         "Code": {
//             "Value": "soapenv12:Sender",
//             "Subcode": {
//                 "Value": "ns:E400",
//                 "Subcode": { "Value": "iib:E5016" }
//             }
//         },
//         "Reason": { "Text": "Bad Request" },
//         "Detail": {
//             "MessageList": ",uniqueRequestNo[12345678940000],fieldType",
//             "ExceptionList": {
//                 "RecoverableException": {
//                     "File": "/build/slot3/S1000_P/src/DataFlowEngine/PluginInterface/ImbJniNode.cpp",
//                     "Line": 1267,
//                     "Function": "ImbJniNode::evaluate",
//                     "Type": "ComIbmJavaComputeNode",
//                     "Name": "gen/fundsTransferByCustomerMobileService2#FCMComposite_1_1.wla/HTTPInputJSONHandler2#FCMComposite_1_1.wla/HTTPInputJSONHandler#FCMComposite_1_2",
//                     "Label": "gen.fundsTransferByCustomerMobileService2.HTTPInputJSONHandler2.HTTPInputJSONHandler.JSON2XML",
//                     "Catalog": "BIPmsgs",
//                     "Severity": 3,
//                     "Number": 2230,
//                     "Text": "Caught exception and rethrowing",
//                     "Insert": { "Type": 14, "Text": "gen.fundsTransferByCustomerMobileService2.HTTPInputJSONHandler2.HTTPInputJSONHandler.JSON2XML" },
//                     "RecoverableException": {
//                         "File": "/build/slot3/S1000_P/src/DataFlowEngine/BasicNodes/ImbCheckNode.cpp",
//                         "Line": 424,
//                         "Function": "ImbValidateNode::evaluate",
//                         "Type": "ComIbmValidateNode",
//                         "Name": "gen/fundsTransferByCustomerMobileService2#FCMComposite_1_1.wla/HTTPInputJSONHandler2#FCMComposite_1_1.wla/HTTPInputJSONHandler#FCMComposite_1_4",
//                         "Label": "gen.fundsTransferByCustomerMobileService2.HTTPInputJSONHandler2.HTTPInputJSONHandler.Validate",
//                         "Catalog": "BIPmsgs",
//                         "Severity": 3,
//                         "Number": 2230,
//                         "Text": "Caught exception and rethrowing",
//                         "Insert": { "Type": 14, "Text": "gen.fundsTransferByCustomerMobileService2.HTTPInputJSONHandler2.HTTPInputJSONHandler.Validate" },
//                         "ParserException": { "File": "/build/slot3/S1000_P/src/MTI/MTIforBroker/GenXmlParser4/ImbXMLNSCParser.cpp", "Line": 939, "Function": "ImbXMLNSCParser::refreshBitStreamFromElementsCommon", "Type": "ComIbmWSInputNode", "Name": "gen/fundsTransferByCustomerMobileService2#FCMComposite_1_19", "Label": "gen.fundsTransferByCustomerMobileService2.HTTP Input", "Catalog": "BIPmsgs", "Severity": 3, "Number": 5010, "Text": "XML Writing Errors have occurred", "ParserException": { "File": "/build/slot3/S1000_P/src/MTI/MTIforBroker/GenXmlParser4/ImbXMLNSCWriter.cpp", "Line": 1015, "Function": "ImbXMLNSCWriter::writeMisc", "Type": "", "Name": "", "Label": "", "Catalog": "BIPmsgs", "Severity": 3, "Number": 5016, "Text": "Unexpected XML type at this point in document.", "Insert": [{ "Type": 5, "Text": "uniqueRequestNo[12345678940000]" }, { "Type": 5, "Text": "fieldType" }] } }
//                     }
//                 }
//             }
//         }
//     }
// }
//nou found

// Dadra and Nagar Haveli



// console.log(data)
// const a=[];
// a.push("b");
// console.log(a);ı
// or import promiseEach from "promise-each-concurrency";



// function fileWriteSync(filePath) {

//     var fd = fs.openSync(filePath, 'w');

//     var codingArray = ['Java', 'JavaScript', 'C++', 'C', 'C#', 'Node JS'];

//     var length = codingArray.length;

//     for(var i=0;i<length; i++)

//     {
//         var bytes = fs.writeSync(fd, codingArray[i] + '\n', null, null);

//         console.log('Write string %s which is %d bytes.', codingArray[i], bytes);
//     }

//     fs.closeSync(fd);
// }

// let amount = 500;
// let arr2 = [1, 2, 3, 4,4,4,4111111,4,4,3,1,1,1];
// // console.log(arr1.concat(arr2))
// let variableScope = 0;


// let data = 'May 30 2019 12/:00AM'


// console.log(moment(data).format('MMM DD YYYY hh:mmA'))
// let data=[{'SC_CODE': 'scCode',
//     'DATE': 'priceDate',
//     'ST_EXCHNG': 'stExchange',
//     'CO_CODE': 'coCode',
//     'HIGH': 'highPrice',
//     'LOW': 'lowPrice',
//     'OPEN': 'openPrice',
//     'CLOSE': 'closePrice'}]

// let newKey={
//     'SC_CODE': '1',
//     'DATE': '2',
//     'ST_EXCHNG': '3',
//     'CLOSE': '4'

//   };

// data.forEach( function(element, index) {

//        for(let key in element){
//            element[newKey[key]]=element[key];

//            delete key;
//        }
// });
// console.log(data)

// 'HIGH': 'highPrice',
//     'LOW': 'lowPrice',
//     'OPEN': 'openPrice',
//     'CLOSE': 'closePrice'

// let data={ '"505021"|"5021"|"A.P.SCOOTERS"|"B"|"D"|""|""|""|""|""|""|""|""|""|""|""|""|""|"2"|"AP Scooters"|"Andhra Pradesh Scooters Ltd(liquidated)"|"APSCOOTERS"|"+505021+5021+AP Scooters+APSCOOTERS+2+A.P.SCOOTERS+Andhra Pradesh Scooters Ltd(liquidated)+"|"*"|"*"|"Automobiles - Scooters And 3 - Wheelers"|"Auto-Scooter/3Wh"|"00000008"|"Escorts"|"Escorts"|"ED"|""|""|""|""|""|""|""|""|""|""|""|""|""|""|""|""|""|"*"|""|""|""|"0"|"10.66"|"10"|"1"|"BSE"|""|"APSC IN"|""|"in;APS"|""|""|""|"00000014"|""|""|""|""|""|""|""|""|""|""|""|""|"Automobile"|""<</EOR>>': '"532752"|""|"APOLLO SINDOORI HOTE"|""|""|""|""|""|""|""|""|""|""|""|""|""|""|""|"24625"|"Apollo Sindoori"|"Apollo Sindoori Hotels Ltd"|"APOLSINHOT"|"+532752+Apollo Sindoori+APOLSINHOT+APOLLOSINDOORI+24625+APOLLO SINDOORI HOTEL LTD+Apollo Sindoori Hotels Ltd+"|"*"|"*"|"Hotels"|"Hotels"|"00000057"|"Apollo Hospitals"|"Apollo Hospitals"|"APP"|"APOLSINHOT"|""|""|"EQ"|"EQ"|""|""|""|""|""|""|""|""|""|""|""|""|""|""|""|"04/05/2019 12:00:00 AM"|"0"|"1.3"|"5"|"1"|"NSE"|"INE451F01024"|"APOL IN"|""|""|""|""|""|"00000170"|""|""|""|""|""|""|""|""|""|""|""|""|"Hotels & Restaurants"|""<</EOR>>' }


// console.log(data.split('|'));
// let pushData=[];
// data=JSON.stringify(data,null,2);
// // console.log(data.split('|'))
// data=data.split('|');

//     _.forEach(data, function(item, index) {
//         item=item.replace(/\\/g,"")
//         // pushData.push(item)

//         console.log(item.split('<</EOR>>'))

//     });
// console.log('pushData',JSON.stringify(pushData,null,2))
// function main() {
//code omitted

//get result
// let result = getResultsUsingArrayShift();
// console.log('result',result)
//code omitted
// }

// console.log(sortByFrequency(arr2));


//sort by frequency

// function sortByFrequency(array) {
//     var frequency = {};
//     var sortAble = [];
//     var newArr = [];

//     array.forEach(function(value) {
//         if ( value in frequency )
//             frequency[value] = frequency[value] + 1;
//         else
//             frequency[value] = 1;
//     });
//     console.log('frequency',frequency)

//     for(var key in frequency){
//         sortAble.push([key, frequency[key]])
//     }

//     console.log('sortAble',sortAble)

//     sortAble.sort(function(a, b){
//         return b[1] - a[1]
//     })


//     sortAble.forEach(function(obj){
//         for(var i=0; i < obj[1]; i++){
//             newArr.push(obj[0]);
//         }
//     })
//     return newArr;

// }

//rotate array

// function getResultsUsingArrayShift() {
//   let temp = arr2.slice(0);
//   console.log('temp',temp)
//   for (let i=0; i<3; i++) {
//     let first = temp.shift();
//     console.log('first',first)
//     temp.push(first);
//   }
//   return temp;
// }

// main();
// function scope(){

//     var data=100;
//     underScope();
//     function underScope(){
//         let data=10;
//      console.log('data',data)
//     }
//     console.log('outsideScope',data)
// }
//     scope();





// fileWriteSync('coding.txt');
// let data;
// data = [{
//         "weightage": 0,
//         "priority": 1,
//         "id": 1,
//         "assetId": 5,
//         "assetAmount": 15000,
//         "allocatedAmount": 5000, //4600
//         "newWeightage": 0.6,
//         "modelPortfolioAsset": {
//             "weightage": 0.6,
//             "assetId": 5
//         }
//     },
//     {
//         "weightage": 0.6,
//         "priority": 2,
//         "id": 2,
//         "assetId": 5,
//         "assetAmount": 15000,
//         "allocatedAmount": 0, //
//         "newWeightage": 0.6,
//         "modelPortfolioAsset": {
//             "weightage": 0.6,
//             "assetId": 5
//         }
//     },
//     {
//         "weightage": 0.1,
//         "priority": 3,
//         "id": 3,
//         "assetId": 5,
//         "assetAmount": 15000,
//         "allocatedAmount": 1300,
//         "newWeightage": 0.6,
//         "modelPortfolioAsset": {
//             "weightage": 0.6,
//             "assetId": 5
//         }
//     },
//     {
//         "weightage": 0.3,
//         "priority": 4,
//         "id": 4,
//         "assetId": 5,
//         "assetAmount": 15000,
//         "allocatedAmount": 700,
//         "newWeightage": 0.6,
//         "modelPortfolioAsset": {
//             "weightage": 0.6,
//             "assetId": 5
//         }
//     },
//     {
//         "weightage": 0.6,
//         "priority": 1,
//         "id": 5,
//         "assetId": 4,
//         "assetAmount": 6000,
//         "allocatedAmount": 3600,
//         "newWeightage": 0.4,
//         "modelPortfolioAsset": {
//             "weightage": 0.4,
//             "assetId": 4
//         }
//     },
//     {
//         "weightage": 0.25,
//         "priority": 2,
//         "id": 6,
//         "assetId": 4,
//         "assetAmount": 6000,
//         "allocatedAmount": 1500,
//         "newWeightage": 0.4,
//         "modelPortfolioAsset": {
//             "weightage": 0.4,
//             "assetId": 4
//         }
//     },
//     {
//         "weightage": 0.15,
//         "priority": 3,
//         "id": 7,
//         "assetId": 4,
//         "assetAmount": 6000,
//         "allocatedAmount": 900,
//         "newWeightage": 0.4,
//         "modelPortfolioAsset": {
//             "weightage": 0.4,
//             "assetId": 4
//         }
//     },
//     {
//         "weightage": 0,
//         "priority": 4,
//         "id": 8,
//         "assetId": 4,
//         "assetAmount": 6000,
//         "allocatedAmount": 0,
//         "newWeightage": 0.4,
//         "modelPortfolioAsset": {
//             "weightage": 0.4,
//             "assetId": 4
//         }
//     }
// ];


// let categoryDebt = [],
//     categoryEquity = [];
// let categoryAmount = 12000;
// let firstIndex = 0;
// let belowThresholdIndex = 0;

// console.log('categoryEquity.length', categoryEquity.length)

// console.log('categoryDebt.length', categoryDebt.length);

// let assetIds = [];

// assetIds = data.map(item => item.assetId)
//     .filter((value, index, self) => self.indexOf(value) === index).sort()

// data = _.groupBy(data, 'assetId');

// // console.log('categoryAmount', categoryAmount)


// for (assetId in data) {

//     if (categoryAmount > 10000) {

//         let thresholdData = assignUptoThreshold(data[assetId], categoryAmount)

//         if (thresholdData.surplusAmount) {

//             let finalData = rebaseWiththreshold(thresholdData.data, thresholdData.surplusAmount, thresholdData.totalWeightage)
//             // console.log('finalData+', finalData)

//         }
//     }
// }

// if (categoryAmount <= 10000) {

//     data = assignToOnlyTopPriority(data['5'], categoryAmount)
// }

// function assignToOnlyTopPriority(data, categoryAmount) {

//     _.each(data, (item, index) => {

//         if (item.weightage > 0 && categoryAmount) {
//             item.allocatedAmount = categoryAmount;
//             categoryAmount -= categoryAmount;
//         } else {
//             item.allocatedAmount = 0
//         }
//         // console.log('item', item)
//         if (index == data.length - 1) {
//             _.each(data, item => {

//                 if (item.allocatedAmount < 5000) {
//                     item.allocatedAmount = 0;
//                 }
//             })
//         }
//     })
//     return data
// }



// function assignUptoThreshold(categoryData, categoryAmount) {
//     let totalWeightage = 0,
//         requiredSurplus = 0;
//     let firstIndex = 0;
//     let nextTopPriorityIndex = 0;
//     let threshold = {};


//     _.each(categoryData, (item, index) => {
//         if (item.weightage == 0) {
//             item.allocatedAmount = 0;
//         }
//         if (categoryAmount >= 5000 && item.weightage > 0) {
//             item.allocatedAmount = 5000;
//             categoryAmount -= 5000;
//             totalWeightage += item.weightage * 100;
//         } else if (item.priority > 1 && item.weightage > 0 && !nextTopPriorityIndex) {
//             nextTopPriorityIndex = index;
//         }

//         if (item.priority > 1 && item.weightage > 0) {

//             if (index == categoryData.length - 1 && nextTopPriorityIndex) {
//                 categoryData[nextTopPriorityIndex].allocatedAmount = requiredSurplus;
//             }
//         }

//         if (index == categoryData.length - 1) {
//             _.each(categoryData, item => {

//                 if (item.allocatedAmount < 5000) {
//                     item.allocatedAmount = 0;
//                 }
//             })
//         }
//     })

//     threshold.data = categoryData;
//     threshold.totalWeightage = totalWeightage;
//     threshold.surplusAmount = categoryAmount;
//     return threshold
// }


// function rebaseWiththreshold(categoryData, surplusAmount, totalWeightage) {
//     let newWeightage = 0;
//     let amountToBeAdded = 0;

//     _.each(categoryData, (item, index) => {
//         if (item.allocatedAmount) {
//             newWeightage = (100 / totalWeightage) * item.weightage;
//             amountToBeAdded = newWeightage * surplusAmount;
//             item.allocatedAmount = item.allocatedAmount + amountToBeAdded;
//         }
//     })
//     return categoryData;
// }








// function assignToTopPriority(firstIndex, belowThresholdIndex, data) {

//     data[firstIndex].allocatedAmount += data[belowThresholdIndex].allocatedAmount;
//     data[belowThresholdIndex].allocatedAmount = 0;
// }

































// function updateItem(i, item, array) {
//     console.log('item', item)
//     array[i].allocatedAmount += item.allocatedAmount;
//     item.allocatedAmount = 0;
//     if (item.requiredAmount) {
//         item.requiredAmount = 0;

//     }
//     if (item.surplusAmount) {
//         item.surplusAmount = 0
//     }
// }




// if (categoryDebt.length == 4 || noOfSchemes == 1) {

//     assignToTopPriority(data['4'], 1, 4, false)
// }


// if (categoryEquity.length == 4 || noOfSchemes == 1) {
//     console.log('insde categoryEquity')

//     assignToTopPriority(data['5'], 1, 5, false)
// }

// if (categoryEquity.length == 3 && data['5'][0].allocatedAmount < 5000) {
//     // console.log(data)
//     // data = _.groupBy(data, 'assetId');
//     callInScenario2(data['5'])
// }

// if (categoryEquity.length == 3 && data['5'][0].allocatedAmount >= 5000) {
//     console.log(JSON.stringify(data, null, 2))
//     // data = _.groupBy(data, 'assetId');
//     assignToNextTopPriority(data['5'])
// }
// if (categoryDebt.length == 3) {

//     callInScenario2(data['4'])
// }

// if (categoryEquity.length == 2 && data['5'][0].allocatedAmount < 5000) {

//     getRequiredSurplus(data['5'])
// }

// if (categoryEquity.length == 1) {

//     getRequiredSurplus(data['5'])

// }


// data = _.map(data, item => {
//     if (item.allocatedAmount < 5000 && item.assetId == 4) {
//         item.requiredAmount = 5000 - item.allocatedAmount;
//         categoryDebt.push(1);

//     } else if (item.assetId == 4) {
//         item.surplusAmount = item.allocatedAmount - 5000;
//     }
//     if (item.allocatedAmount < 5000 && item.assetId == 5) {
//         item.requiredAmount = 5000 - item.allocatedAmount;

//         categoryEquity.push(1);
//     } else if (item.assetId == 5) {
//         item.surplusAmount = item.allocatedAmount - 5000;
//     }
//     return item;
// });





















// function assignToNextTopPriority(categoryData) {
//     let requiredThreshold = 0;
//     arrayOfIndex = [];
//     // console.log('categoryData',categoryData)
//     _.each(categoryData, (item, index) => {
//         // console.log('index', index)
//         if (item.priority > 1 && item.allocatedAmount != 0) {
//             // console.l/og(item)
//             requiredThreshold += item.allocatedAmount;
//             arrayOfIndex.push(index)
//             if (requiredThreshold >= 5000) {
//                 // totalPercent+=item.weightage*100;
//                 surplusAmount = Math.abs(5000 - requiredThreshold)
//                 // console.log('totalPercent',totalPercent,'surplusAmount',surplusAmount)
//                 assignByPriority(categoryData, arrayOfIndex, surplusAmount)
//                 // console.log('arrayOfIndex',arrayOfIndex)
//             }
//         }
//         // else if(item.priority ==1 )
//         // {
//         //    totalPercent+=item.weightage*100;
//         // }
//     })
// }


// function assignByPriority(categoryData, arrayOfIndex, surplusAmount) {
//     console.log('arrayOfIndex', arrayOfIndex)

//     for (let i = 0; i < arrayOfIndex.length; i++) {
//         console.log('i', i)
//         console.log(categoryData[arrayOfIndex[i]], 'RRRR', categoryData[arrayOfIndex[i + 1]])
//         // 'aaaaaaaaa',categoryData[arrayOfIndex[i]].priority<categoryData[arrayOfIndex[i+1]].priority)


//         if (categoryData[arrayOfIndex[i]].priority < categoryData[arrayOfIndex[i + 1]].priority) {
//             categoryData[arrayOfIndex[i]].allocatedAmount += categoryData[arrayOfIndex[i + 1]].allocatedAmount;
//             categoryData[arrayOfIndex[i + 1]].allocatedAmount = 0;
//             categoryData[arrayOfIndex[i]].requiredAmount = 0
//             break;
//         } else {
//             categoryData[arrayOfIndex[i + 1]].allocatedAmount += categoryData[arrayOfIndex[i]].allocatedAmount;
//             categoryData[arrayOfIndex[i]].allocatedAmount = 0;
//             categoryData[arrayOfIndex[i + 1]].requiredAmount = 0
//             break;
//             console.log('insdie else')
//         }
//     }
//     if (surplusAmount > 0) {
//         let totalPercent = 0;
//         _.each(categoryData, item => {
//             if (item.allocatedAmount) {
//                 totalPercent += item.weightage * 100
//             }
//         })
//         _.each(categoryData, item => {
//             if (item.allocatedAmount) {
//                 item.allocatedAmount += (item.allocatedAmount / totalPercent) * item.weightage
//             }
//         })
//         console.log('categoryData', categoryData)
//     }

// }


function callInScenario4(data) {
    // console.log('inside callInScenario4', data)
}


// function getRequiredSurplus(categoryData) {
//     let index = 0,
//         j = 0,
//         firstIndex = 0;
//     let totalItemAmountsRequired = [];
//     requiredSurplus = 0;
//     console.log('data in getRequiredSurplus', categoryData.length)
//     for (j = 0; j < categoryData.length; j++) {
//         // console.log('true',j,index)
//         if (categoryData[j].priority == 1 && categoryData.allocatedAmount < 5000) {
//             firstIndex = j;
//             requiredAmount = categoryData[i].requiredAmount;
//         } else if (categoryData[j].priority != 1 && categoryData[j].surplusAmount) {

//             requiredSurplus += categoryData[j].surplusAmount;
//         }
//         console.log('categoryData[j].id', categoryData[j].id,
//             'requiredSurplus ,categoryData[firstIndex].requiredAmount',
//             requiredSurplus, categoryData[firstIndex].requiredAmount)
//         if (categoryData[j].priority > 1 &&
//             requiredSurplus >= categoryData[firstIndex].requiredAmount) {
//             totalItemAmountsRequired.push(categoryData[j].id)
//             console.log('true', totalItemAmountsRequired)
//             borrow(totalItemAmountsRequired, categoryData, firstIndex)
//             break;
//         } else if (categoryData[j].priority != 1) {
//             totalItemAmountsRequired.push(categoryData[j].id)
//             console.log('fasle')
//         }
//     }
// }

// console.log('data', data)


// function borrow(surplusIds, categoryData, firstIndex) {
//     console.log('surplusId', surplusIds, categoryData.length)
//     let filteredItems;
//     _.map(surplusIds, id => {
//         let item = _.find(categoryData, surplusItem => {
//             return surplusItem.id == id
//         })
//         categoryData[firstIndex].allocatedAmount += item.surplusAmount;
//         categoryData[firstIndex].requiredAmount = 0;
//         item.allocatedAmount -= item.surplusAmount;
//         item.surplusAmount = 0;
//     })
// }



// function assignToTopPriority(value, priority, assetId, scenario2) {
//     if (scenario2 == true) {
//         _.each(value, (item, index) => {
//             if (item.priority == priority && item.assetId == assetId) {
//                 i = index;
//                 item.requiredAmount = 0;
//                 item.surplusAmount = 0
//             } else if ((item.allocatedAmount < 5000 ||
//                     item.allocatedAmount > 5000) &&
//                 item.assetId == assetId) {
//                 updateItem(i, item, value)
//             }
//         });
//     } else {

//         _.each(value, (item, index) => {
//             if (item.priority == priority && item.assetId == assetId) {
//                 i = index;
//                 item.requiredAmount = 0;
//             } else if (item.allocatedAmount < 5000 && item.assetId == assetId) {
//                 updateItem(i, item, value)
//             }
//         });
//     }
// }

// function updateItem(i, item, array) {
//     array[i].allocatedAmount += item.allocatedAmount;
//     item.allocatedAmount = 0;
//     if (item.requiredAmount) {
//         item.requiredAmount = 0;

//     }
//     if (item.surplusAmount) {
//         item.surplusAmount = 0
//     }
// }




// function callInScenario2(categoryWise) {
//     let priorityItem;

//     assignToTopPriority(categoryWise, 1, 5, true)

// }



// console.log(JSON.stringify(data,null,2))





























































































// CONSTRAINT fk_ingredient_list FOREIGN KEY(ingredient_id) REFERENCES ingredient_list(id)

// Promise.map(z,callFunction).then(result=>{
//   return Promise.resolve("done")
// }).catch(err=>{
//   console.log(err)
// })

// SELECT * FROM INFORMATION_SCHEMA.TABLES;

// let data = [{
//         "assetId": 5,
//         "assetName": "Equity",
//         "children": [{
//                 "productId": 5,
//                 "productName": "Mutual Funds",
//                 "children": [{
//                         "instrumentId": 64316,
//                         "instrumentISINCode": "INF789F01AG5",
//                         "instrumentName": "UTI VALUE OPPORTUNITIES FUND - GROWTH PLAN",
//                         "productId": 5,
//                         "assetId": 5,
//                         "taxAssetName": "Equity",
//                         "taxAssetId": 5,
//                         "assetName": "Equity",
//                         "productName": "Mutual Funds",
//                         "revenueAmountValue": 0,
//                         "parentName": "INSTRUMENT",
//                         "parentValue": "UTI VALUE OPPORTUNITIES FUND - GROWTH PLAN"
//                     },
//                     {
//                         "instrumentId": 64746,
//                         "instrumentISINCode": "INF789F01513",
//                         "instrumentName": "UTI-EQUITY FUND-GROWTH PLAN-GROWTH",
//                         "productId": 5,
//                         "assetId": 5,
//                         "taxAssetName": "Equity",
//                         "taxAssetId": 5,
//                         "assetName": "Equity",
//                         "productName": "Mutual Funds",
//                         "revenueAmountValue": 0,
//                         "parentName": "INSTRUMENT",
//                         "parentValue": "UTI-EQUITY FUND-GROWTH PLAN-GROWTH"
//                     },
//                     {
//                         "instrumentId": 69778,
//                         "instrumentISINCode": "INF200K01T51",
//                         "instrumentName": "SBI SMALL CAP FUND  - DIRECT PLAN - GROWTH",
//                         "productId": 5,
//                         "assetId": 5,
//                         "taxAssetName": "Equity",
//                         "taxAssetId": 5,
//                         "assetName": "Equity",
//                         "productName": "Mutual Funds",
//                         "revenueAmountValue": 0,
//                         "parentName": "INSTRUMENT",
//                         "parentValue": "SBI SMALL CAP FUND  - DIRECT PLAN - GROWTH"
//                     },
//                     {
//                         "instrumentId": 72699,
//                         "instrumentISINCode": "INF200K01QX4",
//                         "instrumentName": "SBI BLUE CHIP FUND - DIRECT PLAN - GROWTH",
//                         "productId": 5,
//                         "assetId": 5,
//                         "taxAssetName": "Equity",
//                         "taxAssetId": 5,
//                         "assetName": "Equity",
//                         "productName": "Mutual Funds",
//                         "revenueAmountValue": 0,
//                         "parentName": "INSTRUMENT",
//                         "parentValue": "SBI BLUE CHIP FUND - DIRECT PLAN - GROWTH"
//                     },
//                     {
//                         "instrumentId": 75915,
//                         "instrumentISINCode": "INF200K01180",
//                         "instrumentName": "SBI BLUE CHIP FUND - GROWTH",
//                         "productId": 5,
//                         "assetId": 5,
//                         "taxAssetName": "Equity",
//                         "taxAssetId": 5,
//                         "assetName": "Equity",
//                         "productName": "Mutual Funds",
//                         "revenueAmountValue": 0,
//                         "parentName": "INSTRUMENT",
//                         "parentValue": "SBI BLUE CHIP FUND - GROWTH"
//                     },
//                     {
//                         "instrumentId": 84093,
//                         "instrumentISINCode": "INF204K01HY3",
//                         "instrumentName": "RELIANCE SMALL CAP FUND - GROWTH PLAN - GROWTH OPTION",
//                         "productId": 5,
//                         "assetId": 5,
//                         "taxAssetName": "Equity",
//                         "taxAssetId": 5,
//                         "assetName": "Equity",
//                         "productName": "Mutual Funds",
//                         "revenueAmountValue": 67.43151084599995,
//                         "parentName": "INSTRUMENT",
//                         "parentValue": "RELIANCE SMALL CAP FUND - GROWTH PLAN - GROWTH OPTION"
//                     },
//                     {
//                         "total": "Total",
//                         "revenueAmountValue": 67.43151084599995
//                     }
//                 ],
//                 "parentName": "PRODUCT",
//                 "parentValue": "Mutual Funds"
//             },
//             {
//                 "total": "Total",
//                 "revenueAmountValue": 67.43151084599995
//             }
//         ],
//         "parentName": "ASSET",
//         "parentValue": "Equity"
//     },
//     {
//         "assetId": 4,
//         "assetName": "Debt",
//         "children": [{
//                 "productId": 5,
//                 "productName": "Mutual Funds",
//                 "children": [{
//                         "instrumentId": 77742,
//                         "instrumentISINCode": "INF090I01CL8",
//                         "instrumentName": "FRANKLIN INDIA ULTRA SHORT BOND FUND - SUPER INSTITUTIONAL PLAN-DAILY DIVIDEND REINVESTMENT",
//                         "productId": 5,
//                         "assetId": 4,
//                         "taxAssetName": "Debt",
//                         "taxAssetId": 4,
//                         "assetName": "Debt",
//                         "productName": "Mutual Funds",
//                         "revenueAmountValue": 0,
//                         "parentName": "INSTRUMENT",
//                         "parentValue": "FRANKLIN INDIA ULTRA SHORT BOND FUND - SUPER INSTITUTIONAL PLAN-DAILY DIVIDEND REINVESTMENT"
//                     },
//                     {
//                         "total": "Total",
//                         "revenueAmountValue": 0
//                     }
//                 ],
//                 "parentName": "PRODUCT",
//                 "parentValue": "Mutual Funds"
//             },
//             {
//                 "total": "Total",
//                 "revenueAmountValue": 0
//             }
//         ],
//         "parentName": "ASSET",
//         "parentValue": "Debt"
//     }
// ]

// let groupBy = ['assetId', 'instrumentId', 'productId', 'transactionId'];

// function reCallSort(data) {

//     _.each(data, item => {

//         for (let key in item) {


//             if (groupBy.indexOf(key) > -1) {

//                 data = sort(data, key)
//                 if (item.children) {
//                     data = item.children;
//                     reCallSort(data)
//                 }

//             }
//         }
//     })
// }
// reCallSort(data);
// console.log(JSON.stringify(data,null,2))

// function sort(data, key) {

//     data.sort((a, b) => {
//         return a[key]-b[key] ;
//     });
//     return data
// }
//           let returnData = handlePagination(finalData, undefined, limit, offset);


// function handlePagination(esAggregationData, returnData = { data: [], totalCount: 0 }, limit, offset) {
//     let arrayLength = esAggregationData.length || 0;
//     for (let i = 0; i < arrayLength; i++) {
//       if (!esAggregationData[i].children && esAggregationData[i].total == undefined) {
//         returnData.totalCount += 1;
//         if (returnData.totalCount > offset && returnData.totalCount <= (limit + offset)) {
//           //let it be
//         } else {
//           esAggregationData.splice(i, 1);
//           i = i - 1;
//           arrayLength = arrayLength - 1;
//         }
//       } else if (esAggregationData[i].children) {
//         handlePagination(esAggregationData[i].children, returnData, limit, offset);
//       }
//     }
//     return returnData;
//   }


// let rData = [];

// function fetchElements(data) {
//     // console.log(data)

//     _.forEach(data.elements, item => {
//         // if(item)
//         if (item['name'] == 'NS1:verifyOTPResponse') {
//             rData = item['elements'];
//             // console.log(data)
//             return;
//         }
//         return fetchElements(item)
//     })
//     return rData;
// }


// let requiredData = fetchElements(data);
// function callFunction(eachObj){
//   console.log("insdie eachObj")
//  console.log(eachObj.length)
//   return eachObj
// }
//
// console.log(JSON.stringify(requiredData, null, 2))

// function removeUnwantedKeys(requiredData) {


//     _.forEach(requiredData, item => {

//       delete item['type'];

//       // console.log(item)
//       return removeUnwantedKeys(item['elements']);

//     })

//     return requiredData;
// }

// let requiredDataAfterDeleting=removeUnwantedKeys(requiredData);


// console.log(JSON.stringify(requiredDataAfterDeleting,null,2));

// var Promise = require("bluebird");

// Promise.try(function(){
//   return callFunction(z)

// }).map(function(topLevelItem){

//   console.log("inside MAP")
//   return Promise.try(function(){
//     console.log("insdie prmise.try after MAP",topLevelItem)
//     return callFunction([topLevelItem]);
//   }).map(function(childItem){
//             console.log("childItem")
//       return callFunction(childItem)
//     // })
//   })
// }).then(function(finalResult){
//   console.log("finalResult",finalResult)
//   console.log("finish...")
//   /* finalResult will contain an array of arrays, all of it asynchronously resolved. */
// })

// Promise.try(function(){
//   return callFunction(z)

// }).map(function(topLevelItem){

//   console.log("inside MAP",topLevelItem)
//   return Promise.try(function(){
//     console.log("insdie prmise.try after MAP")
//     return callFunction(topLevelItem);
//   }).map(function(childItem){
//     return callFunction(childItem);
//   });
// }).then(function(finalResult){
//   /* finalResult will contain an array of arrays, all of it asynchronously resolved. */
// })











// let diff =moment()




//   dateRanges.push(getMonthDateRange(betweenDates[i].from, moment().month(betweenDates[i].month).format("M")));
// console.log(moment().month("July").format("M"))

//   console.log(moment().month("January").format("M"));

//   function differenceCalculatedInMonthsByUnix(startDate, endDate){
// startDate = new Date(startDate).getTime();
// endDate= new Date(endDate).getTime();
// var difference = endDate - startDate;
// return timeMe(difference);
// }

// function timeMe(unix_timestamp){
//     unix_timestamp = parseInt(unix_timestamp);
//     var date = new Date(unix_timestamp);
//     var days = date.getDate();
//     var month = date.getMonth() + 1;
//     var year = date.getFullYear()
//     // hours part from the timestamp
//     var hours = date.getHours();
//     // minutes part from the timestamp
//     var minutes = "0" + date.getMinutes();
//     // seconds part from the timestamp
//     var seconds = "0" + date.getSeconds();
//     // will display time in 10:30:23 format
//     var formattedTime = days + "." + month + "." + year + " at:" + hours + ":" + minutes.substr(minutes.length-2) + ":" + seconds.substr(seconds.length-2);
//     return (12 * year) + month
// }

// console.log(differenceCalculatedInMonthsByUnix("2018-10-04","2019-01-04"));
// const startOfMonth = moment(["2018"]).startOf("month").format("YYYY-MM-DD hh:mm");
// const endOfMonth   = moment(["2018"]).endOf("month").format("YYYY-MM-DD hh:mm");

// console.log(startOfMonth,endOfMonth);

// function getMonthDateRange(year, month) {
//     var moment = require("moment");

//     // month in moment is 0 based, so 9 is actually october, subtract 1 to compensate
//     // array is "year", "month", "day", etc
//     var startDate = moment([year, month - 1]);

//     // Clone the value before .endOf()
//     var endDate = moment(startDate).endOf("month");

//     // just for demonstration:
//     console.log(startDate.toDate());
//     console.log(endDate.toDate());

//     // make sure to call toDate() for plain JavaScript date type
//     return { start: startDate, end: endDate };
// }
// console.log(getMonthDateRange("2018",2));


// let a={
//     "assetName": {
//         "terms": { "field": "assetName.keyword", "order": {}, "missing": "N/A", "size": 10000 },
//         "meta": { "parentName": "ASSET", "keysToInclude": ["assetId"] },
//         "aggs": {}
//     }
// };
// // console.log(a.assetName)


// curl -X POST "localhost:9200/revenuesreporting/_search?size=0" -H "Content-Type: application/json" -d"
// {
//   "size": 10000,
//   "query": {
//       "range": {
//           "effectiveDate": {
//               "gte": "2019-01-01T00:00:00.000Z",
//               "lte": "2019-12-01T00:00:00.000Z"
//           }
//       }
//   },
//   "aggs": {
//     "amount_per_month": {
//       "date_histogram": {
//         "field": "effectiveDate",
//         "interval": "1M"
//       },
//       "aggs": {
//         "total_amount": {
//           "sum": {
//             "field": "revenueAmount"
//           }
//         }
//       }
//     }
//   }
// }
// "


// curl -X POST "localhost:9200/revenuesreporting/_search?size=0" -H "Content-Type: application/json" -d"

// {
//   "size": 0,
//   "query": {
//       "range": {
//           "Date": {
//               "gte": "2018-01-01T00:00:00.000Z",
//               "lt": "2018-02-01T00:00:00.000Z"
//           }
//       }
//   },
//   "aggs": {
//     "group_by_month": {
//       "date_histogram": {
//         "field": "effectiveDate",
//         "interval": "month"
//       },
//       "aggs": {
//         "group_by_Type": {
//           "terms": {
//             "field": "effectiveDate"
//           }
//         }
//       }
//     }
//   }
// }"


// curl -X POST "localhost:9200/revenuesreporting/_search?size=0" -H "Content-Type: application/json" -d"

//   "query": {
//       "range": {
//           "Date": {
//               "gte": "2018-01-01T00:00:00.000Z",
//               "lt": "2018-02-01T00:00:00.000Z"
//           }
//       }
//   },
//       "aggs": {
//             "monthWise": {
//               "effectiveDate": {
//                 "field": "effectiveDate",
//                 "interval": "1M"
//               },
//               "aggs": {
//                 "revenueAmount": {
//                   "sum": {
//                     "field": "revenueAmount"
//                   }
//                 }
//               }
//             },
//             "revenueAmount": {
//               "sum": {
//                 "field": "revenueAmount"
//               }
//             },
//           }"




// curl -X POST "localhost:9200/revenuesreporting/_search?size=0" -H "Content-Type: application/json" -d"

// {
//     "aggs": {
//         "range": {
//             "date_range": {
//                 "field": "effectiveDate",
//                 "format": "MM-yyy",
//                 "ranges": [
//                     { "from": "01-2018",  "to": "02-2018", "key": "quarter_01" },
//                     { "from": "03-2015", "to": "04-2015", "key": "quarter_02" }
//                 ],
//                 "keyed": true
//             }
//         }
//     }
// }"




// curl -X POST "localhost:9200/revenuesreporting/_search?size=0" -H "Content-Type: application/json" -d"
// {
//   "aggs": {
//     "range": {
//       "date_range":{
//               "field": "effectiveDate",
//               "ranges":[{
//                 "from":"2017-12-01",
//                 "to":"2017-12-31"
//               }]
//             },
//             "aggs": {
//               "total_amount": {
//                 "sum": {
//                   "field": "revenueAmount"
//                 }
//               }
//             }
//           }
//      }
// }"

// curl -X POST "localhost:9200/revenuesreporting/_search?size=0" -H "Content-Type: application/json" -d"
// {
//    "aggs":{
//       "date_range":{
//          "range":{
//             "field":"effectiveDate",
//             "ranges":[
//                {
//                   "from":"2017-12-01",
//                   "to":"2017-12-31"
//                }
//             ]
//          },
//          "aggs":{
//             "revenueAmount":{
//                "sum":{
//                   "field":"revenueAmount"
//                }
//             }
//          }
//       }
//    }
// }"

// curl -X POST "localhost:9200/revenuesreporting/_search?size=0" -H "Content-Type: application/json" -d"

// {
//   "size": 0,
//   "query": {
//       "range": {
//           "effectiveDate": {
//               "from": "2017-12-01T00:00:00.000Z",
//               "to": "2017-12-31T00:00:00.000Z"
//           }
//       }
//   },
//   "aggs": {
//     "group_by_month": {
//       "date_histogram": {
//         "field": "effectiveDate",
//         "interval": "month"
//       },
//       "aggs": {
//         "group_by_Type": {
//           "terms": {
//             "field": "effectiveDate"
//           }
//         }
//       }
//     }
//   }
// }"














// {
//    "aggs":{
//       "date_range":{
//          "range":{
//             "field":"effectiveDate",
//             "ranges":[
//                {
//                   "from":"2017-12-01",
//                   "to":"2017-12-31"
//                }
//             ]
//          },
//          "aggs":{
//             "revenueAmount":{
//                "sum":{
//                   "field":"revenueAmount"
//                }
//             }
//          }
//       }
//    }
// }


// {
//   "size": 0,
//   "query": {
//     "filtered": {
//       "filter": {
//         "bool": {
//           "must": [
//             {
//               "range": {
//                 "DateTime": {
//                   "from": "2015-11-10T11:00:00",
//                   "to": "2015-11-13T11:00:00"
//                 }
//               }
//             }
//           ]
//         }
//       }
//     }
//   },
//   "aggs": {
//     "Website": {
//       "terms": {
//         "field": "Website",
//         "size": 0,
//         "order": {
//           "_count": "desc"
//         }
//       },
//       "aggs": {
//         "HitCount": {
//           "terms": {
//             "field": "HitCount",
//             "size": 0,
//             "order": {
//               "_count": "desc"
//             }
//           },
//           "aggs": {
//             "DateTime": {
//               "date_histogram": {
//                 "field": "DateTime",
//                 "interval": "8h",
//                 "min_doc_count": 0,
//                 "offset": "+11h"
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }

// curl -X POST "localhost:9200/revenuesreporting/_search?size=0" -H "Content-Type: application/json" -d"
// {
//     "aggs": {
//         "range": {
//             "date_range": {
//                 "field": "effectiveDate",
//                 "format": "01-2018",
//                 "ranges": [
//                     { "to": "now-10M/M" },
//                     { "from": "now-10M/M" }
//                 ]
//             }
//         }
//     }
// }
// "
// console.log(moment().endOf("year"));


//   console.log(typeof z);

//   console.log(typeof a);
// console.log(JSON.stringify(a,null,2));
// console.log(typeof JSON.stringify(a))
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
// tId"] }, "aggs": {} } }console.log(_.groupBy(a,"item"));
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
// console.log("a",a,"b",b)

// console.log(a.indexOf("1542825000000"));
// c


// console.log("arr",arr);

// let users = [{
//     name: "John",
//     email: "johnson@mail.com",
//     age: 25,
//     address: "USA"
//   },
//   {
//     name: "Tom",
//     email: "tom@mail.com",
//     age: 35,
//     address: "England"
//   },
//   {
//     name: "Mark",
//     email: "mark@mail.com",
//     age: 28,
//     address: "England"
//   },{
//     name: "Mark",
//     email: "mark@mail.com",
//     age: 28,
//     address: "England"
//   }
// ];

// let anotheruser=[];
// console.log("FFFF",users.concat(anotheruser));

//  //  _.forEach(users)
//  // let isPresent=   users.some(item=>{
//  //      return item.name==name;
//  //    });
//  // console.log("isPresent",isPresent);




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
