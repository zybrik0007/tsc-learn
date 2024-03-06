//// Основы. Типы
var n = 0;
var s = 'test';
var b = true;
var a = 'all';
// Типы, массивы, объекты и циклы
var arr1 = ['a', 'b', 'c', 'd', 'e'];
var arr2 = ['a', 'b', 'c', 'd', 'e'];
var user1 = { name: 'john', age: 30 };
for (var i = 0; i <= 10; i++) {
    console.log(i);
}
var arr3 = [1, 2, 3, 4, 5];
for (var _i = 0, arr3_1 = arr3; _i < arr3_1.length; _i++) {
    var elem = arr3_1[_i];
    console.log(elem);
}
var obj1 = { a: 1, b: 2, c: 3 };
for (var key in obj1) {
    console.log(key);
}
function func1(a, b) {
    return a + b;
}
function func2(test) {
    alert(test);
}
// Выборка типов
var test1 = 'abc';
var test2 = 123;
var test3 = null;
var test4 = 'test4';
test4 = 0;
var test5;
// Ограниченная выборка значений
var test6;
test6 = 'error';
var test7 = "success";
//// Кортежи
var test8 = ['john', 30];
console.log(test8[0]);
test8[0] = 'eric';
// Кортеж для чтения
var test9 = ['john', 30];
// Кортежи необязаительные параметры
var test10;
test10 = ['john', 30, true];
test10 = ['john', 30];
// Кортежи декструктуризация
var user2 = ['john', 30];
var name1 = user2[0], age1 = user2[1];
//Кортеж заполнение произвоьными элеменатами одного типа
var test11;
test11 = ['str', 1, 2, 3, 4, 5];
//// Перечисления
var Season;
(function (Season) {
    Season[Season["Winter"] = 0] = "Winter";
    Season[Season["String"] = 1] = "String";
    Season[Season["Summer"] = 2] = "Summer";
    Season[Season["Autumn"] = 3] = "Autumn";
})(Season || (Season = {}));
var current1 = Season[0];
var current2 = Season.Winter;
var current3 = 3;
// Перечисления - явные
var Season1;
(function (Season1) {
    Season1[Season1["Winter1"] = 0] = "Winter1";
    Season1[Season1["String1"] = 1] = "String1";
    Season1[Season1["Summer1"] = 2] = "Summer1";
    Season1[Season1["Autumn1"] = 3] = "Autumn1";
})(Season1 || (Season1 = {}));
var current4 = Season1.Winter1;
// Перечисление упрощенные ключи
var Season2;
(function (Season2) {
    Season2[Season2["Winter2"] = 1] = "Winter2";
    Season2[Season2["Spring2"] = 2] = "Spring2";
    Season2[Season2["Summer2"] = 3] = "Summer2";
    Season2[Season2["Autumn2"] = 4] = "Autumn2";
})(Season2 || (Season2 = {}));
var current5 = Season2.Spring2;
//Перечиселние ключи строки
var Season3;
(function (Season3) {
    Season3["Winter3"] = "\u0417\u0438\u043C\u0430";
    Season3["Spring3"] = "\u0412\u0435\u0441\u043D\u0430";
    Season3["Summer3"] = "\u041B\u0435\u0442\u043E";
    Season3["Autumn3"] = "\u041E\u0441\u0435\u043D\u044C";
})(Season3 || (Season3 = {}));
var current6 = Season3.Autumn3;
////Встроенные типы
//Встроенные типы - Дата
var date1;
var date2 = new Date();
var date3 = new Date(2030, 11, 31);
//Встроенные типы - Регулярки
var req1;
var req2 = /.+?/;
var req3 = new RegExp('.+?');
//Встроенные типы - HTMLElement
var elem1;
var elem2 = document.querySelector('div');
var elem3;
var elem4;
var elem5;
//Встроенные типы - коллекции
var lst1 = document.querySelectorAll('div');
var lst2;
var lst3;
var lst4;
//// Структуры данных
// Структуры данных - Структыра объекта
var obj2 = { name: 'alex', age: 33 };
// Структуры данных - Необязательные свойства объектов
var obj3 = { name: 'alex' };
var obj4 = { name: 'alex', age: 33 };
// Структуры данных - массивы в объектах
var obj5 = { name: 'alex', colors: ['red', 'blue', 'yellow'] };
var obj6 = {
    name: 'alex',
    age: 33,
    parents: {
        mother: 'plesya',
        father: 'sergey'
    }
};
var obj7 = { name: 'spb' };
var obj8 = { name: 'alex', age: 33, city: obj7 };
var arr4 = [];
arr4.push({ name: 'alex', age: 33 });
arr4.push({ name: 'john', age: 30 });
var arr5 = [];
arr5.push(new Date(2000, 1, 1));
arr5.push(new Date(2024, 1, 1));
var arr6 = [];
var lst5 = document.querySelectorAll('div');
var arr7 = Array.from(lst5);
