class Person {

    constructor(name, age, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    getBio() {
        console.log(name, 'is', age, 'years old. They were born on', dateOfBirth);
    }

}

class Student extends Person {

    constructor(cohort, faculty) {
        this.cohort = cohort;
        this.faculty = faculty;
    }

    getBio() {
        console.log(name, 'is', age, 'years old. They were born on', dateOfBirth + '.');
        console.log('They are a student. They are part of the', cohort, 'of the', faculty, 'faculty.')
    }

}

let julia = new Student(2021, 'mathematics');
julia.getBio();