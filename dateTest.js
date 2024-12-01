const date = require('./date')

// const data = ['as']

const manu = ['www.michelin.cz/auto/vyrobci/ford', '44']

const models = [
  ['www.michelin.cz/auto/vyrobci/ford/bronco', '2'],
  ['www.michelin.cz/auto/vyrobci/ford/bron211co', '2']
]
// const [a, b] = data

// const data = manu
// console.log(data, 'data')


const toStore = (data) => {
  const type = isNaN(data) ? 'string' : 'number';
  switch (type) {
    case 'string':
      data = data.substr(data.lastIndexOf("/") + 1);
      break;
    case 'number':
      data = Number(data);
      break;
    default:
      console.log('Data not mapped!')
      break;
  }

  return data;
};


//   console.log(manufacturerName.lastIndexOf("/"))

//   manufacturer: manufacturerName.substr(manufacturerName.lastIndexOf("/") + 1, manufacturerName.length),
//     count: data[1]
//   return obj
// }

const docData = {};

function createObject(manu, models) {
  const [manufacturerName, manufacturerCount] = manu;
  const docData = {
    manufacturer: {
      name: toStore(manufacturerName),
      count: toStore(manufacturerCount),
      models: models.map(([modelName, modelCount]) => ({
        name: toStore(modelName),
        count: toStore(modelCount)
      }))
    }
  };

  return docData;
}


var startTime, endTime;

function start() {
  startTime = new Date();
};

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  var seconds = Math.round(timeDiff);
  console.log(seconds + " seconds");
}

console.log(new Date())
var clockedIn = new Date();


let number = 0 //hard limit
function checkTimeDelay() {
  const apiCalls = 0;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var clockedOut = new Date();
      var seconds = (clockedOut - clockedIn) / 1000
      console.log('completed 10 sec,Ready for another batch', seconds)
      return Promise.resolve()
    }, 5000)
  })
}

function wait(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}
// checkTimeDelay()
// number = 
async function RequestInBatches() {
  let cnt = 0;
  let totalRequests = Array.from({
    length: 100
  }, (_, i) => i + 1)
  console.log(totalRequests)
  for (let request of totalRequests) {
    cnt++
    console.log('request no :', request)
    if (cnt == 5) {
      await wait(5000) // 5 seconds
      await requestInSubBatches(request, totalRequests)
      await wait(5000)
      cnt = 0;
    }
  }
}


let totalRequests = Array.from({
  length: 100
}, (_, i) => i + 2)
for (let [i, request] of totalRequests.entries()) {
  console.log(request, i, 'request')
}


// async function requestInSubBatches(request) {

//   while ()

// }

// RequestInBatches()

// console.log(JSON.stringify(createObject(manu, models), null, 2))