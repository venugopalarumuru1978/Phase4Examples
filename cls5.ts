// example of inheritance
class student
{
    protected sname :string;
    protected course : string;

    constructor(sn:string, cur:string)
    {
        this.sname = sn;
        this.course = cur;
    }
}

class Marks extends student
{
    protected sub1:number;
    protected sub2:number;

    getvalue(s1:number, s2:number)
    {
        this.sub1 = s1;
        this.sub2 = s2;
    }
} 

class Results extends Marks
{

    printValues()
    {
        console.log("Student Name : " + this.sname);
        console.log("COurse : " + this.course);
        console.log("Subject 1 Marks : " + this.sub1);
        console.log("Subject 2 Marks : " + this.sub2);
        console.log("Total Marks : " + (this.sub1+this.sub2));

        if(this.sub1>=35 && this.sub2>=35)
            console.log("Result is Pass");
        else
            console.log("Result is Fail");
    }
}

var res = new Results("Naresh", "Java");
res.getvalue(56,66);
res.printValues();
