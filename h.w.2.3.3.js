class DataBase {
  constructor(
    sms,
    parselId,
    postOfficeBox,
    cellWithParsel,
    amount,
    parcellCost
  ) {
    this.sms = sms;
    this.parselId = parselId;
    this.postOffisBox = postOfficeBox;
    this.cellWithParsel = cellWithParsel;
    this.amount = amount;
    this.parcellCost = parcellCost;
  }
  calculation() {
    console.log(this.amount - this.parcellCost);
  }
}

let myDataBase = new DataBase(
  "A001DFX0",
  "1432HGF",
  [empty, "1432HGF", empty],
  4,
  500,
  100
);
console.log(myDataBase);
console.log(
  DataBase.calculation(
    `Заберите посылку 1432HGF из ячейки №4. Ваш счет составляет: ${userAmount} `
  )
);

// class User {
//  myructor(amount, parcellCost) {
//     this.amount = amount;
//     this.parcellCost = parcellCost;
//   }
// }
// class Parcel {
//  myructor(cost, parselId, cellWithParsel) {
//     this.cost = cost;
//     this.parselId = parselId;
//     this.cellWithParsel = cellWithParsel;
//   }
// }

// class PostOffice {
//  myructor(PostOfficeBox, PostOfficeBoxcell) {
//     this.PostOfficeBox = PostOfficeBox;
//     this.PostOfficeBoxcell = PostOfficeBoxcell;
//   }
// }
// class Message {
//  myructor(smsCode, messageToReceive) {
//     this.smsCode = smsCode;
//     this.messageToReceive = messageToReceive;
//   }
// }

// let newUser = new User(500, 100);
// console.log(newUser);

// let myDataBase = new DataBase(
//   "A001DFX0",
//   "1432HGF",
//   [null, null, null, "1432HGF", null],
//   4
// );
// console.log(myDataBase);

// let myParcel = new Parcel(100, "1432HGF", 4);
// console.log(myParcel);

// let myPostOffice = new PostOffice([null, null, null, "1432HGF", null], 4);
// console.log(myPostOffice);

// let myMessage = new Message(
//   "A001DFX0",
//   "The parsel is in the cell N4,code to receive = A001DFX0"
// );
// console.log(myMessage);

// let sms = new Message(this.sms);
// let codeToReceiveMessage = new DataBase(this.sms); //пришлось сохранить в отдельные переменные, иначе никак не получалось, программа не видела значения. Хотя только что все благополучно выводила в значениях переменных
// let userAmount = new User(this.amount);
// let costParsel = new Parcel(this.cost);

// function compareCode(smsCodeMessage, codeToReceiveMessage) {
//   if ((smsCodeMessage = codeToReceiveMessage)) {
//     function calculateResultAmount(userAmount, costParsel) {
//       let resultAmount = userAmount - costParsel;
//       console.log(resultAmount);
//     }

//     calculateResultAmount(userAmount, costParsel);

//     console.log("Pick up parcel 1432HGF from cell #4. Your bill is: 400 units");
//   } else {
//     console.log("You entered an incorrect code");
//   }
// }
// compareCode(smsCodeMessage, codeToReceiveMessage);

// кажется опять случилась потеря контекста, пришлось делать через this

// Можно решить и в стиле, который вы предлагаете, для этого нам нужно создать метод, например в классе DataBase
let DataBase = [sms, parselId, postBox, parselCell];

class DataBase {
  constructor(sms, parselId, postBox, parselCell) {
    //this.userAmounth = userAmounth;
    this.sms = sms;
    this.parselId = parselId;
    this.postBox = postBox;
    this.parselCell = parselCell;
  }
}
// function calculation(userAmounth = 500, costParcel = 100) {
//   console.log(userAmounth - costParcel);
// }

//тут создаем инстансы от нужных нам классов и их методов
let myDataBase = new DataBase("A001DFX0", "1432HGF", "package 1432HGF", 4);
// передаем сюда параметры о посылке

if (postBox === "package 1432HGF" && sms === "A001DFX0") {
  userAmount -= 100;
  console.log(
    `Заберите посылку 1432HGF из ячейки №4. Ваш счет составляет: ${userAmount} `
  );
} else {
  console.log("You entered an incorrect code");
}
//выводим информацию
// }

// Запускаем ---->
DataBase.calculation(); // тут получим вывод из console.log() метода calculation

// class DataBase {
//  myructor(userName, parcel) {
//     this.userName = userName;
//     this.parcel = parcel;
//   }
// }
// let myDataBase = new DataBase("A001DFX0", "1432HGF", 4);
// console.log(myDataBase);
