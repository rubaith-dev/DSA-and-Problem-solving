function checkPerformance(func, param) {
  var time1 = performance.now();

  func(param);

  var time2 = performance.now();

  console.log(
    `Time required to execute the function is ${(
      (time2 - time1) /
      1000
    )}ms`
  );
}

module.exports = checkPerformance;
