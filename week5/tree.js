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

console.log(craig.numberOfPplToCeo);