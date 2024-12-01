// function insertionSort(arr, n)
// {
//     let i, key, j;
//     for (i = 1; i < n; i++)
//     {
//         key = arr[i];
//         j = i - 1;

// const { set } = require("lodash")

function insertionSort(arr, n) {
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

// A utility function to print an array of size n
function printArray(arr, n) {
  let i;
  for (i = 0; i < n; i++) console.log(arr[i]);
}

// Driver code
let arr = [12, 11, 13, 5, 6];
let n = arr.length;

insertionSort(arr, n);
printArray(arr, n);

//         /* Move elements of arr[0..i-1], that are
//         greater than key, to one position ahead
//         of their current position */
//         while (j >= 0 && arr[j] > key)
//         {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j + 1] = key;
//     }
// }

// // A utility function to print an array of size n
// function printArray(arr, n)
// {
//     console.log(arr)
// }

// // Driver code
//     let arr = [12, 11, 13, 5, 6 ];
//     let n = arr.length;

//     insertionSort(arr, n);
//     printArray(arr, n);

// JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;

  // Create temp arrays
  var L = new Array(n1);
  var R = new Array(n2);

  // Copy data to temp arrays L[] and R[]
  for (var i = 0; i < n1; i++) L[i] = arr[l + i];
  for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  // Merge the temp arrays back into arr[l..r]

  // Initial index of first subarray
  var i = 0;

  // Initial index of second subarray
  var j = 0;

  // Initial index of merged subarray
  var k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of
  // L[], if there are any
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  // Copy the remaining elements of
  // R[], if there are any
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
// function mergeSort(arr, l, r) {
//   if (l >= r) {
//     return; //returns recursively
//   }
//   var m = l + parseInt((r - l) / 2);
//   mergeSort(arr, l, m);
//   mergeSort(arr, m + 1, r);
//   merge(arr, l, m, r);
// }

// UTILITY FUNCTIONS
// Function to print an array
// function printArray(A, size) {
//   for (var i = 0; i < size; i++) console.log(A[i]);
// };

// var arr = [12, 11, 13, 5, 6, 7];
// var arr_size = arr.length;

// mergeSort(arr, 0, arr_size - 1);

// printArray(arr, arr_size);

// This code is contributed by SoumikMondal

// const a = {b:'fish'}
// a.b && set(a, 'b', 'fish2')
// console.log('a',a)

// let arr = [ 2, 3, 5, 4, 7 ];
// let k = 3;

// if (printPairs(arr, arr.length, k) == false)
//   console.log("No such pair exists");

// const { sortedLastIndex, map } = require("lodash");
// const _ = require("@sailshq/lodash");
// const sort = "atoz";
// let arrayToSort = ["AA", "z"];
// const tdpSku = "STRAIGHT";
// const tdpSkuUpperCase = tdpSku.toLowerCase();
// console.log(tdpSkuUpperCase, "tdpSkuUpperCase", tdpSku);

// const sortTyres = (orderBy, tyres) => {
//   return [...tyres].sort(function (x, y) {
//     switch (orderBy) {
//       case "alphabetically":
//         return x.title.localeCompare(y.title);
//       case "alphabetically-reversed":
//         return -x.title.localeCompare(y.title);
//       case "recommended":
//       default:
//         console.log("inside default");
//         return 0;
//     }
//   });
// };

// let items = [
//   "ssss",f
//   "réservé",
//   "Premier",
//   "Cliché",
//   "communiqué",
//   "café",
//   "Adieu",
// ];
// items.sort((a, b) => a.localeCompare(b));
// arrayToSort = [...arrayToSort].sort((a, b) => {
//   if (sort === "atoz") {
//     return a.localeCompare(b);
//   } else {
//     return -a.localeCompare(b);
//   }
// });
// console.log("arrayToSort", arrayToSort, items);
// function WarningObj() {
// const warningObj = {
//   id: "w498351498838761357",
//   productLine: "4W",
//   warning: "notExactMatchWarning",
//   winterWordingMobile: "",
//   by4: "test",
//   by4for4x4: "",
//   runflat: "",
//   byDimension: {
//     items: [],
//     type: "area",
//   },
//   byVehicle: {
//     items: [],
//     type: "area",
//   },
//   notExactMatchWarning: "by-dimension",
//   "by-dimension": "",
//   "by-vehicle": "",
//   "by-plate": "",
// };

// const getWarningObject = (obj = {}) => {
//   const requiredProperties = ["id", "productLine", "warning"]; //only properties require to be stored in db

//   return requiredProperties.reduce((acc, key) => {
//     acc[key] = obj[key];
//     if (key === "warning") {
//       var messageKey;
//       if (obj[key] === "notExactMatchWarning") {
//         messageKey = obj.notExactMatchWarning;
//         acc.notExactMatchWarning = obj.notExactMatchWarning;
//       } else {
//         messageKey = obj[key];
//       }
//       acc[messageKey] = obj[messageKey];
//     }
//     return acc;
//   }, {});
// };

// console.log("Warning Obj : ", getWarningObject(warningObj));

// // const doc = {
// //   searchWarnings: [
// //     {
// //       id: "ckm3komxi00u101pmrm6z85xp",
// //       productLine: "4W",
// //       byDimension: {
// //         items: [
// //           {
// //             _id: "w842171021882894161",
// //             personas: [],
// //             type: "apostrophe-rich-text",
// //             content:
// //               '<p>When searching by tire size alone, please be aware that the displayed results may not be applicable (or recommended) for your vehicle due to several factors (including but not limited to size, speed rating, load capacity, intended service conditions, etc.).</p>\n\n<p><strong>To view MICHELIN<sup>®</sup> recommended tire options for your vehicle click "Search by Vehicle" and enter the required information.</strong></p>\n',
// //             dialogIds: [],
// //           },
// //         ],
// //         type: "area",
// //       },
// //       byVehicle: {
// //         items: [
// //           {
// //             _id: "w448230208797096921",
// //             personas: [],
// //             type: "apostrophe-rich-text",
// //             content:
// //               '<p><strong>If modifications have been made to your vehicle, OE tire size information shown might not be relevant. Please <a href="/assistance">contact us</a> if you have any questions.</strong></p>\n',
// //             dialogIds: [],
// //           },
// //         ],
// //         type: "area",
// //       },
// //     },
// //     {
// //       id: "ckm3komxm00u201pmm4loe41n",
// //       productLine: "MO",
// //       byDimension: {
// //         items: [
// //           {
// //             _id: "w842171021882894161",
// //             personas: [],
// //             type: "apostrophe-rich-text",
// //             content:
// //               '<p>When searching by tire size alone, please be aware that the displayed results may not be applicable (or recommended) for your vehicle due to several factors (including but not limited to size, speed rating, load capacity, intended service conditions, etc.).</p>\n\n<p><strong>To view MICHELIN<sup>®</sup> recommended tire options for your vehicle click "Search by Vehicle" and enter the required information.</strong></p>\n',
// //             dialogIds: [],
// //           },
// //         ],
// //         type: "area",
// //       },
// //       byVehicle: {
// //         items: [
// //           {
// //             _id: "w448230208797096921",
// //             personas: [],
// //             type: "apostrophe-rich-text",
// //             content:
// //               '<p><strong>If modifications have been made to your vehicle, OE tire size information shown might not be relevant. Please <a href="/assistance">contact us</a> if you have any questions.</strong></p>\n',
// //             dialogIds: [],
// //           },
// //         ],
// //         type: "area",
// //       },
// //     },
// //   ],
// // };
// let warnings = [];

// const [a, b, c] = [1, 2, 3];

// console.log(a, b, c, "a, b, c");

// console.log(JSON.stringify(warnings, null, 2), "warnings");

// const objToTemplatize = {};
// _.each(realData, (item) => {
//   objToTemplatize[item.name] = item.selectedValue;
// });

// const compile = _.template();

// console.log("objToTemplatize", objToTemplatize);
// console.log(compile(objToTemplatize));
// reverse an array

// const obj = {
//   loadedRadius: {
//     unit: "inch",
//     value: 12,
//   },
// };
// // const output = [].concat(obj.loadedRadius || [])
// // console.log(output, '<<<')

// const doc = {
//   // productPromoSlider: {
//   // items:
//   //  [{
//   slides: [
//     {
//       id: "w41077619745425968",
//       productIds: [null],
//     },
//     {
//       id: "w492848744472110295",
//       productIds: ["cjs31pzmt01ol0ho9k353vmch"],
//     },
//     {
//       id: "w269937431231415706",
//       productIds: [],
//     },
//   ],
//   // }]
//   // }
// };

// let initialValue = 0

// console.log('promise',start())
// const myfunction = async function(x, y) {
//     return [
//       x,
//       y,
//     ];
//   }

//   // Start function
//   const start = async function(a, b) {
//     const result = await myfunction('test', 'test');

//     console.log(result);
//   }

// let slides = doc.slides.reduce((acc, item) => {
//   const productIds = item.productIds.filter((id) => id !== null);
//   if (newProductIds.length > 0) {
//     acc.push({ id: item.id, productIds: productIds });
//   }
//   return acc;
// }, [])

let widgets = [
  {
    isAdaptive: false,
    slides: [
      {
        id: "w962371733950363113",
        productIds: ["cjftf69i40az00gmi09rq0bmh"],
      },
      {
        id: "w177826455463875117",
        productIds: ["cjftezx4m01f40gmic114bg52"],
        _products: [],
      },
      {
        id: "w31089165454349558",
        productIds: ["cjftf7iln0cwd0gmi9c457qqc"],
      },
    ],
    _id: "w157751078850696437",
    title: "Other MICHELIN Primacy tyres",
    type: "b2c-product-promo",
    _edit: true,
    __docId: "cjftf10f1036y0gmideoyilap",
    __dotPath: "productPromoSlider.items.0.col0.items.0",
  },
];

// [[widgets["slides"]]] = [];
// const [{ slides }] = widgets;
// console.log(slides, "slides");
// widgets[0].slides = [];
// console.log(widgets, "widgets");

// widgets = widgets.reduce((acc, widget) => {
//   widget.slides = widget.slides.filter((slide) => slide._products);
//   acc.push(widget);
//   return acc;
// }, []);
// const stop = () => {
//   console.log("stop called");
// };
// const go = () => {
//   console.log("go called");
// };

// const colour = "red";

// const handleColour = {
//   red: stop,
//   amber: stop,
//   green: go,
//   "flashing amber": go,
// };

// const data = ["by41", "notExact2", "c"];

// const obj = data.reduce((acc, value) => {
//   switch (value) {
//     case "by4":
//       acc[value] = "1";
//       break;
//     case "notExact":
//       acc["notExact"] = "2";
//       break;
//     case 3:
//       acc[value] = "3";
//       break;
//     default:
//       acc;
//   }
//   return acc;
// }, {});
// console.log("obj", obj);

// handleColour[colour](); // logs "stop called"
// const published = await self.apos.docs.db.find({
//   _id: { $in: prodIds, published: true },
// });

// widgets.slides = published.map((pub, index) => {
//   return {
//     id: slides[index],
//     productIds: [pub._id],
//   };
// });

// Call start
// start();
// const reducer = async(acc, key) => {
//     const response = await api(item);

//     return {
//       ...await acc, // <-- this would work just as well for OP
//       [key]: reponse,
//     }
//   }
// eslint-disable-next-line no-undef
//   const result = await ['a', 'b', 'c', 'd'].reduce(reducer, {});

// let  slides=doc.slides.reduce((acc,item)=> {

//     const productIds=  item.productIds.filter(id=>id!==null)
//         if(newProductIds.length>0){
//             acc.push({id:item.id,productIds:productIds})
//         }
//         return acc

// },[])
// slides = []
// console.log('slides###  ', ...slides)
// slides=slides.filter(slide=>slide.productIds.length)

// })
// slides.reduce((item, index) => {
//    if(item.productIds.length>0){
//     acc.push(item)
//    }
//    return acc
// },[])
// doc.productPromoSlider?.items?.[0]?
// console.log(JSON.stringify(slides, null, 2), 'slides')
// const slugify = (raw = '') => {
//     const replace = {
//         '*': ' star ',
//         '+': ' plus ',
//         '#': ' hash ',
//         '/': '-',
//     }
//     console.log('called inside...')
//     return raw.replace(/\*|\+|\/|#/gi, function (match) {
//         console.log(match, '<<')
//         replace[match] || ''
//     })
// }
// console.log(slugify(raw))

// str.replace(/\*|\+|\/|#/gi, function(match) {
// console.log('called')
// return replace[match] || ''
// }

// console.log('str',str)
// str  = str.replace(/[^a-zA-Z0-9-]/g, '') //allow alphabets with dash
//           .replace(/^-+|-+$/gi,'')  // trim dash at start and end of string
//           .replace(/-+/gi,'-')  //trim more than one dash in string

// let raw = '©™™®TEst---Test*#-michelin--©©™™®©--';

// const replace = {
//     '*': ' star ',
//     '+': ' plus ',
//     '#': ' hash ',
//     '/': '-',
// }

// let formatters = [{
//         pattern: /\*|\+|\/|#/gi,
//         replacement:  (match) => replace[match] || ''
//     },
//     {
//         pattern: /[^a-zA-Z0-9-]/g,
//         replacement: '',
//     },
//     {
//         pattern: /^-+|-+$/g,
//         replacement: '',
//     },
//     {
//         pattern: /-+/g,
//         replacement: '-',
//     },
// ];

// let output = formatters.reduce(function (raw, f) {
//     return raw.replace(f.pattern, f.replacement)
// }, raw)

// console
//   .log(Number.NEGATIVE_INFINITY, "<<<")

//   [
// const data=str.replace(/\*|\+|\/|#/gi, function(match) {
// console.log('called',match)
//  replace[match] || ''
// })
// console.log('data',data)

// main()

// function main() {
//     let arr = [1, 2, 3, 4, 5, 6];
//     console.log('before',arr)
//     reversearr(arr);
//     console.log('after',arr)
// }

// function reversearr(arr) {
//     let start = 0;
//     let end = arr.length - 1;
//     while (start <= end) {
//         let temp = arr[start];
//         arr[start] = arr[end]
//         arr[end]=temp
//         start++
//         end--
//     }
// }

//sum of digits
// var value = 2568,
//     sum = 0;

// while (value) {
//     sum += value % 10;
//     console.log('sum',sum)
//     value = Math.floor(value / 10);
//     console.log('console',value)
// }

// console.log(sum);

//isPalindrome
// function isPalindrome(str)
// {
//   // Start from leftmost and rightmost corners of str
//   let l = 0;
//   let h = str.length - 1;

//   // Keep comparing characters while they are same
//   while (h > l)
//   {
//       if (str[l++] != str[h--])
//       {
//           console.log("%s is Not Palindrome", str);
//           return;
//       }
//   }
//   console.log("%s is palindrome", str);
// }

// isPalindrome("abba");
// isPalindrome("abbccbba");
// isPalindrome("geeks");

// minmax

// let arr = [1000, 11, 445, 1, 330, 3000];

// let obj = {
//     min: 0,
//     max: 0
// }

// function findMinMax(arr) {
//     let n = arr.length||[];
//     obj.min = arr[0]||0
//     obj.max = arr[0]||0
//     for (let i = 0; i < n; i++) {
//         let value = arr[i]
//         obj.min = value < obj.min ? value : obj.min;
//         obj.max = value > obj.max ? value : obj.max
//     }
//     return obj
// }

// console.log(findMinMax(arr))

//find frequency of numbers
// const arr = [2,5,7,8,5,3,5,7,8,5,3,4,2,4,2,1,6,8,6];

// const getFrequency = (array) => {
//     const map = {};
//     for (let i=0;i<array.length;i++){
//        if(map[array[i]]){
//           map[array[i]]++;
//        }else{
//           map[array[i]] = 1;
//        }
//     }
//     return map;
//  };
//  console.log(getFrequency(arr));

// prefix sum array

// I forgot to mention that it is a piece schema and there is a join field as well.

// 1 st field in schema

//tempSchema.js

// {
//     name: "_colour",
//     type: "select",
//     required: true,
//     choices: [{
//             label: "Pastel Green",
//             value: "#61ED70"
//         },
//         {
//             label: "Confetti",
//             value: "#EDEB61"
//         },
//         {
//             label: "Cornflower Blue",
//             value: "#6C61ED"
//         }
//     ]
// },
// {
//     name: "_panel"
//     label: "Panel",
//     type: 'joinByArray',
//     required: true,
//     withType: 'colour-panel'
//     idsField: 'panelIds',
//     filters: {
//         projection: {
//             colour: 1,
//             shades: 1,
//             //...all the other fields in panel
//         }
//     }
// }

// function fillPrefixSum(arr, n, prefixSum) {
//     prefixSum[0] = arr[0];

//     // Adding present element
//     // with previous element
//     for (let i = 1; i < n; ++i) {
//         console.log('i: ', i)
//         prefixSum[i] = prefixSum[i - 1] + arr[i];
//     }
// }

// let ex=['a','b']

// let arr = ['10', '4', '16', '20'];
// const index=arr.findIndex((el)=>el==='20')
// console.log(index,'index <<<')
// const data=ex.map(el=>`${arr[index]}-${el}`)
// console.log('data',data,'arr',arr)
// arr.splice(2)
// console.log(arr)
// console.log(ooo,'<<<')
// var a1 = [1,2,3,4,5];
// var a2 = [21,22];
// a1.splice(2, 0, ...a2);
// console.log(a1) // => [1,2,21,22,3,4,5]

// Who is the ruler of Southeros?
// Ouput: None
// Allies of Ruler?
// Output: None
// Input Messages to kingdoms from King Shan:
// Input: Air, “oaaawaala”
// Input: Land, “a1d22n333a4444p”
// Input: Ice, “zmzmzmzaztzozh”
// Who is the ruler of Southeros?
// Output: King Shan
// Allies of Ruler?
// Output: Air, Land, Ice

// console.log('hello world')

// [
//   {
//     x: 1,
//   },
//   {
//     x: 2,
//   },
//   {
//     x: 3,
//   },
// ].map((item, index) => {
//   console.log(item, index);
// });

// Who is the ruler of Southeros?
// Output: None
// Allies of King Shan?
// Output: None
// Input Messages to kingdoms from King Shan: Input: Air, “Let’s swing the sword together”
// Input: Air, “oaaawaala” Input: Land, “Die or play the tame of thrones”
// Input: Land, “a1d22n333a4444p” Input: Ice, “Ahoy! Fight for me with men and money”
// Input: Ice, “zmzmzmzaztzozh” Input: Water, “Summer is coming”
//Input: Water, “Summer is coming”
// Input: Fire, “Drag on Martin!”
// Who is the ruler of Southeros?
// Output: King Shan
// Allies of King Shan?
// Output: Air, Land, Ice, Fire

// var fs = require('fs'),
//     words = [],
//     i = 0,
//     lineArr = [],
//     l = 0,
//     j = 0,
//     //kings = [],
//     AllieKings = '',
//     inputMessage = '',
//     messageLines = [];

// var kAndK = {
//   OCTOPUS: "WATER",
//   OWL: "AIR",
//   PANDA: "LAND",
//   DRAGON: "FIRE",
//   MAMMOTH: "ICE",
// };

// var kings = ["OCTOPUS", "OWL", "PANDA", "DRAGON", "MAMMOTH"];

// fs.readFile("messageText", function(error, data) {
//     if (error) { throw error; }

//     data.toString().split("\n").forEach(function(line, index, arr) {
//         if (index === arr.length - 1 && line === "") { return; }
//         //console.log("line",line)
//         messageLines.push(line)
//     });
//     var i = 0;
//     callRecursively(messageLines, i);

//     function callRecursively(messageLines, i) {
//         if (i > messageLines.length - 1) {
//             i++;
//             return
//         }
//         checkIfAlliesExists(messageLines[i])
//         i++;
//         //console.log(i)
//         return callRecursively(messageLines, i)
//     }

//     //console.log(messageLines)
// })

// function checkIfAlliesExists(messageLine) {
//     //try{
//     var line = '' + messageLine,
//         king;
//     //console.log(l < kings.length,king = kings[l].toString())
//     while (l < kings.length ) {
//         console.log("eeeeeee")
//         king = kings[l].toString();
//         l++;
//         console.log("33333")
//     };

//     //console.log()
//     console.log("nnewline", king);
//     var kl = king.toString().length - 1;
//     console.log("kl", kl)
//     for (j = 0; j < kl; j++) {
//         console.log("j", j)
//         if (line.indexOf(king[j]) > 0) {
//             console.log("true", king[j])
//         } else {
//             console.log("inside else", j);
//             console.log(line.indexOf(king[j]) > 0, king[j], line.indexOf(king[j]), line)
//             console.log(king[j]);
//             //break;
//             //     	//l++;
//         }
//         //l++;
//     }
// }catch(e){
//     	console.log(e)
//     }
//l++;
//console.log(line[j])
// }

// //  const obj={loadedRadius:{unit:'inch',value:12}}
// // const output=[].concat(obj.loadedRadius|| [])
// // console.log(output,'<<<')
// const { capitalize } = require("lodash");
// const _ = require("lodash");

// const test = require("./text.json");
// console.log(Math.random() * 1000000000);
// console.log(id);

// var m = pathToMatch.match(/[^\/]+$/)[0];
// var n = bicyclePagesDefaultPath.match(/[^\/]+$/)[0];
// console.log(
//   "m ",
//   pathToMatch.substring(pathToMatch.lastIndexOf("/") + 1, pathToMatch.length)
// );
// if (m) {
//   position = m-n
//   console.log(position,'<<<')
// }

// const regex=/\b-(city|'')-\b/
// console.log(regex.test('/bicycle-tubes-en-us-deduplicate-ck9tvz2jt04r201mmzyh2y62v'),'<<<<')

// const nestObj = {
//   title: {
//     items: [
//       {
//         ad: "title",
//       },
//     ],
//   },
//   description: {
//     pp: "Connecting-with-technology",
//   },
// };
// console.log(nestObj.description.pp.split("-").reverse().join("-"));

// for (let i== 0; i <= 3; i++) {
console.log("hello");
// }

// console.log('test',test)

// const main = () => {
//   let str = "<h4 class=\"h4-like\">Connecting with technology</h4>\r\n\n<p>Unique knowledge creates the perfect tyre: ultra-performance compounds, peak performance shell and patented lamellas. In search of excellence, our engineers and drivers work together, striving for performance and safety.</p>\n";
//   let newstr = str.replaceAll(/<\/?[^>]+(>|$)/g, "")
//                 .replaceAll('\n','');
//   console.log(newstr,newstr.length )
// }
// console.log('/sads'.split('/').filter(item => item).length === 1, '<<<<<<')

//()? use for optional match
// (da|sad) use for OR condition in regex
// const bicyclePagesDefaultPath =
//   "/bicycle-tubes-en-us/bicycle-tubes-(road|city|mt)(-en-us)?/michelin-";
// console.log(bicyclePagesDefaultPath, "<<<");
// // const pathToMatch = '/bicycle-tubes-en-us/bicycle-tubes-mt'
// const pathToMatch =
//   "/bicycle-tubes-en-us/bicycle-tubes-city-en-us/michelin-protek-max-city";

// console.log(bicyclePagesDefaultPath.test(pathToMatch))
// const types = ['city', 'mtb']
// const stt='Connecting with technology'
// console.log(types.some(e => nestObj.description.pp.startsWith(`Connecting with ${e}`)))

// const nestObj = {
//   slides: [{
//     title: {
//       items: [{
//         ad: 'title'
//       }]
//     },
//     description: {
//       items: [{
//         pp: 'description'
//       }]
//     }
//   }]
// }

//  nestObj.slides.forEach(ele => {
//    const { title, description } = ele

//     const [charProperty]=   title.items

// console.log(title,description,charProperty)
// })

// const browsebytemplate= {
//   'animal': {
//     cat:'pet'
//   }
// }
// const native = require('/Users/nishantpradhan/Downloads/localization.json').Sheet1
// console.log(native)

//(\b\S+\b)  full words
//($|\s+)  capturing groups of words
// \1 matches the same text as most recently matched by the 1st capturing group
// $1 to replace it once by the same word   e.g if words are repeating it will occur only once.
// https://regex101.com/
// const re=/(\b\S+\b)(($|\s+)\1)+/gi
// const check = 'Michelin CrossClimate -dekk Dekk | MICHELI Norge'.replace(re, (match) => {
//   console.log(match, 'match')
//   return ''
// })

// String.prototype.updateSeo = function () {
//   let str = this.toString()
//   const re=new RegExp('{{asd}}')
//   str= str.replace(re, match => {
//         return 'audi'
//   })
//   return str
// }

// const dataToUpdate = 'vue.ts.seo.persona.classic'

// const getSeo = () => {
//   const out = [].reduce((acc, item) => {
//     console.log('acc',acc,'item',item)
//       acc[item] = ''
//     return acc
//   }, {})
//   return out
// }

// const seo = {
//   'en-hk_seotitle': 'sad a',
//   'en-hk_seoDescription': 'sad a',
//   'zh-hk_seotitle': 'asd',
//   'zh-hk_seoDesc':'asd',
// }

// let localStorage = [];
// Object.keys(seo).filter(item=>item.endsWith('seotitle')).forEach(item => {
//   console.log(item.split('_'), '<<')
//   localStorage.push(item.split('_')[0])
//   localStorage.push(`${item.split('_')[0]}-draft`)
// })
// console.log(localStorage)

// const byBicycle = () => {
//   return 'true'
// }

// console.log(!(null))
// console.log(!(undefined))
// console.log(!(''))

// const pages = {
//   isBicyclePage: byBicycle()
// };

// const output='f'

// const req= {
//     data: {
//       piece: {
//         address: {
//           // streetAdd: [{type:'asdsa'}],
//           postal: 'asdsad',
//         }
//       }
//     }
// }

// Rera account details:
// Indian Overseas Bank
// A/c Name: SG & BHP Developers
// Type: Current Account
// A/c no: 210602000003146
// IFSC code: IOBA0002106

// const add = req.data.piece?.address?.streetAdd || []
// console.log(add,'<<<<<')

// // if (add.streetAdd && add.postal) {
// //   console.log(add)
// // }
// console.log('req?.data','<<<<<<<<<<<<')

// // console.log(output.substring(3),'<<<<<<<Fish')

// const arrayToChange = ['sasadsa', 'dsas ', 'asd']

// console.log(arrayToChange.map(item=>capitalize(item)).join(' '))

//   console.log(pages.isBicyclePage,'<<<')

// let obj = {
//   seoTitle: '',
//   seoDescription:''
// }

// obj=getSeo()

//   console.log(obj)

// console.log(dataToUpdate.split('.').pop()==='classic','<<<')
// let A = ["S", "c", "a", "l", "e", "r", "A", "c", "a", "d", "e", "m", "y", "2", "0", "2", "0"];
// A = A.join('')
// let out=/^[0-9a-zA-Z]+$/.test(A)
// console.log(out,'<<<')
// let out=!A.test(/^[0-9a-zA-Z]+$/)

// console.log(check,'check')

const data = [
  "Africa",
  "Argentina",
  "Australia",
  "Austria",
  "Belgium",
  "Brazil",
  "Bulgaria",
  "Cambodia",
  "Canada",
  "Chile",
  "Colombia",
  "Croatia",
  "Czech Repulic",
  "Denmark",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hong Kong",
  "Hungary",
  "India",
  "Indonesia",
  "Ireland",
  "Israel",
  "Italy",
  "Japan",
  "Korea",
  "Laos",
  "Malaysia",
  "Mexico",
  "Middle-East",
  "Myanmar",
  "Netherlands",
  "New Zealand",
  "Norway",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "Serbia",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "Spain",
  "Sweden",
  "Swiss",
  "Thailand",
  "Turkey",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Vietnam",
];

let newObj = {};
// console.log(native)
// for (let ele of data) {
//   let found = native.find(function (country) {
//     return country.countryName === ele
//   })
//   if (found) {
//     newObj[ele]=found.native
//   } else {
//     console.log('not Found:',ele)
//   }
// }
// console.log('native',newObj)

// let data =[
//   {
//     id: 'w578063584797309583',
//     productLine: '4W',
//     warning: 'winterWordingMobile',
//     winterWordingMobile: 'Monte hiver'
//   },
//   {
//     id: 'w272176993232042276',
//     productLine: '4W',
//     warning: 'by4',
//     by4: "Vous pouvez équiper votre véhicule avec des pneumatiques ne possédant pas de marquage constructeur ou un marquage d'un autre constructeur, et nous vous recommandons de remplacer simultanément les 4 pneumatiques."
//   },
//   {
//     id: 'w207048689736737215',
//     productLine: '4W',
//     warning: 'by4for4x4',
//     by4for4x4: 'Votre véhicule étant 4 roues motrices, nous vous conseillons de remplacer simultanément les 4 pneumatiques.'
//   },
//   {
//     id: 'w399114720350808527',
//     productLine: '4W',
//     warning: 'runflat',
//     runflat: 'Votre véhicule est équipé d’origine de pneumatiques RunFlat, qui vous permettent de continuer à rouler même en cas de crevaison. Afin d’obtenir l’équipement le plus adapté, nous vous recommandons de suivre les conseils du constructeur de votre véhicule ou de vous rapprocher de votre revendeur de pneus habituel.'
//   },
//   {
//     id: 'w91996310182077104',
//     productLine: 'MO',
//     warning: 'notExactMatchWarning',
//     notExactMatchWarning: 'by-dimension',
//     'by-dimension': "{{ size }} NB :  La législation en vigueur autorise de monter des indices de vitesse et/ou de charge recommandés ou supérieurs à ceux montés d'origine sur votre véhicule."
//   },
//   {
//     id: 'w328001463659044341',
//     productLine: 'CL',
//     warning: 'notExactMatchWarning',
//     notExactMatchWarning: 'by-vehicle',
//     'by-vehicle': "La taille originale : {{ size }} n'existe plus. Nous vous conseillons ces pneus."
//   }
// ]
// var str = "I have a cat, a dog, and a goat.";
// var mapObj = {
//   cat: {
//     dog: 'asd+HG'
//   }
// };
// console.log(_.get(mapObj,'cat.dog','').replace(/\+.*/,''))
// str = str.replace(/cat|dog|goat/gi, function(matched){
//   return mapObj[matched];
// });
// const capitalize = (slug) => {
//   return slug.charAt(0).toUpperCase() + slug.slice(1).toLowerCase();
// }
// const bicycleTypeSlugs = ['city', 'mtb', 'road']
// const str = '/bicycle-tubes/bicycle-tubes-city';
// const match = bicycleTypeSlugs.reduce((acc, item) => {
//   if (str.indexOf(item) > -1) {
//      acc=item
//    }
//   return acc ? acc.capitalize():''
//  }, '')

var tubeName = "/city";
const searchMask = "michelin";
// console.log(searchMask.slice(1).toLowerCase(),'<<<<')

// const [,,tubeProduct] = tubeName.replace('michelin', '').split('/').filter(x => x)
// const out = [.reduce((acc, f) => {
//     console.log(this.f.apply(null,'/'))
// },tubeName)

const replace = ["audi", "909090"];

const textarea = "{{brand}}, {{segment}} hellow world";
// const mapObj = {
//   '{{segment}}': '90',
//   '{{brand}}':'audi'
// }

// let find =textarea.match(/\{{[^)]*\}}/g)
// console.log('find',find[0].trim())
// let text = Object.keys(mapObj).reduce((acc, item) => {
//   const regex = new RegExp(item, "g");
//   console.log(regex,'<<<item')
//   acc = acc.replace(regex, (match) => mapObj[match]);
//   return acc
// }, textarea);
// console.log('text',text)
// console.log( tubeName.split('/').filter(x=>x).length===3)

// let text = "en-us-draft"; let pattern = /en-gb/;
// let result = pattern.test(text);
// console.log(result,'result<<')
// console.log('London+GB'.replace(/\+.*/,''))
// const url = '/Controller/Action/London+GB?id=1111&value=2222'
// const path = url.replace(/\+.*/, '');
// console.log(path)
// console.log('/asd'.slice(1));

// {
//   position: 'front',
//   vintageSize: '213'
// },
// {
//   position: 'rear',
//   vintageSize: '12'
// },
// {
//   position: 'both',
//   vintageSize: '321'
// }
// let fitment = ''
// let acc = data.reduce((acc, item) => {
//   acc[item.position] = item.vintageSize
//   return acc
// }, {})
// console.log('acc', acc.front)
// if (acc.front && acc.rear && acc.front !== acc.rear) {
//   fitment = fitment.concat(acc.front, ' - ', acc.rear)
// } else if (acc.front || acc.rear) {
//   fitment = fitment.concat(acc.front || acc.rear)
// } else if (acc.both) {
//   fitment = fitment.concat(acc.both)
// }
// console.log(fitment, '<<<<')

// console.log()

// const map1 = new Map();

// map1.set("a", 1);
// map1.set("b", 2);
// map1.set("c", 3);

// console.log(map1.get("a"));
// // expected output: 1

// map1.set("a", 97);

// console.log(map1.get("a"), "<<<");
// // expected output: 97

// console.log(map1.size);
// // expected output: 3

// map1.delete("b");

// console.log(map1.size);
// expected output: 2

// var twodrray = [
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1]
// ]]]]]

