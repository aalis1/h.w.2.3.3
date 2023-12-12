const box = ["empty", "package 1432HGF", "empty"];
const smsCode = "A001DFX0";

userAmount = 500;

if (box[1] === "package 1432HGF" && smsCode === "A001DFX0") {
  userAmount -= 100;
  console.log(
    `Заберите посылку 1432HGF из ячейки №4. Ваш счет составляет: ${userAmount} `
  );
} else {
  console.log("You entered an incorrect code");
}
