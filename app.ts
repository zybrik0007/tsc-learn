//// Основы. Типы
let n: number = 0;
let s: string = 'test';
let b: boolean = true;
let a: any = 'all';

// Типы, массивы, объекты и циклы
let arr1: string[] = ['a', 'b', 'c', 'd', 'e'];
let arr2: Array<string> = ['a', 'b', 'c', 'd', 'e'];
let user1 = {name: 'john', age: 30};

for (let i: number = 0; i <= 10; i++) {
    console.log(i);
}

let arr3: number[] = [1, 2, 3, 4, 5];
for (let elem of arr3) {
    console.log(elem);
}

let obj1 = {a: 1, b: 2, c: 3};
for (let key in obj1) {
    console.log(key);
}

function func1(a: number, b: number): number {
    return a + b;
}

function func2(test: string): void {
    alert(test);
}

// Выборка типов
let test1: string | number = 'abc';
let test2: string | number = 123;
let test3: number | null = null;

// Псевдонимы
type strnumber = string | number;
let test4: strnumber = 'test4';
test4 = 0;

type nun = null | undefined;
let test5: nun;

// Ограниченная выборка значений
let test6: 'success' | 'error';
test6 = 'error';

// Псевдонимы и выборка
type message = 'success' | 'error';
let test7: message = "success";

//// Кортежи
let test8: [string, number] = ['john', 30];
console.log(test8[0]);
test8[0] = 'eric'

// Кортеж для чтения
let test9: readonly [string, number] = ['john', 30];

// Кортежи необязаительные параметры
let test10: [string, number, boolean?];
test10 = ['john', 30, true];
test10 = ['john', 30];

// Кортежи декструктуризация
let user2: [string, number] = ['john', 30];
let [name1, age1] = user2;

//Кортеж заполнение произвоьными элеменатами одного типа
let test11: [string, ...number[]];
test11 = ['str', 1, 2, 3, 4, 5];

//// Перечисления
enum Season {Winter, String, Summer, Autumn}
let current1: string = Season[0];
let current2: number = Season.Winter;
let current3: Season = 3;

// Перечисления - явные
enum Season1 {Winter1=0, String1=1, Summer1=2, Autumn1=3}
let current4: Season1 = Season1.Winter1;

// Перечисление упрощенные ключи
enum Season2 { Winter2 = 1, Spring2, Summer2, Autumn2 }
let current5: Season2 = Season2.Spring2;

//Перечиселние ключи строки
enum Season3 {
    Winter3 = 'Зима',
    Spring3 = 'Весна',
    Summer3 = 'Лето',
    Autumn3 = 'Осень'
}
let current6: Season3 = Season3.Autumn3;

////Встроенные типы
//Встроенные типы - Дата
let date1: Date;
let date2: Date = new Date();
let date3: Date = new Date(2030, 11 ,31);

//Встроенные типы - Регулярки
let req1: RegExp;
let req2: RegExp = /.+?/;
let req3: RegExp = new RegExp('.+?');

//Встроенные типы - HTMLElement
let elem1: HTMLElement;
let elem2: HTMLElement = document.querySelector('div');
let elem3: Promise<string>;
let elem4: Element;
let elem5: URL;

//Встроенные типы - коллекции
let lst1: NodeList = document.querySelectorAll('div');
let lst2: Map<string, number>;
let lst3: Set<string[]>;
let lst4: HTMLCollection;

//// Структуры данных
// Структуры данных - Структыра объекта
let obj2: {name: string, age: number} = {name: 'alex', age: 33};

// Структуры данных - Необязательные свойства объектов
let obj3: {name: string, age?: number} = {name: 'alex'};

// Структуры данных - интерфейсы
interface Interface1 {
    name: string,
    age: number
}
let obj4: Interface1 = {name: 'alex', age: 33};

// Структуры данных - массивы в объектах
let obj5: {name: string, colors: string[] } = {name: 'alex', colors: ['red', 'blue', 'yellow']};

// Структуры данных - сложные объекты
interface Interface2 {
    name: string,
    age: number,
    parents: {
        mother: string,
        father: string
    }
}
let obj6: Interface2 = {
    name: 'alex',
    age: 33,
    parents: {
        mother: 'plesya',
        father: 'sergey'
    }
};

// Структуры данных - объекты в объектах
interface Interface3 {
    name: string
}
interface Interface4 {
    name: string,
    age: number,
    city: Interface3
}
let obj7: Interface3 = {name: 'spb'};
let obj8: Interface4 = {name: 'alex', age: 33, city: obj7};

//Структуры данных - Массивы объектов в TypeScript
interface Interface5 {
    name: string,
    age: number
}
let arr4: Interface5[] = [];
arr4.push({name: 'alex', age: 33});
arr4.push({name: 'john', age: 30});

let arr5: Date[] = [];
arr5.push(new Date(2000, 1, 1));
arr5.push(new Date(2024, 1, 1));

let arr6: HTMLElement[] = [];
let arr7: HTMLElement[] = Array.from(document.querySelectorAll('div'));

//// Функции
// Функции - Количество параметров
function func3(name: string, age: number) {
    return name + ' ' + age;
}
func3('alex', 33);

// Функции - Необязательные параметры
function func4(name: string, age?: number) {
    return name + age;
}
func4('alex');

// Функции - значение парамтров по умолчанию
function func5(name: string, age: number = 33) {
    return name + age;
}
func5('alex', 20);
func5('alex');

// Функции - Rest параметры
function func6(...arr: number[]) {
    console.log(arr);
}
func6(1, 2, 3);

// Функции - тип функции
let func7: (x: number, y: number) => number;
let func8: (x: number, y: number) => number = function(a: number, b: number): number {
    return a + b;
}

// Функции - свой тип функции
type Func1 = (x: number, y: number) => number;
let func9: Func1 = function(a: number, b: number): number {
    return a + b;
}

// Функции - Функции-коллбэки
function func10(x: number, func: (x: number) => number): number {
    return func(x);
}
func10(10, function(x: number): number {
    return x ** 2;
});

// Функции - Стрелочные функции
let func11 = (x: number): number => x ** 2;

