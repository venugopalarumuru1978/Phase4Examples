enum  course
{
    Java, Python, Dotnet, Angular, ReactJs
}

class Std_course
{
    private rollno:number;
    private sname:string;
    private scourse:course;

    getValues()
    {
        this.rollno = 1001;
        this.sname = "Satyam";
        this.scourse = course.Angular;  // it will assign an index of course
    }

    printValues()
    {
        console.log("Roll Number : " + this.rollno);
        console.log("Student name : " + this.sname);
        console.log("Course name : " + course[this.scourse]);
    } 
}

var s1 = new Std_course();
s1.getValues();
s1.printValues();