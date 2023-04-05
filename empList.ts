import { Employee } from "./employee";

class empList
{
    private emp:Employee[] =[
        new Employee(101, "Kiran", 10000.00, "Developer"),
        new Employee(102, "Karan", 9000.00, "Tester"),
        new Employee(103, "Kalyan", 20000.00, "HR-Manager")
    ]


    printEmpData()
    {
        for(var i in this.emp)
        {
            console.log(this.emp[i].eno + "\t" + this.emp[i].ename + "\t" + this.emp[i].job + "\t" + this.emp[i].sal);
        }
    }
}

var einfo = new empList();
einfo.printEmpData();