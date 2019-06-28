//pre-order traversal
function dfs(node) {

    console.log(node.data);

    for (let childNode of node.children) {
        dfs(childNode);
    }

}

class Employee {

    findSalaryAbove(amount) {

        let employees = [];

        if (this.salary > amount) employees.push(this);

        for (let sub of this.subordinates) {
            sub.findSalaryAbove(amount);
        }

        return employees;

    }

    findNumberOfEmployees() {

        let num = 1;

        for (let sub of this.subordinates) {
            num++;
            findNumberOfEmployees(sub);
        }

        return num;

    }

}

employee.findSalaryAbove(100000);


