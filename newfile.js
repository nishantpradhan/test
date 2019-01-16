RevenuesReporting.fetchRevenues('2017-11-01','2019-01-01',{"instrumentName":"","accountName":"", "transactionTypeName":""},10,0, ["relationshipManagerId"],[{"relationshipManagerId":"ASC"}])



RevenuesReporting.fetchRevenues('2017-11-01','2019-01-01',{"instrumentName":"","accountName":"", "transactionTypeName":""},10,0, ["transactionId"],[{"transactionId":"ASC"}])


accountIds [ 7, 99 ]
 appUserIds [ 17 ]
 familyIds [ 8 ]
 groupIds []
  type all
  fromDate undefined
  toDate undefined
  productIds []
   assetIds []
   isHeldAway undefined
   searchFilter
   { instrumentName: '',
  accountName: '',
  transactionTypeName: '',
  serviceProviderAccountNumber: '',
  productName: '',
  assetName: '' }
   limit 7
   offset 0
    groupBy [ 'productName' ]
    orderBy [ { productName: 'ASC' }, { transactionDate: 'DESC' } ]
    fieldsToInclude [ '_id',
  'orderId',
  'accountName',
  'accountIsHeldAway',
  'accountIsProspect',
  'serviceProviderAccountNumber',
  'transactionDate',
  'productId',  'quantity',
  'openingQuantity',
  'closingQuantity',
  'openingAmount',
  'closingAmount',
  'totalAmount',
  'serviceProviderReferenceNumber',
  'transactionStatus',
  'transactionStatusLabel',
  'transactionTypeId',
  'transactionTypeName',
  'productName',
  'assetId',
  'assetName',
  'instrumentName',
  'instrumentId',
  'appUserId',
  'appUserName',
  'familyId',
  'familyName',
  'transactionSubType',
  'transactionSubTypeLabel',
  'pricePerUnit',
  'serviceProviderId',
  'serviceProviderName' ]





   getAggregationObject: function (model, groupByConfig, groupBy, orderBy) {
    console.log('orderBy', orderBy);
    let aggs = {};
    let self = this;
    let addAggregationLevel = (obj, key, lvl) => {
      console.log('obj', obj, 'key', key, 'lvl', lvl);
      let config = groupByConfig[key];
      obj[key] = {};
      // console.log('self.isEmbeddedKeywordField(key, model) ? `${key}.keyword` : `${key}`', self.isEmbeddedKeywordField(key, model));
      let orderByKeyName = self.isEmbeddedKeywordField(key, model) ? `${key}.keyword` : `${key}`;
      console.log('orderBy, key', orderBy, key);
      obj[key]['terms'] = {
        field: orderByKeyName,
        order: {
          _term: orderBy[lvl - 1][key]
        },
        missing: 'N/A',
        size: 10000
      };
      console.log(obj);
      obj[key]['meta'] = config.meta;

      obj[key]['aggs'] = {};
      if (lvl < groupBy.length) {
        addAggregationLevel(obj[key]['aggs'], groupBy[lvl], lvl + 1);
      } else {
        // nth Child Reached;
        obj[key]['meta']['totalColumnName'] = config['totalColumnName'];
        obj[key]['meta']['totalColumnKeys'] = config['totalColumnKeys'];
        // console.log('obj', obj);
        // console.log('obj', JSON.stringify(obj));
        //Add the total columns summation;
        _.each(config.meta.totalColumnKeys, function (keyToInclude) {
          obj[key]['aggs'][keyToInclude] = {
            sum: {
              field: keyToInclude
            }
          };
          // console.log(JSON.stringify(obj));
        });
      }
    };

    addAggregationLevel(aggs, groupBy[0], 1);

    return aggs;
  },
