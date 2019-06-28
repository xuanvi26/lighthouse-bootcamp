class Person {

    constructor(name, age, dateOfBirth) {
        this._name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    getBio() {
        return `${this.name} is ${this.age} years old. They were born on ${this.dateOfBirth}.`;
    }

    set name (newname) {
        console.log('hello?????')
        this._name = newname;
    }

}

class Student extends Person {

    // constructor(cohort, faculty) {
    //     this.cohort = cohort;
    //     this.faculty = faculty;
    // }

    enroll(cohort, faculty) {
        this.cohort = cohort;
        this.faculty = faculty;
    }

    getBio() {
        return (`${super.getBio()} ${this.name} is also a student. They are part of the ${this.cohort} cohort of the ${this.faculty} faculty.`)
    }

}

let julia = new Student('Julia', 23, '1995-10-08');
julia.enroll(2021, 'mathematics');
console.log(julia.getBio());

julia.name = 'Jessica';

console.log(julia.getBio())