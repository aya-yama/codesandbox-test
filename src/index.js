/**
 * const, let等の変数宣言
 */

// var var1 = "var変数";
// console.log(var1);

// // var変数は上書き可能
// var1 = "var変数を上書き";
// console.log(var1);

// // var変数は再宣言可能
// var var1 = "var変数を再宣言";
// console.log(var1);

// let val2 = "let変数";
// console.log(val2);

// // let変数は上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // let変数は再宣言不可
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可能
// val3 = "const変数を上書き";

//const変数は再宣言不可能
// const val3 = "const変数を再宣言";

// constでもオブジェクトを定義した場合、プロパティを変更可能
// const val4 = {
//   name: "aya",
//   height: 160
// };
// val4.name = "あや";
// val4.color = "momo";
// console.log(val4);

// constでも配列を定義した場合、プロパティを変更可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "aya";
// const height = 160;

// // 従来
// const message1 = "私の名前は" + name + "です。身長は" + height + "です。";
// console.log(message1);

// // テンプレート文字列を使用した方法
// const message2 = `私の名前は${name}です。身長は${height}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数 (省略表記も可能)
// const func2 = (str) => {
//   return str;
// };
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 30));

/**
 * 分割代入
 */
// オブジェクトの場合・・
// const myProfile = {
//   name: "aya",
//   height: 160
// };
// const message3 = `私の名前は${myProfile.name}です。身長は${myProfile.height}です。`;
// console.log(message3);

// const { name, height } = myProfile;
// const message4 = `私の名前は${name}です。身長は${height}です。`;
// console.log(message4);

// 配列の場合・・
// const myProfile = ["aya", 160];
// const message5 = `私の名前は${myProfile[0]}です。身長は${myProfile[1]}です`;
// console.log(message5);

// const [name, height] = myProfile;
// const message6 = `私の名前は${name}です。身長は${height}です`;
// console.log(message6);

// デフォルト値、引数など
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("aya");

/**
 * スプレット構文
 */
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(...arr3);

// 配列のコピー
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(...arr7);

// const arr8 = arr4;
// arr8[0] = 0;
// console.log(arr8);
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "aya"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}番目は、${nameArr[i]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は、${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newnumArr = numArr.filter((num) => num % 2 === 1);
// console.log(newnumArr);

// const newnameArr = nameArr.map((name) => {
//   if (name === "aya") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(...newnameArr)

/**
 * 三項演算子
 */
// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "１００を超えています" : "許容範囲内です";
};
console.log(checkSum(50, 70));

/**
 * 論理演算子の本当の意味を知ろう
 */
const flag1 = true;
const flag2 = true;

if (flag1 || flag2) {
  console.log("1か2はTrueです");
}
if (flag1 && flag2) {
  console.log("1も2もTrueです");
}

//　||は左側がtrueなら、左側を返す
//　||は左側がfalseなら、右側を返す。
const num = null;
const fee1 = num || "金額が設定されていません";
console.log(fee1);

// &&は左側がtrueなら、右側を返す。
// &&は左側がfalseなら、左側を返す
const num2 = 100;
const fee2 = num2 && "金額が設定されています";
console.log(fee2);
