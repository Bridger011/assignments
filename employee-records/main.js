var employees = []
function employee (Name, Job, Salary, Status){
    this.Name = Name
    this.Job = Job
    this.Salary = Salary
    this.Status = Status
    this.printEmployeeForm = function(){
        AllJobs = "Name: " + this.Name+ ", Job: "+ this.Job + ", Salary: " + this.Salary+", Status: " + this.Status
        console.log(AllJobs)
    }
}
var bill = new employee("Bill", "Accounts payable clerk", "$100 an hour", "full time")
var jane = new employee("Jane", "Scheduler", "$11 an hour", "part time")
var mya = new employee("Mya", "Office Manager","$200 an hour", "full time")
var joe = new employee("Joe", "CAD Technician", "$45 an hour", "part time")

bill.printEmployeeForm()
jane.printEmployeeForm()
mya.printEmployeeForm()
joe.printEmployeeForm()

employees.push(bill, jane, mya, joe)
