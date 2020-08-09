let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000