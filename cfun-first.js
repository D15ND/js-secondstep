const arr=digitize(35231);
console.log(arr);
function digitize(n) {
  n=String(n).split('').reverse().map(Number);
  return n;
  console.log(n);
}