var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
////ООП
//ООП - Создание объектов
var User1 = /** @class */ (function () {
    function User1() {
    }
    return User1;
}());
var user1 = new User1();
//ООП - объявление свойств класса
var User2 = /** @class */ (function () {
    function User2() {
        this.name = 'alex';
    }
    return User2;
}());
var user2 = new User2();
console.log(user2.name);
user2.name = 'misha';
//ООП - методы классов
var User3 = /** @class */ (function () {
    function User3() {
        this.name = '';
    }
    User3.prototype.getName = function () {
        return this.name;
    };
    User3.prototype.setName = function (name) {
        this.name = name;
    };
    return User3;
}());
//ООП - констроктор
var User4 = /** @class */ (function () {
    function User4(name) {
        this.name = name;
    }
    return User4;
}());
var user3 = new User4('alex');
console.log(user3.name);
//ООП - Наследование
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, course) {
        var _this = _super.call(this, name) || this;
        _this.course = course;
        return _this;
    }
    return Student;
}(User4));
//ООП - модификаторы доступа
//ООП - модификаторы доступа - public (по умочланию)
var User5 = /** @class */ (function () {
    function User5() {
        this.name = '';
    }
    User5.prototype.getName = function () {
        return this.name;
    };
    return User5;
}());
var user4 = new User5();
user4.name = 'alex';
