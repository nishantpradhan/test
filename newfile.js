const groupByConfiguration = {
    productId: {
        fieldsToInclude: ['productId', 'productName']
    },
    assetId: {
        fieldsToInclude: ['assetId', 'assetName']
    },
    taxAssetId: {
        fieldsToInclude: ['taxAssetId', 'taxAssetName']
    },
    monthYear: {
        fieldsToInclude: ['month', 'year', 'monthYear', 'monthLabel']
    },
    relationshipManagerId: {
        fieldsToInclude: ['relationshipManagerId', 'relationshipManagerName', 'relationshipManagerEmail']
    },
    accountId: {
        fieldsToInclude: ['accountId', 'accountName', 'accountUniqueId']
    },
    appUserId: {
        fieldsToInclude: ['appUserId', 'appUserName', 'appUserEmail']
    },
    familyId: {
        fieldsToInclude: ['familyId', 'familyName']
    },
    serviceProviderId: {
        fieldsToInclude: ['serviceProviderId', 'serviceProviderName', 'serviceProviderShortName']
    },
    serviceProviderAccountId: {
        fieldsToInclude: ['serviceProviderAccountId', 'serviceProviderAccountNumber']
    },
    instrumentId: {
        fieldsToInclude: ['instrumentId', 'instrumentName', 'instrumentISINCode']
    }
};
let filter = {
    body: {
        query: {
            bool: {
                filter: {
                    bool: {
                        must: 'termClause'
                    }
                }
            }
        }
    }
};
// console.log('filter', JSON.stringify(filter, null, 2));

let groupBy = ['productId'];
filter.body.aggs = {};
let fieldsToInclude = [];

try {
    for (let i = 0; i < groupBy.length; i++) {
        if (!groupByConfiguration[groupBy[i]]) {
            return
            // reject(new RestError(400, `Incorrect group by clause!`));
        }
        // console.log('inside for');

        fieldsToInclude = fieldsToInclude.concat(groupByConfiguration[groupBy[i]].fieldsToInclude);
        let currentClause = {
            terms: {
                field: groupBy[i],
                size: 'limit'
            },
            aggs: {}
        };
        if (previousAggegationClause) {
            previousAggegationClause[groupBy[i]] = currentClause;
        } else {
            // console.log("**************");
            // console.log('inside else', JSON.stringify(filter, null, 2));
            filter.body.aggs[groupBy[i]] = currentClause;

            // console.log("##########");
            // console.log(JSON.stringify(filter, null, 2));
        }
        // console.log(' currentClause.aggs', currentClause.aggs);

        var previousAggegationClause = currentClause.aggs;
        // console.log(i == groupBy.length - 1, 'previousAggegationClause******', previousAggegationClause);
        if (i == groupBy.length - 1) {
            // console.log('insdie group')
            previousAggegationClause.totalRevenue = {
                'sum': {
                    'field': 'revenueAmount'
                }
            };
            // console.log(JSON.stringify(filter,null,2));
            // console.log('^^^^^^^^^^^^^^^^^^^^')
            previousAggegationClause.results = {
                'top_hits': {
                    sort: 'orderBy',
                    size: 1,
                    _source: ['_id'].concat(fieldsToInclude)
                }
            };
            // console.log('$$$$$$$$$$$$$')

            // console.log('%%%%%', JSON.stringify(filter, null, 2));

        }
        // console.log('previousAggegationClause******', previousAggegationClause);
    };
} catch (e) {
    console.log(e)
}
// console.log('filter', JSON.stringify(filter, null, 2));

const data = {
    value1: {
        bucket: [{
                value2: {
                    bucket: [{
                        result: {
                            hits: {
                                hits: [{ finalValue: 5 }, { finalValue: 4 }]
                            }
                        }
                    }]
                }
            },
            {
                value2: {
                    bucket: [{
                        result: {
                            hits: {
                                hits: [{ finalValue: 3 }, { finalValue: 2 }]
                            }
                        }
                    }]
                }
            }
        ]
    }
}

var _ = require('lodash');

const flatData = [];
// console.log('typeof flatData', typeof flatData)

// console.log(JSON.stringify(data, null, 2));

var finalArray = [];
checkIfObjectOrArray(data)
var cnt = 0;

function checkIfObjectOrArray(data) {

    // console.log(Array.isArray(data),data)
    if (Array.isArray(data)) {
        // console.log('insdie if***')
        // console.log("array data==>",'AAA', data)
        _.map(data, (item) => {
            console.log('insdieeach', item)
            return checkIfObjectOrArray(item)
        })
    } else {
        console.log('OOO', data)
        Object.keys(data).forEach(function(key, index) {
            console.log('key', key, key == 'result');
            if (key == 'result') {
                console.log(data['result'], 'HHHHHHHHHHHHHH===>>', key);
                finalArray.push(data['result']);
            }
            data = data[key];
            // console.log(key)
            // if(data[key]=='hits'){
            //   console.log('key')
            //   finalArray.push(data);
            //   console.log(finalArray)
            // }
            // console.log(data)
            return checkIfObjectOrArray(data)
        });
    }
}
console.log('finalArray', finalArray)

