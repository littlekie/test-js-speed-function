function testArrayProgressSpeed() {
  // let arr2 = new Array(arrLength)  speed is Faster
  const time1 = performance.now()
  const arrLength = 10 * 1000
  let arr = []
  for (let i = 0, l = arrLength; i < l; i++) {
    arr.push(i)
  }
  const time2 = performance.now()

  console.log('arr.push need time:', time2 - time1)

  let arr1 = []
  for (let i = 0, l = arrLength; i < l; i++) {
    arr1[i] = i
  }
  const time3 = performance.now()

  console.log('arr=[] need time:', time3 - time2)

  let arr2 = new Array(arrLength)
  for (let i = 0, l = arrLength; i < l; i++) {
    arr2[i] = i
  }
  const time4 = performance.now()

  console.log('new Array(arrLength) need time:', time4 - time3)
}
