// 'string literal vs constructor'
var str = "Something"; // string literal
var str2 = String("Something"); // called string constructor
console.log(str2);

var n = 10;
var str3 = String(n);
console.log(str3);

// Escape Notation

var escap1 = "this is 'string' ";
console.log(escap1);

// string comparison
// var a = 'A';
// var b = 'A';
// console.log(a===b);

console.log("001" == 1);

// string methods

var a = "I am";
var b = "Yaseen Arafat";

var c = a.concat("", b);
// var d = c.substring(12, 5);
// console.log(d);
console.log(c.charAt(5));
console.log(c.startsWith("I"));
console.log("abc".toUpperCase());
console.log("   hghgg    ".trim());
console.log(c.split(" "));

// string length
var str_Lenght = "fslkjff fdfsfd";
var slength = 0;
while (true) {
  if (str_Lenght.charAt(slength) == "") {
    break;
  } else {
    slength++;
  }
}
console.log(str_Lenght.length)
console.log(slength);
console.log(str_Lenght.charAt(13));
