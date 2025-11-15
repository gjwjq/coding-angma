// function 기계(구멍) {
//   this.q = 구멍
//   this.w = 'snowball'
// }


// const nunu = new 기계('consume')
// const garen = new 기계('strike')

class Hero {
  constructor(q, w) {
    this.q = q
    this.w = w
  }

  dmddo(){
    console.log(this.q);
  }
}

const newNunu = new Hero('으랴앗', '데굴데굴')
const newGaren = new Hero('찍기', '살살맞기')

newNunu.dmddo()
newGaren.dmddo()


//생성자 함수

const Dkrl = function(dmddo,tl){
  this.tl = tl
  this.dmddo = dmddo
  this.fuc = function() {
    console.log(`${this.dmddo}아`)
  }
}

const hob = new Dkrl("시","새")

hob.fuc()


// console.log(newNunu, newGaren);

// const nunu = {
//   q : 'consume', 
//   w : 'snowball'
// }

// const garen = {
//   q : 'strike',
//   w : 'courage'
// }
