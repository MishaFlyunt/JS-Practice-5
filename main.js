///JS-Functions

//1 Написати функцію яка буде виводити привітальне повідомлення в консоль.
function showMassage5() {
    let massege = 'Hellow Misha';
    console.log(massege);
}
showMassage5();


//2 Написати функцію яка буде приймати як аргумент ім’я користувача та
// виводити привітання з його іменем.
let name = prompt('Enter your name');

function showMassage6() {
    console.log(`Name - ${name}`);
}
showMassage6()


//3 Написати функцію яка буде додавати 3 числа.
function sum1(a, b, c) {
    return a + b + c;
}
let result2 = sum1(1, 2, 4);
console.log(`Sum - ${result2}`);


//4 Написати функцію яка буде віднімати 2 числа.
function subtraction(a, b) {
    return a - b;
}
let result4 = subtraction(44, 21);
console.log(`Difference - ${result4}`);


//5 Написати функцію яка буде повертати менше з двох чисел.
function minNumber(a, b) {
    if (a > b) {
        return b;
    } else if (b > a) {
        return a;
    }
}
let result3 = minNumber(32, 22);
console.log(`Min number - ${result3}`);


//6 Написати функцію яка буде повертати більше з двох чисел.
function maxNumber(a, b) {
    if (a < b) {
        return b;
    } else if (b < a) {
        return a;
    }
}
let result5 = maxNumber(32, 22);
console.log(`Max number - ${result5}`);


//7 Написати функцію яка буде повертати результат ділення більшого числа на
// менше.(Використовуючи попередні функції)

function division(result5, result3) {
    return result5 / result3;
}
let result6 = division(result5, result3);
console.log(`Division - ${result6}`);


//8 Написати функцію для обрахунку площі прямокутника
function area(a, b) {
    return a * b;
}
let result7 = area(4, 8);
console.log(`The area of the rectangle - ${result7}`);


//9 Написати функцію для обрахунку периметру прямокутника
function perimeter(a, b) {
    return (a + b) * 2;
}
let result8 = perimeter(2, 5);
console.log(`Perimeter of the rectangle - ${result8}`);


//10 Написати функцію для пошуку довжини круга
function circle(a) {
    return (2 * 3.14 * a);
}
let result9 = circle(8);
console.log(`Circuit - ${result9}`);


//11 Написати функцію для пошуку площі круга.
function circle2(a) {
    return 3.14 * (a * a);
}
let result10 = circle2(8);
console.log(`Area of a circle - ${result10}`);


//12 Виведіть за допомогою циклу стовбець парних чисел від 1 до 100 на
// сторінку.
for (i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//13 Заповніть масив 10-тьма іксами(х) за допомогою циклу.
let arr1 = [];
for (i = 0; i < 10; i++) {
    arr1.push('x');
}
console.log(arr1);


//14 Заповніть масив 10-ма випадковими числами (дробами) від 0 до 1 за
// допомогою циклу.Дроби округляйте до двох знаків після коми.
let arr2 = [];
for (i = 0; i < 10; i++) {
    arr2.push(Math.random().toFixed(2));
}
console.log(arr2);

//15 Дано масив із числами arr2 = [1, 2, 3, 4, 5] . За допомогою циклу
// знайдіть суму квадратів елементів цього масиву.
arr3 = [1, 2, 3, 4, 5];
let sum5 = 0;
for (i = 0; i <= arr3.length - 1; i++) {
    sum5 += arr3[i] * arr3[i]
}
console.log(`Cума квадратів масиву - ${sum5}`);

//16 Дано масив із числами arr3 = [1, 2, 3, 7, 6, 9] . 
// Знайдіть середнє арифметичне його елементів(суму елементів, ділимо на кількість елементів).
arr4 = [1, 2, 3, 7, 6, 9];
let sum6 = 0;
for (i = 0; i <= arr4.length - 1; i++) {
    sum6 += arr4[i] / arr4.length;
}
console.log(`Середнє арефметичне - ${sum6.toFixed(2)}`);


//17 Повторіть поведінку кнопки: після натискання на неї (вона виводить
// алертом вміст інпуту, піднесений до квадрату):
function buttonClick() {
    let buton = document.getElementById('input');
    let number = buton.value;
    let square = number * number;
    alert(square);
}

//18 Повторіть поведінку кнопки натискання на неї (вона здійснює обмін вмістом
// між двома інпутами.
function buttonClickReverse() {
    let buton = document.getElementById('reverse');
    let buton2 = document.getElementById('reverse2');
    let number = buton.value;
    let number2 = buton2.value;
    buton2.value = number;
    buton.value = number2;
}


//19 Повторіть поведінку кнопки після натискання на неї поміняється колір
// тексту в інпуті поруч:
function buttonClickColor() {
    let buton = document.getElementById('color').style.color = '#CD5C5C';
}