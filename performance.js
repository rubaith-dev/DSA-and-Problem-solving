function checkPerformance(func,param) {
  var time1 = performance.now();

  func(param);

  var time2 = performance.now();

  console.log(
    `Time required to execute the function is ${(time2 - time1).toFixed(2)}s`
  );
}

module.exports = checkPerformance
