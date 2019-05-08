function curryAdd(x) {
  let a = 0
  return (y) => {
    a = x + y
    return a
  }
}

const l = [1,2,3,4,5,6]

console.log(l.map(curryAdd(3)))
// [ 4, 5, 6, 7, 8, 9 ]
console.log(l.map(curryAdd(10)))
// [ 11, 12, 13, 14, 15, 16 ]
