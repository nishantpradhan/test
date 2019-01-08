var _=require('lodash');



var mapData=[
  {
    color: "red",
    value: "#f00"
  },
  {
    color: "green",
    value: "#0f0"
  },
  {
    color: "blue",
    value: "#00f"
  },
  {
    color: "cyan",
    value: "#0ff"
  },
  {
    color: "magenta",
    value: "#f0f"
  },
  {
    color: "yellow",
    value: "#ff0"
  },
  {
    color: "black",
    value: "#000"
  }
]

   var data= {'instrumentId': 87196,
    'secondaryInstrumentId': null,
    'accountId': 93,
    'serviceProviderAccountId': 1,
    'currencyId': 1,
    'goalId': 1,
    'transactionType': { 'name': 'Dividend Reinvestment',
       'description': null,
       'bosCode': null,
       'nseCode': null,
       'bseCode': null,
       'holdingCalculationBuySellType': 1,
       'id': 9,
       'isActive': true,
       'createdDate': '2018-10-30T04:53:17.000Z',
       'lastModifiedDate': '2018-10-30T04:53:17.000Z',
       'holdingCalculationBuySellTypeLabel': 'Buy' } };


       console.log(data.transactionType().id)


  var data=_.zipObject(_.map(mapData,'color'),mapData);
  console.log(data)

//var mapData=[]
