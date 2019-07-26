var rect = {
    perimeter: (x, y) => (2*(x + y)),
    area: (x, y) => (x*y)
};

function solveRect(l, b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    if(l <= 0 || b <= 0) {
        console.log("Dimension Error!");
    }

    else {
        console.log("Area = " + rect.area(l, b));
        console.log("Perimeter = " + rect.perimeter(l, b));
    }
}

solveRect(3, 4);
solveRect(6, 5);
solveRect(0, 4);
solveRect(-2, 4);