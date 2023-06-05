var fib = function(n) {
    if (n === 0 || n === 1) {
      return n;
    }
  
    let prev = 0;
    let curr = 1;
  
    for (let i = 2; i <= n; i++) {
      let next = prev + curr;
      prev = curr;
      curr = next;
    }
  
    return curr;
  };