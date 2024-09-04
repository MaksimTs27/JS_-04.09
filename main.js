//Conditional branching
//task 1

let age = 22;

if (age >= 18) {
  console.log('You are adult!');
} else {
  console.log('You are young.');
}

//task 2

let number = 83;

if (number % 2 === 0) {
  console.log('Your number is even!');
} else {
  console.log('Your number is odd.');
}

//task 3

let score = 54;

if (score >= 0 && score <= 25) {
  console.log('Неудовлетворительно');
} else if (score > 25 && score <= 50) {
  console.log('Удовлетворительно');
} else if (score > 50 && score <= 75) {
  console.log('Хорошо');
} else if (score > 75 && score <= 100) {
  console.log('Отлично');
} else {
  console.log('Ваш счет превышает лимиты!');
}

//SWITCH
//task 1

let day = 5;
switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tusday');
    break;
  case 3:
    console.log('Wensday');
    break;
  case 4:
    console.log('Thusday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  case 7:
    console.log('Sunday');
    break;
}

//task 2
let grade = 3;
switch (grade) {
  case 1:
    console.log('Плохо');
    break;
  case 2:
    console.log('Удовлетворительно');
    break;
  case 3:
    console.log('Хорошо');
    break;
  case 4:
    console.log('Очень хорошо');
    break;
  case 5:
    console.log('Отлично');
    break;
}

//task 3

let hour = 5;

switch (true) {
  case hour >= 4 && hour <= 10:
    console.log('Доброе утро');
    break;
  case hour > 10 && hour <= 17:
    console.log('Добрый день');
    break;
  case hour > 17 && hour <= 23:
    console.log('Добрый вечер');
    break;
  case hour === 23 || (hour >= 0 && hour < 5):
    console.log('Доброй ночи');
    break;
  default:
    console.log(' Указали не правильное время.');
}

//FOR
//task 1

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//task 2
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);

//task 3

for (let i = 2; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//WHILE
//task 1
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//task 2
let k = 1;
let summery = 0;
while (k <= 50) {
  summery += k;
  k++;
}
console.log(summery);

//task 3
let j = 2;
while (j <= 50) {
  if (j % 2 === 0) {
    console.log(j);
  }
  j++;
}
