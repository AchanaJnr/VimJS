let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000



let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i);
}


let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );

for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
  
    alert(i); // 1, then 3, 5, 7, 9
}


for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = prompt(`Value at coords (${i},${j})`, '');

        // what if we want to exit from here to Done (below)?
    }
}
  
alert('Done!');
