/**
 * 
 * @param {*} 
 * Factorials are very simple things. They're just products, indicated by an exclamation mark. For instance, "four factorial" is written as "4!" and means 1×2×3×4 = 24. In general, 
 * n! ("enn factorial") means the product of all the whole numbers from 1 to n; that is, n!
 */

function factorial(x){
    if(x > 1) return x * factorial(x - 1);
    else return 1;
}

function factorial2(n) {    // A function to compute factorials
    let product = 1;       // Start with a product of 1
    while(n > 1) {         // Repeat statements in {} while expr in () is true
        product *= n;      // Shortcut for product = product * n;
        n--;               // Shortcut for n = n - 1
    }                      // End of loop
    return product;        // Return the product
}

function factorial3(n) {   // Another version using a different loop
    let i, product = 1;    // Start with 1
    for(i = 2; i <= n; i++)  // Automatically increment i from 2 up to n
        product *= i;      // Do this each time. {} not needed for 1-line loops
    return product;        // Return the factorial
}



console.log(factorial(6))             // => 720: 1*2*3*4*5*6

console.log(factorial2(6))              // => 720: 1*2*3*4*5*6

console.log(factorial3(5))             // => 120: 1*2*3*4*5