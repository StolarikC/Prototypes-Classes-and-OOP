class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${name} is eating`
    }
}
class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        console.log("IN CAT CONSTRUCTOR")
        super(name, age)
        this.livesLeft = livesLeft;
    }
    meow() {
        return "MEOW!"
    }
}
class Dog extends Pet {
    bark() {
        return "WOOF!"
    }
    eat() {
        return `${this.name} scarfs his food!`;
    }
}