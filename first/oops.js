class Animal { // class defination

    constructor() {
        this.name = 'codekul'
        this.age = 8
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

let ani = new Animal() // obj
console.log(`age is ${ani.getAge()} name is ${ani.name}`)