console.log("Hello World");
var x = 1;
var y = new Array();
y[0] = 88;

function scopeDemo(y1) {
    console.log(x)
    let a = 3, b = 4, c = 5;
    var x1 = new Array();
    x1[0] = 500;
    x1[5] = 900;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(y1);
    console.log(x1);
    y1[0] = 500;
    z = y1[0];
   
    var x = 2;
    if(true) {
        var x = 0;
    }
    return z;
}
console.log(scopeDemo(y)+10);
x = scopeDemo(y);  //argument is the new array
console.log(z);

