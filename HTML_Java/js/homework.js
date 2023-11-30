// 入力した文字を追加する
// document.getElementById("addButton").addEventListener("click", () => {
//   const list = document.getElementById("todoList");
//   const inputValue = document.getElementById("todoInput").value; // 入力された値を取得
//   if (inputValue.trim() !== "") {
//     // 入力値が空でない場合にリストに追加
//     const listItem = document.createElement("li"); // 新しいリスト項目を作成
//     const currentNumber = list.children.length + 1; // 現在のリスト項目の数を取得し、新しい項目の番号を決定
//     listItem.innerHTML = currentNumber + "： " + inputValue; // リスト項目に番号と入力値をセット
//     list.appendChild(listItem); // リスト項目をリストに追加
//     document.getElementById("todoInput").value = ""; // 入力フィールドをクリア
//   }
// });

// //enterボタンでも文字を追加する
// document.getElementById("todoInput").addEventListener("keypress", (event) => {
//   // キーがEnterの場合にチェック
//   if (event.key === "Enter") {
//     // ここに追加処理を記述
//     const list = document.getElementById("todoList");
//     const inputValue = document.getElementById("todoInput").value;
//     if (inputValue.trim() !== "") {
//       const listItem = document.createElement("li");
//       const currentNumber = list.children.length + 1;
//       listItem.innerHTML = currentNumber + "： " + inputValue;
//       list.appendChild(listItem);
//       document.getElementById("todoInput").value = "";
//     }
//   }
// });

function addTodoItem() {
  const list = document.getElementById("todoList");
  const inputValue = document.getElementById("todoInput").value;
  if (inputValue.trim() !== "") {
    const listItem = document.createElement("li");
    const currentNumber = list.children.length + 1;
    listItem.innerHTML = currentNumber + "： " + inputValue;
    list.appendChild(listItem);
    document.getElementById("todoInput").value = "";
  }
}

// 入力した文字を追加する（クリックイベント用）
document.getElementById("addButton").addEventListener("click", addTodoItem);

// Enterキーでも文字を追加する（キープレスイベント用）
document.getElementById("todoInput").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTodoItem();
    // フォームのデフォルト動作（フォーム送信）を防止
    event.preventDefault();
  }
});

// 全て消去機能
document.getElementById("clearButton").addEventListener("click", () => {
  const list = document.getElementById("todoList");
  // リストの子要素を全て削除
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
});
// 最後の項目を消去機能のコード
document.getElementById("removeLastButton").addEventListener("click", () => {
  const list = document.getElementById("todoList");
  if (list.children.length > 0) {
    // リストに項目がある場合のみ
    list.removeChild(list.lastChild); // リストの最後の子要素を削除
  }
});

document.getElementById("registerButton").addEventListener("click", () => {
  const todoList = document.getElementById("todoList");
  const registeredList = document.getElementById("registeredList");

  // ToDoリストの項目を登録リストに移動
  while (todoList.children.length > 0) {
    const item = todoList.children[0];
    registeredList.appendChild(item);
  }
});
