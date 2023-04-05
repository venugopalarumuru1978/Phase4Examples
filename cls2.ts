class TestClass
{
    x : number;

    printval():number
    {
        var sq = this.x*this.x;
        return sq;
    }
}

var tobj1 = new  TestClass();
tobj1.x = 10;
console.log("Square Value is " + tobj1.printval());