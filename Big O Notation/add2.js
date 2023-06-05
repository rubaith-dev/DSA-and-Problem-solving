const performance = require("../performance");

function addUpTo(n) {
  let total=0;
  for (i = 1; i <= n; i++) {
    total = i+total;
  }
  return total;
}

performance(addUpTo, 1000000000000);
