function 기계() {
  this.q = 'strike'
  this.w = 'snowball'
}

기계.prototype.name = "kim" // 부모 유전자에 name이란 속성을 추가

const nunu = new 기계()

console.log(nunu.name); // 부모 속성을 물려받음

const arr = [4,2,1]

console.log(arr.sort(), arr.length);

Array.prototype.addInArr = function() {
  this.shift()
  this.pop()
  this.push(123)
  this.unshift('goodTest')
}

const testArr = [1,2,3,4,6]

testArr.addInArr()

console.log(testArr);
