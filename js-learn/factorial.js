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

console.log(factorial(10))