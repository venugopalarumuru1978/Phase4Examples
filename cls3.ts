class DemoCons1
{
    private x:number;
    private y:number;

    constructor()
    {
        this.x = 100;
        this.y = 200;
        console.log("It is a Constructor");
    }

    printvalues()
    {
        console.log("X val : " + this.x);
        console.log("Y val : " + this.y);
    }
}

var cns1 = new DemoCons1();
cns1.printvalues();