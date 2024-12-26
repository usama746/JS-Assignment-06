// QUESTION 01 

document.write("<p>Question 01</p>");


var a = 10;

document.write("Results: ");
document.write("<br>");
document.write("<br>");
document.write("The value of a is: " + a);

document.write("<br>");
document.write("<br>");


document.write("The value of ++a is: " + ++a);
document.write("<br>");
document.write("Now the value of a is: " + a);

document.write("<br>");
document.write("<br>");


document.write("The value of a++ is: " + a++);
document.write("<br>");
document.write("Now the value of a is: " + a);

document.write("<br>");
document.write("<br>");


document.write("The value of --a is: " + --a);
document.write("<br>");
document.write("Now the value of a is: " + a);

document.write("<br>");
document.write("<br>");


document.write("The value of a-- is: " + a--);
document.write("<br>");
document.write("Now the value of a is: " + a);


document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");



// QUESTION 02 

document.write("<p>Question 02</p>");

var a = 2;
var b = 1;

document.write("<br>");

document.write("The value of a is: " + a);

document.write("<br>");

document.write("The value of b is: " + b);

document.write("<br>");

var result = --a - --b + ++b + b--;
document.write("The value of result ( --a - --b + ++b + b-- )is: " + result);

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");




// QUESTION 03

document.write("<p>Question 03</p>");


var name = prompt("Enter Your Full Name");
document.write("Welcome " + name);


document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");



// QUESTION 05

document.write("<p>Question 05</p>");

var num1 = 5;
var num2 = +prompt("Enter Number", 5);
document.write("Table of " + num2);

document.write("<br>");
document.write("<br>");

document.write(num2 * 1);
document.write("<br>");
document.write(num2 * 2);
document.write("<br>");
document.write(num2 * 3);
document.write("<br>");
document.write(num2 * 4);
document.write("<br>");
document.write(num2 * 5);
document.write("<br>");
document.write(num2 * 6);
document.write("<br>");
document.write(num2 * 7);
document.write("<br>");
document.write(num2 * 8);
document.write("<br>");
document.write(num2 * 9);
document.write("<br>")
document.write(num2 * 10);




// QUESTION 06

document.write("<p>Question 06</p>");

var sub1 = prompt("Enter First Subject Name");
var mark1 = +prompt("Enter " + sub1 + " Score");
var sub2 = prompt("Enter Second Subject Name");
var mark2 = +prompt("Enter " + sub2 + " Score");
var sub3 = prompt("Enter Third Subject Name");
var mark3 = +prompt("Enter " + sub3 + " Score");
var total1 = 80;
var total2 = 80;
var total3 = 80;
var per1 = (mark1 / total1) * 100;
var per2 = (mark2 / total2) * 100;
var per3 = (mark3 / total3) * 100;


document.write("<br>");
document.write("<br>");


document.write("Subject" + "&nbsp" + "Total Marks" + "&nbsp" + "&nbsp" + "&nbsp" + "Marks Obtained" + "&nbsp" + "&nbsp" + "&nbsp" + "Percentage");

document.write("<br>");
document.write("<br>");

document.write(sub1 + "&nbsp" + "&nbsp" + "&nbsp" + total1 + "&nbsp" + "&nbsp" + "&nbsp" + mark1 + "&nbsp" + "&nbsp" + "&nbsp" + per1);

document.write("<br>");
document.write("<br>");

document.write(sub2 + "&nbsp" + "&nbsp" + "&nbsp" + total2 + "&nbsp" + "&nbsp" + "&nbsp" + mark2 + "&nbsp" + "&nbsp" + "&nbsp" + per2);

document.write("<br>");
document.write("<br>");

document.write(sub3 + "&nbsp" + "&nbsp" + "&nbsp" + total3 + "&nbsp" + "&nbsp" + "&nbsp" + mark3 + "&nbsp" + "&nbsp" + "&nbsp" + per3);

document.write("<br>");
document.write("<br>");

document.write("&nbsp" + "&nbsp" + "&nbsp" + (total1 + total2 + total3) + "&nbsp" + (mark1 + mark2 + mark3) + "&nbsp" + ((per1 + per2 + per3) / 300 * 100));
