class Employee {
    constructor(name, title, salary) {
      this.name = name;
      this.title = title;
      this.salary = salary;
      this.boss = null;
      this.subordinates = [];
    }

    addSubordinate(subordinate) {
        this.subordinates.push(subordinate);
        subordinate.boss = this;
      }

    get numberOfSub() {
        return this.subordinates.length;
    }

    get numberOfPplToCeo() {
        let num = 0;
        let current = this;
        while (current.boss) {
            current = current.boss;
            num++;
        }
        return num;
    }

    hasSameBoss(employee) {
        return (employee.boss === this.boss);
    }

    employeesThatMakeOver(amount) {

        let employees = [];

        if (this.salary > amount) {
          employees.push(this);
        }
    
        for (const subordinate of this.subordinates) {
          const subs = subordinate.employeesThatMakeOver(amount);
          employees = employees.concat(subs);
        }
    
        return employees;
    }

    get totalEmployees() {
        let totalEmployees = 0;
        for (const subordinate of this.subordinates) {
            subordinate.totalEmployees;
            totalEmployees++;
        }
        return totalEmployees;
    }

      // Returns the employee object with that name, or null if no employee exists with that name
    employeeWithName(name) {
        let employee = null;
        if (this.name === name) return this;
        for (const subordinate of this.subordinates) {
            if (employee) break;
            employee = subordinate.employeeWithName(name);
        }
        return employee;
    }
}

const ada      = new Employee("Ada", "CEO", 3000000.00);

const craig    = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela   = new Employee("Angela", "VP Retail", 1000000);
const phil     = new Employee("Phil", "VP Marketing", 1000000);

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

console.log(ada.employeesThatMakeOver(1000000));
console.log(ada.totalEmployees);
console.log(ada.employeeWithName("craig"));