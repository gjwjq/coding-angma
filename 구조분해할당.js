// 구조 분해 할당 : 구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식

// 예시

let [x, y] = [1, 2]
//x = 1, y = 2

// 예시 2

let users = ['Mike', "Tom", "Jane"]

let [user1, user2, user3] = users
// 아래의 문법과 동일
// let user1 = users[0]
// let user2 = users[1]
// let user3 = users[2]

// 예시 3

let str = "Mike Tom Jane"

let [str1, str2, str3] = str.split(" ")
// 이런식으로 split 써서 문자열 배열로 바꾼 뒤 구조분해할당도 가능

// 만약 1번 인덱스 자리에 2번 인덱스 값을 넣고싶다?

let [st1, ,st2] = str.split(" ")
// 이러면 Tom 건너뛰고 순서대로 Mike랑 Jane의 값만 담김

// 만약 두 변수의 값을 바꾸고 싶다면?

let a = 1;
let b = 2;

[a, b] = [b, a] // 이러면 a = 2, b = 1
// console.log(b); // 1


// 객체 구조 분해

let user = {name : "Mike", age : 30}

let {name, age} = user
// let {age, name} = user 이렇게 순서를 바꿔도 상관X

// console.log(name); // Mike
// console.log(age); // 30

let {name : userName, age : userAge} = user

// 새로운 변수 이름으로 할당하기
// console.log(userName); // Mike
// console.log(userAge); // 30