let points = [
    {x: 0, y: 0},
    {x: 1, y: 1}
];

points.dist = function() { // Define a method to compute distance between points
    let p1 = this[0];      // First element of array we're invoked on
    let p2 = this[1];      // Second element of the "this" object
    let a = p2.x - p1.x;     // Difference in x coordinates
    let b = p2.y - p1.y;     // Difference in y coordinates
    return Math.sqrt(a*a +  b*b); // Math.sqrt() computes the square root
};

console.log(points.dist());   

let num = -100;

console.log(Math.abs(num));
console.log(Math.hypot(num / 5))