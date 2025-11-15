const user = {name : '권제이', age : 1124}

Object.assign({}, user) // 첫번째 인자인 텅 빈 객체 안에 user값을 복사해서 새로운 객체를 만듦 {name : '권제이', age : 1124} 이런 객체가 출력됨
Object.keys(user) // 키만 뽑아내서 배열에 담음[name,age]
Object.values(user) // 밸류만 뽑아내서 배열에 담음['권제이', 1124]
Object.entries(user) // 전부 배열로 만들고 그걸 배열에 담음[["name","권제이"],["age",1124]]
 
const arr = [
  ["name", "권제이", 123],
  ["age", 12]
]
console.log(Object.fromEntries(arr))

function makeObj(key, val) {
  return {
    [key] : val
  }
}