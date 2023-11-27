// homework.jsの内容
document.getElementById("addButton").addEventListener("click", function () {
  const list = document.getElementById("todoList");
  const inputValue = document.getElementById("todoInput").value; // 入力された値を取得
  if (inputValue.trim() !== "") {
    // 入力値が空でない場合にリストに追加
    const listItem = document.createElement("li"); // 新しいリスト項目を作成
    const currentNumber = list.children.length + 1; // 現在のリスト項目の数を取得し、新しい項目の番号を決定
    listItem.innerHTML = currentNumber + "： " + inputValue; // リスト項目に番号と入力値をセット
    list.appendChild(listItem); // リスト項目をリストに追加
    document.getElementById("todoInput").value = ""; // 入力フィールドをクリア
  }
});

// 全て消去機能
document.getElementById("clearButton").addEventListener("click", function () {
  const list = document.getElementById("todoList");
  // リストの子要素を全て削除
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
});
// 最後の項目を消去機能のコード
document
  .getElementById("removeLastButton")
  .addEventListener("click", function () {
    const list = document.getElementById("todoList");
    if (list.children.length > 0) {
      // リストに項目がある場合のみ
      list.removeChild(list.lastChild); // リストの最後の子要素を削除
    }
  });