// let R = C = 5
// // var table = [row0, row1, row2, row3, row4];
// // console.log(table// Get the first item in the array
// const arr2d = Array.from({
//     length: 5
// }, () => Array.from({
//     length: 5
// }, () => 0));

// arr2d[0][0] = twodrray[0][0];

// for (let i = 1; i < C; i++) {
//     arr2d[0][i] = arr2d[0][i - 1] + twodrray[0][i];
//     for (let j = 1; j < R; j++) {
//         console.log('C:', i, 'R:', j)
//         arr2d[j][0] = arr2d[j - 1][0] + twodrray[j][0];
//     }
// }
// console.log('arr2d===>',arr2d )

// for (let i = 1; i < R; i++) {
//     for (let j = 1; j < C; j++) {

//         // values in the cells of new
//         // array are updated
//         console.log(arr2d[i - 1][j] )
//         console.log(arr2d[i][j - 1])
//         console.log(arr2d[i - 1][j - 1])
//         console.log(twodrray[i][j])
//         // console.log(arr2d[i - 1][j - 1] + twodrray[i][j])
//         arr2d[i][j] = arr2d[i - 1][j] + arr2d[i][j - 1] - arr2d[i - 1][j - 1] + twodrray[i][j];
//         console.log('Ans:',arr2d[i][j])
//     }
// }
// console.log(arr2d, 'arr2d')
let arr = [19, 15, 13, 12, 12, 11, 4, 2, 12, -3];

