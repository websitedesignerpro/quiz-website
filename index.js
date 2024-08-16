 // Array to store questions
 var questions = [
  "What does HTML stand for?\nA. Hyper Text Markup Language\nB. Home Tool Markup Language\nC. Hyperlinks and Text Markup Language\nD. Hyper Tool Markup Language",
  "Who is making the Web standards?\nA. Mozilla\nB. Google\nC. Microsoft\nD. The World Wide Web Consortium",
  "Choose the correct HTML element for the largest heading:\nA. <heading>\nB. <h6>\nC. <h1>\nD. <h2>",
  "What is the correct HTML element for inserting a line break?\nA. <break>\nB. <br>\nC. <lb>\nD. <hr>",
  "Which HTML attribute is used to define inline styles?\nA. style\nB. class\nC. font\nD. styles",
  "How can you make a numbered list in HTML?\nA. <ul>\nB. <ol>\nC. <dl>\nD. <list>",
  "Which HTML element is used to specify a footer for a document or section?\nA. <bottom>\nB. <section>\nC. <footer>\nD. <foot>",
  "Which character is used to indicate an end tag in HTML?\nA. ^\nB. /\nC. *\nD. <",
  "What is the correct HTML for creating a hyperlink?\nA. <a>http://www.example.com</a>\nB. <a href=\"http://www.example.com\">Example</a>\nC. <a url=\"http://www.example.com\">Example</a>\nD. <link>http://www.example.com</link>",
  "Which HTML attribute is used to define the title of the document?\nA. <meta>\nB. <head>\nC. <title>\nD. <body>"
];

// Array to store the correct answers (use A, B, C, or D)
var correctAnswers = ["A", "D", "C", "B", "A", "B", "C", "B", "B", "C"];

// Variable to keep track of the score
var score = 0;

// Question 1
var userAnswer1 = prompt(questions[0]);
if (userAnswer1.toUpperCase() === correctAnswers[0]) {
  score++;
  alert("Correct!");
} else {
  alert("Incorrect! The correct answer was " + correctAnswers[0]);
}

// Question 2
var userAnswer2 = prompt(questions[1]);
if (userAnswer2.toUpperCase() === correctAnswers[1]) {
  score++;
  alert("Correct!");
} else {
  alert("Incorrect! The correct answer was " + correctAnswers[1]);
}

// Question 3
var userAnswer3 = prompt(questions[2]);
if (userAnswer3.toUpperCase() === correctAnswers[2]) {
  score++;
  alert("Correct!");
} else {
  alert("Incorrect! The correct answer was " + correctAnswers[2]);
}

// Question 4
var userAnswer4 = prompt(questions[3]);
if (userAnswer4.toUpperCase() === correctAnswers[3]) {
  score++;
  alert("Correct!");
} else {
  alert("Incorrect! The correct answer was " + correctAnswers[3]);
}

// Question 5
var userAnswer5 = prompt(questions[4]);
if (userAnswer5.toUpperCase() === correctAnswers[4]) {
  score++;
  alert("Correct!");
} else {
  alert("Incorrect! The correct answer was " + correctAnswers[4]);
}

// Question 6
var userAnswer6 = prompt(questions[5]);
if (userAnswer6.toUpperCase() === correctAnswers[5]) {
  score++;
  alert("Correct!");
} else {
  alert("Incorrect! The correct answer was " + correctAnswers[5]);
}

// Question 7
var userAnswer7 = prompt(questions[6]);
if (userAnswer7.toUpperCase() === correctAnswers[6]) {
  score++;
  alert("Correct!");
} else {
  alert("Incorrect! The correct answer was " + correctAnswers[6]);
}

// Question 8
var userAnswer8 = prompt(questions[7]);
if (userAnswer8.toUpperCase() === correctAnswers[7]) {
  score++;
  alert("Correct!");
} else {
  alert("Incorrect! The correct answer was " + correctAnswers[7]);
}

// Question 9
var userAnswer9 = prompt(questions[8]);
if (userAnswer9.toUpperCase() === correctAnswers[8]) {
  score++;
  alert("Correct!");
} else {
  alert("Incorrect! The correct answer was " + correctAnswers[8]);
}

// Question 10
var userAnswer10 = prompt(questions[9]);
if (userAnswer10.toUpperCase() === correctAnswers[9]) {
  score++;
  alert("Correct!");
} else {
  alert("Incorrect! The correct answer was " + correctAnswers[9]);
}

// Display the final score
alert("You got " + score + " out of " + questions.length + " correct!");