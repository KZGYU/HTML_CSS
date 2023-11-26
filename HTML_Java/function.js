const sayGoodMorning = () => {
  console.log("おはようございます！");
  console.log("昨日はよく眠れましたか？");
  console.log("今日も一日頑張りましょう！");
};

const sayGoodEvning = () => {
  console.log("こんばんわ！");
  console.log("今日も一日お疲れ様でした。");
};

sayGoodMorning();
sayGoodEvning();

const addtwoarg = (price1, price2) => {
  console.log(price1 + price2 + "円");
};

addtwoarg(1200, 5400);

const double = (num) => {
  return num * 2;
};
console.log(double(30));
