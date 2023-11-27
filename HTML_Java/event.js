// output-btnというidを持つHTML要素を取得し、定数に代入する
const outputBtn = document.getElementById("output-btn");

// HTML要素がクリックされたときにイベント処理を実行する
outputBtn.addEventListener("click", () => {
  console.log("クリックされました！");
});

// add-btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById("add-btn");
// parent-listというidを持つHTML要素を取得し、定数に代入する
const parentList = document.getElementById("parent-list");

addBtn.addEventListener("click", () => {
  const childList = document.createElement("li");

  childList.textContent = "これはリスト要素です";

  parentList.appendChild(childList);
});

const countBtn = document.getElementById("count-btn");
countBtn.addEventListener("click", () => {
  const text = document.forms.textForm.textBox.value;
  console.log(text.length + "文字");
});

// area-btnというidを持つHTML要素を取得し、定数に代入する

const areaBtn = document.getElementById("area-btn");

// HTML要素がクリックされたときにイベント処理を実行する

areaBtn.addEventListener("click", () => {
  // 選択されたラジオボタンの値を取得する

  const area = document.forms.areaForm.area.value;

  // 取得した値を出力する

  console.log(area);
});
// os-btnというidを持つHTML要素を取得し、定数に代入する

const osBtn = document.getElementById("os-btn");

// HTML要素がクリックされたときにイベント処理を実行する

osBtn.addEventListener("click", () => {
  // すべてのチェックボックスを配列風のデータで取得する

  const items = document.forms.osForm.os;

  // 繰り返し処理でチェックボックスを1つずつ取り出し、もし選択されていれば値を出力する

  for (let i = 0; i < items.length; i++) {
    if (items[i].checked) {
      console.log(items[i].value);
    }
  }
});
