//생성자 함수
function User(name, age) {
  this.name = name
  this.age = age
}

let user1 = new User('mike', 30)
let user2 = new User('jane', 16)
let user3 = new User('tim', 5)

//console.log(User);

function Item(title, price) {
  this.title = title
  this.price = price
  this.showPrice = () =>{
      console.log(`가격은 ${price}원 입니다.`);
  }

}
const item1 = new Item('바지', 1000)
console.log(item1.showPrice());
const item2 = new Item('다지', 2000)
const item3 = new Item('가지', 3000)

//console.log(item1, item2, item3);