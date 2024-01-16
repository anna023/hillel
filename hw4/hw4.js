// реалізувати реверс стрінги (вивод в зворотньому порядку)
// 1.
function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse("string"));

//2.
function reverse(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
console.log(reverse("string"));

// реалізувати функцію поліндром (коли в обидва боки одинакова стрінга)
//1.
function isPalindrome(str, str1, str2, str3) {
  console.log(str === str.split("").reverse().join(""));

  console.log(str1 === str1.split("").reverse().join(""));

  console.log(str2 === str2.split("").reverse().join(""));

  console.log(str3 === str3.split("").reverse().join(""));
}
isPalindrome("tenet", "abba", "100001", "qwerty");

//2.
function palindrom(str) {
  let str1 = str.split("").reverse().join("");
  if (str1 === str) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrom("qwerty"));

// вивести тільки парні числа з масиву, вивести в зворотньому порядку

let array = [1, 2, 3, 4, 5, 6, 7];
let newArray = array.filter((num) => num % 2 === 0).reverse();
console.log(newArray);
