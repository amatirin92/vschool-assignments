var employees = [];

function Employee(name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function () {
        console.log(employees);
    }
}
var employeeOne = new Employee("Joe", "Carpenter", "$45,000", "Full-Time");
var employeeTwo = new Employee("Alice", "Secretary", "$50,000", "Part-Time");
var employeeThree = new Employee("Matthew", "Coat Hanger", "$50,600", "Full-Time");
employees.push(employeeOne, employeeTwo, employeeThree);
console.log(employees);