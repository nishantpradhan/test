const { get } = require('lodash')
const park = [{
    slug: '/',
    published: true,
    _defaults: {
      title: 'Home',
      type: 'home'
    },
    _children: [{
        slug: 'parkedPages.dl.home',
        published: true,
        _defaults: {
          type: '@dgad/dealer-locator-page',
          title: 'Dealer Locator Page'
        },
        parkedId: 'dealerLocator'
      },
      {
        slug: 'parkedPages.dealers',
        published: true,
        _defaults: {
          type: '@dgad/dealer-page',
          title: 'Dealers'
        },
        parkedId: 'dealers'
      },
      {
        slug: 'parkedPages.ts.tyres',
        published: true,
        _defaults: {
          type: 'b2c-tyre-selector-page',
          title: 'Tyre Selector'
        },
        parkedId: 'tyreSelector'
      },
      {
        slug: 'parkedPages.ts.tyre',
        published: true,
        _defaults: {
          type: 'b2c-product-page',
          title: 'Tyres'
        },
        parkedId: 'tyres'
      },
      {
        slug: 'parkedPages.tyresSizes.car',
        published: true,
        _defaults: {
          type: 'b2c-tyre-sizes-page',
          title: 'Car Tyres Sizes',
          persona: '4W'
        },
        parkedId: 'carTyresSizes'
      },
      {
        slug: 'parkedPages.tyresSizes.classic',
        published: true,
        _defaults: {
          type: 'b2c-tyre-sizes-page',
          title: 'Classic Tyres Sizes',
          persona: 'CL'
        },
        parkedId: 'classicTyresSizes'
      },
      {
        slug: 'parkedPages.tyresSizes.motorsport',
        published: true,
        _defaults: {
          type: 'b2c-tyre-sizes-page',
          title: 'Motorsport Tyres Sizes',
          persona: 'MTS'
        },
        parkedId: 'motorsportTyresSizes'
      },
      {
        slug: 'parkedPages.tyresSizes.motorbike',
        published: true,
        _defaults: {
          type: 'b2c-tyre-sizes-page',
          title: 'Motorbike Tyres Sizes',
          persona: 'MO'
        },
        parkedId: 'motorbikeTyresSizes'
      },
      {
        slug: 'parkedPages.bicycle.riders',
        published: true,
        _defaults: {
          type: 'b2c-bicycle-rider-page',
          title: 'Bicycle Rider',
          persona: 'BI'
        },
        parkedId: 'riders'
      },
      {
        slug: 'parkedPages.dealerCampaign',
        published: true,
        _defaults: {
          type: '@dgad/dealer-campaign-page',
          title: 'Dealer Campaign'
        },
        parkedId: 'campaign'
      },
      {
        slug: {
          _default: '/search'
        },
        published: true,
        _defaults: {
          title: 'Algolia List Page',
          type: '@dgad/algolia-list-page',
          persona: 'none'
        },
        parkedId: 'algoliaListPage'
      },
      {
        slug: {
          _default: '/blog'
        },
        parkedId: 'blogPage',
        published: true,
        persona: 'none',
        _defaults: {
          type: '@dgad/blog-pages',
          title: 'Blog'
        }
      }
    ]
  },
  {
    slug: '/',
    published: true
  }
]


// const computeParkedId = (park) => {
//   console.log(park)
//   const array = park.reduce((acc, item) => {
//     console.log(item,'<<<')
//    const type = item.parkedId || (item?._defaults?.type==='home' ? 'home':'')
//     if (type) { acc.push(type) }
//       acc.push(...computeParkedId(_.get(item, '_children', [])))
//    return acc
//  }, [])
//   return array
// }


const computeParkTypes = (park) => {
  return park.flatMap((page) => {
    const type = page.parkedId || (page?._defaults?.type === 'home' ? 'home' : '')
    return [type, ...computeParkTypes(get(page, '_children', []))]
  }).filter(Boolean)
}


// const test = (park) => {
//   console.log(park)
//   const array = park.reduce((acc, item) => {
//     const type = item.type === 'sat' ? item.type : ''
//     if (type) {
//       acc.push(type)
//     }
//     acc.push(...test(_.get(item, '_children', [])))
//     return acc
//   }, [])
//   return array
// }

const testData = [{
    attr1: 'das',
    type: 'sat',
    _children: [{
        attr1: 'das',
        type: 'sat'
      },
      {
        attr1: 'das',
        type: 'sat'
      },
      {
        attr1: 'das',
        type: 'sat'
      },
      {
        attr1: 'das',
        type: 'sat'
      }
    ]
  },

];


console.log(computeParkTypes(park))
// console.log(test(testData))













// function flatten(obj) {
//   const result = {};
//   for (const key of Object.keys(obj)) {
//     console.log('key',key)
//     if (typeof obj[key] === 'object') {
//       const nested = flatten(obj[key]);
//       for (const nestedKey of Object.keys(nested)) {
//         result[`${key}.${nestedKey}`] = nested[nestedKey];
//       }
//     } else {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// }

// console.log(data)