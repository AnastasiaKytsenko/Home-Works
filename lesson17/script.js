'use strict';

// alert('Привет');
// alert('Пока');

/*
alert(3+
2+
4);
*/

let message;

message = 10;

console.log(message);

message = 20;

console.log(message);

let user = 'John', 
    age = 20,
    height = 180;

let hello;

hello = user;

console.log(hello);

// userName \ userAge \ user_name 

// В названии переменных важен регистр
// переменная apple и Apple разные
// Запрещается использовать задокументированные названия

const COLOR_ITEM = '#fff';

message = 'hello';

// Тип данных Числа (Number)
message = 123;

let number = 15.25; // Числа с плавающей точкой

// Существуют спец. числовые значения - Infinity \ -Infinity


console.log(1 / 0);

// Если мы не число делим на число, то получится NaN (Not a Number)

console.log('не число' / 10);

// Тип данных Строка (String)

message = "Привет";
message = 'Привет';

let phrase = `${message} Андрей`;

console.log(phrase);

let x = 10, y = 20;

console.log(`${x + y}`); // 30

// 'a' - это строка, в отличии от других языков

// Тип данных - Булевый (логический) тип (Boolean)

// Поддерживает 2 типа значений - true \ false

let ageChecked = true;

let isGreater = 4 > 1;

console.log(isGreater); // true

// Специальное значение - Null
// Не относится ни к одному типу данных и представляет собой 'ничего' \ 'пусто' \ 'значения неизвестно'

let weight = null;

// Специальное значение Undefined

/* Также не относится ни к одному типу данных. Если объявлена переменная и в нее
ничего не записано - в ней хранится undefined
*/

let z;

console.log(z);

/*
Рекомендуется использовать null для определения пустой переменной,
а undefined будет показателем , что в переменную ничего не записывалось
*/

/* Тип данных Объект (object) - особенный тип данных,
который может хранить все типы данных сразу.

Тип символ (symbol) - используется для создания уникальных иднтификаторов переменных 
*/


/* 
Оператор typeof - нужен для определения типа данных аргумента, либо данных хранящихся в переменной
*/

console.log(typeof 0); // number
console.log(typeof z); // undefined

console.log(typeof null); // это ошибка в языке программирования



// Строковое преобразование

let value = true;

console.log(typeof value);

value = String(value); // Ф-ция String преобразовывает в строку, переданные данные

console.log(typeof value); // string ('true')

// Числовое преобразование

/* Оно срабатывает, когда в выражении участвуют числа
или происходит математическое действие 
*/

console.log('6' / '2');
// 3

let text = '123';

let number2 = Number(text);

console.log(number2);

console.log(Number('privet')); // NaN
/*
undefined > NaN
Null > 0
true > 1
false > 0
*/

console.log(Number('     123     ')); // 123
console.log(Number('123n')); // NaN

console.log(1 + '2'); // 12
// Если один из аргументов строка при сложении, то произойдет конкатинация строк (присоединение)



// Логическое преобразование

/*
Значение типа 'пустые', 0, пустая строка, null, undefined, NaN станут false
Все остальyые значения true
*/

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean('0')); // true
console.log(Boolean('  ')); // true


// Операторы

/*
Оператор - то, к чему применяется оператор.

Унарный оператор - когда оператор применяется только к одному операнду.

Бинарный оператор - когда оператор применяется к двум операндам.
*/

let g = 1;
g = -g; // -1 \ унарный минус

g = 2 - 1; // 1 \ бинарный минус

// Сложение строк (бинарный +)

text = 'моя' + 'прелесть';
console.log(text); // мояпрелесть

console.log(2 + 3 + '1'); // 51

console.log('2' - 1); // 1 (происходит преобразование к числу)

console.log('6' / '3');
// 2 (происходит преобразование к числу)

// Преобразование к числу, унарный +

number = 1;
console.log(+number); // 1 (не вляиет на число)

number = -1;
console.log(+number); // -1 (преобразует в положительное)

console.log(+true); // 1 (преобразует к числу)
console.log(+''); // 0 (не влияет на положительное число) 

console.log(+'число'); // NaN (не влияет на положительное число)


let apples = '2';
let oranges = '4';

console.log(apples + oranges); // 24
console.log(+apples + +oranges); // 6

// Приоритет операторов

// (2 - 1) * (3 - 2) = 1

