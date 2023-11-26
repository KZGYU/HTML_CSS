// 現在の日付を取得
const today = new Date();

// 年、月、日を取得（月は0から始まるため、1を加える）
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

// 日付を「年月日」の形式で表示
console.log(`${year}年${month}月${day}日`);
