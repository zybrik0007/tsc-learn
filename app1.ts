////ООП
//ООП - Создание объектов
class User1 {

}
let user1: User1 = new User1();

//ООП - объявление свойств класса
class User2 {
    name: string = 'alex';
}
let user2: User2 = new User2();
console.log(user2.name)
user2.name = 'misha';

//ООП - методы классов
class User3 {
    name: string = '';

    getName(): string {
        return this.name
    }

    setName(name: string) {
        this.name = name;
    }
}

//ООП - констроктор
class User4 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
let user3: User4 = new User4('alex');
console.log(user3.name);

//ООП - Наследование
class Student extends User4 {
    course: number;

    constructor(name: string, course: number) {
        super(name);
        this.course = course;
    }
}

//ООП - модификаторы доступа
//ООП - модификаторы доступа - public (по умочланию)
class User5 {
    public name: string = '';
    public getName() {
        return this.name;
    }
}
let user4 = new User5();
user4.name = 'alex';

//ООП - модификаторы доступа - private
class User6 {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName() {
        return this.name; // прочитаем свойство
    }

    public setName(name: string) {
        this.name = name; // запишем новое значение свойства
    }
}
let user6: User6 = new User6('alex');
console.log(user6.name) // error
user6.name = 'test' // error

//ООП - модификаторы доступа - protected (возможно наследовать)
class User7 {
    protected cape(str: string) {
        return str[0].toUpperCase() + str.slice(1);
    }
}

class Student1 extends User7 {
    private name: string;

    constructor(name) {
        super();
        this.name = name;
    }

    public shoName(): string {
        return this.cape(this.name);
    }
}
let student1: Student1 = new Student1('alex');
console.log(student1.shoName());
console.log(student1.cape('test')) // error

//ООП - модификаторы доступа - readonly
class User8 {
    readonly name: string;
    constructor(name) {
        this.name = name;
    }
}
let user8: User8 = new User8('alex');
console.log(user8.name);
user.name = 'test' // error

//ООП - Аксессоры
class User9 {
    private _name: string = '';

    private get name(): string {
        return this._name;
    }

    private set name(name: string) {
        this._name = name;
    }
}

//ООП - статической свойства(принадлежат классу)
class User10 {
    public static salary: number = 1000;

    setSalary(salary: number) {
        User10.salary = salary;
    }

    public static getSum(arr: number[]): number {
        let sum: number = 0;
        for (let elem of arr) {
            sum += elem;
        }
        return sum;
    }
}
console.log(User10.salary);
let num: number = User10.getSum([1, 2, 3, 4, 5]);

//ООП - Абстрактные классы(запрет на создания объектов родительского класса)
abstract class User11 {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}
let user11 = new User11('alex'); // error

//ООП - Абстрактные методы
abstract class User12 {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public abstract show(): string;
}

class Student2 extends User12 {
    public salary: number

    constructor(name: string, salary: number) {
        super(name);
        this.salary = salary;
    }

    show() {
        return this.name + ' ' + this.salary; // без show будет ошибка
    }
}

//// Интерфейсы в ООП
interface IUser1 {
    name: string;
    age: number;
}
let iuser1: IUser1 = {name: 'alex', age: 33};

// Интерфейсы в ООП - методы
interface IUser2 {
    name: string,
    age: number,
    greet(text: string): string;
}
let iuser2: IUser2 = {
    name: 'alex',
    age: 33;
    greet(text: string): string {
        return text + ', ' + this.name
    }
}

// Интерфейсы в ООП - свойства толко дляч чтения
interface IFigure1 {
    height: number,
    readonly width: number;
}
let rectangle1: IFigure1 = {
    height: 200,
    width: 300
}
rectangle1.width = 1000 // error

// Интерфейсы в ООП - Интерфейс для функции
interface IMathFunc1 {
    (num1: number, num2: number): boolean;
}
let myFunc1: IMathFunc1 = function (num1, num2): boolean{
    if(num1 == num2) {
        return true;
    } else {
        return false;
    }
}
console.log(myFunc1(2, 2));

// Интерфейсы в ООП - Индексируемый тип для массивов
interface IArray1 {
    [index: number]: string;
}
let arr1: IArray1 = ['a', 'b', 'c'];
let arr2: IArray1 = [1, 2, 3]; // ошибка

// Интерфейсы в ООП - Индексируемый тип для объектов
interface IObject {
    [index: string]: number;
}
let obj: IObject = {'a': 1, 'b': 2, 'c': 3};

// Интерфейсы в ООП - для классов
interface IUser3 {
    name: string,
    greet(): string
}
class iuser3 implements IUser3 {
    name: string;

    constructor(name) {
        this.name = name;
    }

    greet() {
        return `hello, ${this.name}`;
    }
}
// Интерфейсы в ООП - Расширение интерфейсов
interface ISize {
    height: number;
    width: number;
}
interface IStyle extends ISize {
    color: string;
}
class Figure implements IStyle {
    height: number;
    width: number;
    color: string;

    constructor(height: number, width: number, color: string) {
        this.height = height;
        this.width  = width;
        this.color  = color;
    }
}