console.log(document.head);
console.log(document.body);
console.log(window);
console.log(document.getElementById("first-list"));
console.log(document.getElementsByClassName("heading"));
const headings = document.getElementsByClassName("heading");
for (let i = 0; i < headings.length; i++) {
  console.log(headings[i]);
}
console.log(document.querySelector("h1"));
console.log(document.querySelector("#second-heading"));
console.log(document.querySelector(".list"));

console.log(document.querySelectorAll(".heading"));
console.log(document.querySelectorAll("li"));

// 新しくli要素を作成し、定数に代入する

const li = document.createElement("li");

// 作成したli要素にテキストを追加する

li.textContent = "JavaScriptで新しく作成したリスト3";

// ul要素の末尾にli要素を追加する

document.querySelector("ul").appendChild(li);