// function flatter(data, pushTo, currentBucket) {
//     if (data) {
//         const keys = Object.keys(data);
//         console.log('keys',keys);
//         const values = keys.map(x => x);
//         console.log('values',values);
//         if ((values || []).indexOf('result') > -1) {
//             return pushTo.push(data.result);
//         }
//         values.forEach(function(index) {
//           console.log('values',values,'index',index,'inside finEach',data[index])
//             return flatter(data[index], pushTo);
//         })
//     }
// }

// flatter(data, flatData)

// console.log(JSON.stringify(flatData,null,2));


















// RevenuesReporting.fetchRevenues('2017-11-01','2019-01-01',{"instrumentName":"","accountName":"", "transactionTypeName":""},10,0, ["relationshipManagerId"],[{"relationshipManagerId":"ASC"}])



// RevenuesReporting.fetchRevenues('2017-11-01','2019-01-01',{"instrumentName":"","accountName":"", "transactionTypeName":""},10,0, ["transactionId"],[{"transactionId":"ASC"}])


// accountIds [ 7, 99 ]
//  appUserIds [ 17 ]
//  familyIds [ 8 ]
//  groupIds []
//   type all
//   fromDate undefined
//   toDate undefined
//   productIds []
//    assetIds []
//    isHeldAway undefined
//    searchFilter
//    { instrumentName: '',
//   accountName: '',
//   transactionTypeName: '',
//   serviceProviderAccountNumber: '',
//   productName: '',
//   assetName: '' }
//    limit 7
//    offset 0
//     groupBy [ 'productName' ]
//     orderBy [ { productName: 'ASC' }, { transactionDate: 'DESC' } ]
//     fieldsToInclude [ '_id',
//   'orderId',
//   'accountName',
//   'accountIsHeldAway',
//   'accountIsProspect',
//   'serviceProviderAccountNumber',
//   'transactionDate',
//   'productId',  'quantity',
//   'openingQuantity',
//   'closingQuantity',
//   'openingAmount',
//   'closingAmount',
//   'totalAmount',
//   'serviceProviderReferenceNumber',
//   'transactionStatus',
//   'transactionStatusLabel',
//   'transactionTypeId',
//   'transactionTypeName',
//   'productName',
//   'assetId',
//   'assetName',
//   'instrumentName',
//   'instrumentId',
//   'appUserId',
//   'appUserName',
//   'familyId',
//   'familyName',
//   'transactionSubType',
//   'transactionSubTypeLabel',
//   'pricePerUnit',
//   'serviceProviderId',
//   'serviceProviderName' ]





//    getAggregationObject: function (model, groupByConfig, groupBy, orderBy) {
//     console.log('orderBy', orderBy);
//     let aggs = {};
//     let self = this;
//     let addAggregationLevel = (obj, key, lvl) => {
//       console.log('obj', obj, 'key', key, 'lvl', lvl);
//       let config = groupByConfig[key];
//       obj[key] = {};
//       // console.log('self.isEmbeddedKeywordField(key, model) ? `${key}.keyword` : `${key}`', self.isEmbeddedKeywordField(key, model));
//       let orderByKeyName = self.isEmbeddedKeywordField(key, model) ? `${key}.keyword` : `${key}`;
//       console.log('orderBy, key', orderBy, key);
//       obj[key]['terms'] = {
//         field: orderByKeyName,
//         order: {
//           _term: orderBy[lvl - 1][key]
//         },
//         missing: 'N/A',
//         size: 10000
//       };
//       console.log(obj);
//       obj[key]['meta'] = config.meta;

//       obj[key]['aggs'] = {};
//       if (lvl < groupBy.length) {
//         addAggregationLevel(obj[key]['aggs'], groupBy[lvl], lvl + 1);
//       } else {
//         // nth Child Reached;
//         obj[key]['meta']['totalColumnName'] = config['totalColumnName'];
//         obj[key]['meta']['totalColumnKeys'] = config['totalColumnKeys'];
//         // console.log('obj', obj);
//         // console.log('obj', JSON.stringify(obj));
//         //Add the total columns summation;
//         _.each(config.meta.totalColumnKeys, function (keyToInclude) {
//           obj[key]['aggs'][keyToInclude] = {
//             sum: {
//               field: keyToInclude
//             }
//           };
//           // console.log(JSON.stringify(obj));
//         });
//       }
//     };

//     addAggregationLevel(aggs, groupBy[0], 1);

//     return aggs;
//   },
