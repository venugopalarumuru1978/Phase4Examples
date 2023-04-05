interface  Test1
{
    getVal();
}

interface Test2
{
    printVal():number;
}

class TestIface implements Test1, Test2
{
    private n:number;
    getVal() {
        this.n = 10;
    }

    printVal():number {
        var cb = this.n*this.n*this.n;
        return cb;
        //console.log(this.n + " Cube Value " + (this.n*this.n*this.n));
    }
}

var t1 = new TestIface();
t1.getVal();
console.log("Cube Value is : " + t1.printVal());