// CodeSaitama [JS Functions...];

// Function that applies the Bubble Sort Algorithm...
function bubbleSort(a) {
    let swapp;
    let n = a.length - 1;
    let x = a;
    do {
        swapp = false;
        for (let i = 0; i < n; i++) {
            if (x[i] < x[i + 1]) {
                let temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                swapp = true;
            }
        }
        n--;
    } while (swapp);
    return x;
};

let bub_sort = bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]);
console.log(bub_sort);