// const mapper = new Map();

// for (let i = 0; i < arr.length; i++) {
//   if (!mapper.has(arr[i])) {
//     mapper.set(arr[i], arr[i]);
//   } else {
//     let existingVal = mapper.get(arr[i]);
//     mapper.set(arr[i], arr[i] + existingVal);
//   }
// }
// console.log(
//   [...mapper.entries()].sort((a, b) => b[1] - a[1]),
//   "<<<"
// );

//  function getMaximumSum(arr)
//  {
//      // Number of elements in the array
//      let n = arr.length;

//      // Largest element in the array
//      let max = Number.MIN_VALUE;
//      for(let i = 0; i < n; i++)
//      {
//          max = Math.max(max, arr[i]);
//      }

//      // An array to count the occurence of each element
//      let freq = new Array(max + 1);
//      freq.fill(0);

//      for(let j = 0; j < n; j++)
//      {
//        freq[arr[j]]++;
//      }

//      // ans to store the result
//      let ans = 0, i=max;

//      // Using the above mentioned approach
//      while(i>0){

//        // if occurence is greater than 0
//        if(freq[i] > 0){
//          // add it to ans
//          ans += i;

//          // decrease i-1th element by 1
//          freq[i-1]--;

//          // decrease ith element by 1
//          freq[i]--;
//        }else{
//          // decrease i
//          i--;
//        }
//      }

//      return ans;
//  }
// function getMaximumSum(arr, n)
// {
//     let incl = arr[0];
//     let excl = 0;
//     let excl_new;
//     let i;

//     for(i = 1; i < n; i++)
//     {

//         // Current max excluding i
//         excl_new = (incl > excl) ? incl : excl;

//         // Current max including i
//         incl = excl + arr[i];
//         excl = excl_new;
//     }

//     // Return max of incl and excl
//     return ((incl > excl) ? incl : excl);
// }
//  console.log(getMaximumSum(arr,arr.length))
//  arr.reduce((a, b) => a + b, 0)
