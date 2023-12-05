class DataBase {
  constructor(codeToReceive, parselId, postOfficeBox, cellWithParsel) {
    this.codeToReceive = codeToReceive;
    this.parselId = parselId;
    this.postOffisBox = postOfficeBox;
    this.cellWithParsel = cellWithParsel;
  }
}

class User {
  constructor(amount, parcellCost) {
    this.amount = amount;
    this.parcellCost = parcellCost;
  }
}
class Parcel {
  constructor(cost, parselId, cellWithParsel) {
    this.cost = cost;
    this.parselId = parselId;
    this.cellWithParsel = cellWithParsel;
  }
}

class PostOffice {
  constructor(PostOfficeBox, PostOfficeBoxcell) {
    this.PostOfficeBox = PostOfficeBox;
    this.PostOfficeBoxcell = PostOfficeBoxcell;
  }
}
class Message {
  constructor(smsCode, messageToReceive) {
    this.smsCode = smsCode;
    this.messageToReceive = messageToReceive;
  }
}

let newUser = new User(500, 100);
console.log(newUser);

let myDataBase = new DataBase(
  "A001DFX0",
  "1432HGF",
  [null, null, null, "1432HGF", null],
  4
);
console.log(myDataBase);

let myParcel = new Parcel(100, "1432HGF", 4);
console.log(myParcel);

let myPostOffice = new PostOffice([null, null, null, "1432HGF", null], 4);
console.log(myPostOffice);

let myMessage = new Message(
  "A001DFX0",
  "The parsel is in the cell N4,code to receive = A001DFX0"
);
console.log(myMessage);

let smsCodeMessage = new Message(this.smsCode);
let codeToReceiveMessage = new DataBase(this.codeToReceive); //пришлось сохранить в отдельные переменные, иначе никак не получалось, программа не видела значения. Хотя только что все благополучно выводила в значениях переменных
let userAmount = new User(this.amount);
let costParsel = new Parcel(this.cost);

function compareCode(smsCodeMessage, codeToReceiveMessage) {
  if ((smsCodeMessage = codeToReceiveMessage)) {
    function calculateResultAmount(userAmount, costParsel) {
      let resultAmount = userAmount - costParsel;
      console.log(resultAmount);
    }

    calculateResultAmount(userAmount, costParsel);

    console.log("Pick up parcel 1432HGF from cell #4. Your bill is: 400 units");
  } else {
    console.log("You entered an incorrect code");
  }
}
compareCode(smsCodeMessage, codeToReceiveMessage);

// кажется опять случилась потеря контекста, пришлось делать через this
