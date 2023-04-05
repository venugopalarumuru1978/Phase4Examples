class DemoCons2
{
    private x:number;
    private y:number;

    constructor(x:number, y:number)
    {
        this.x = x;
        this.y = y;
        console.log("Parameterized Constructor");
    }

    printvalues()
    {
        console.log("X val : " + this.x);
        console.log("Y val : " + this.y);
    }
}

var con1 = new DemoCons2(12,34);
con1.printvalues();