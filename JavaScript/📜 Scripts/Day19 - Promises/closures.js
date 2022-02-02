function x() {
  const a = 10;
  return function y() {
    console.log(a);
  };
}

const result = x();
// function x() doesn't exists in the call stack
setTimeout(function () {
  result();
}, 3000);
