let moment=require('moment-timezone');
let tenureDate='2019-11-12'
console.log(moment(tenureDate,'YYYY-MM-DD').format('ddmmyyyy'))

let instrumentArray = [{
  "instrumentId": 34873,
  "assetProductClassificationId": 10,
  "instrumentCategoryName": "Equity - Sectoral Fund - Auto",
  "instrumentSubAsset": "Equity ETF",
  "countryId": 1,
  "instrumentName": "12M USD CS FCN - SPOT/DIS/BA 260520",
  "assetId": 5,
  "instrumentAsset": "Equities",
  "assetName": "Equity",
  "instrumentQuantity": 500,
  "instrumentWeight": 0.25,
  "priority": 1
},
{
  "instrumentId": 34872,
  "assetProductClassificationId": 11,
  "instrumentSubAsset": "Cash Equivalents",
  "instrumentName": "12M USD CS FCN - SPOT/DIS/BA 260520",
  "assetId": 5,
  "instrumentAsset": "Cash and Cash Equivalents",
  "assetName": "Equity",
  "instrumentQuantity": 500,
  "instrumentWeight": 0.25,
  "priority": 2
},
{
  "instrumentId": 34871,
  "assetProductClassificationId": 10,
  "instrumentSubAsset": "Equity Structured Products",
  "instrumentName": "12M USD CS FCN - SPOT/DIS/BA 260520",
  "assetId": 5,
  "instrumentAsset": "Equities",
  "assetName": "Equity",
  "instrumentQuantity": 500,
  "instrumentWeight": 0.2,
  "priority": 3
},
{
  "instrumentId": 34870,
  "assetProductClassificationId": 1,
  "instrumentSubAsset": "Current Accounts",
  "instrumentName": "12M USD CS FCN - SPOT/DIS/BA 260520",
  "assetId": 5,
  "instrumentAsset": "Cash and Cash Equivalents",
  "assetName": "Equity",
  "instrumentQuantity": 500,
  "instrumentWeight": 0.2,
  "priority": 4
}
];
