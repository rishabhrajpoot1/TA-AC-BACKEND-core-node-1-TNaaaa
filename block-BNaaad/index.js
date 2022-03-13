function addNumbers(a, b) {
    return a + b;
  }
  console.log(addNumbers(4, 7));
  
  function square(num) {
    return num * num;
  }
  square(5);
  
  console.log(`Welcome to Node.js`);
  
  let final = [];
  for (let i = 1; i <= 10; i++) {
    final.push(i);
  }
  let sum = final.reduce((acc, cv) => {
    acc += cv;
    return acc;
  }, 0);
  console.log(sum);