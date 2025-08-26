
const a = {}

const b = {
  name: 'test1'
}
const c = {
  name: 'test2'
}
const d = {
  name: 'test3'
} 

a[b] = {
  name: 'fast'
}
a[c] = {
  name: 'slow'
}
console.log(a[b]) // { name: 'fast' }