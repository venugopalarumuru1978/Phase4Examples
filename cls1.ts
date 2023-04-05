class DemoClass
{
   private x:number = 10;
   private y:number = 12.45;

    printval():void
    {
        console.log("X value is " + this.x);
        console.log("Y value is " + this.y);
        console.log("Sum : " + (this.x+this.y));
    }
}

var Obj1 = new DemoClass();
Obj1.printval();