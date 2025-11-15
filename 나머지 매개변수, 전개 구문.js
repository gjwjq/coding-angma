// ... (spread문법)

// js에서 함수에 넘겨주는 인수의 개수는 제약이 없음

function add(...numbers) {
  let result = numbers.reduce((acc, cur) => {
  return acc + cur
  },0)
  console.log(result);
}

add(1,2,3)
add(1,2,3,4,5,6,7,8,9,10)