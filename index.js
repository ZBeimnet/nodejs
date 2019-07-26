var rect = require("./rectangle");

function solveRect(l, b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    rect(l, b, (err, rectangle) => {
        if(err) {
            console.log("Error: " + err.message);
        }
        else {
            console.log("Area = " + rectangle.area());
            console.log("Perimeter = " + rectangle.perimeter());
        }
    });
    console.log("This statement is after the call to rect()");
}

solveRect(3, 4);
solveRect(6, 5);
solveRect(0, 4);
solveRect(-2, 4);