/*
var firstName, secondName,fullName;

firstName = prompt("Adınız Nedir?");
secondName = prompt("Soyadınız Nedir?");

fullName = firstName +" "+ secondName;
alert("Merhaba, " + fullName);
document.write("Merhaba, " + fullName);
*/

var number1,number2,sum;

number1 = prompt("İlk sayıyı gir");
number2 = prompt("İkinci sayıyı gir");
sum = parseInt(number1) + parseInt(number2);
//parseInt ile integer değere çeviriyoruz. Diğer türlü string olarak geliyor.
alert("Toplam= " + sum)