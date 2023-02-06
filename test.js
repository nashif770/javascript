// Smallest Number in an Array Start
let arr = [23, 12, 21, 23, 46, 12, 12, 23 ,45, 78, 89, 23];

let num =0;

for(let i=arr.length; i>=1; i--){
  let index = i;
  let element = arr[i];
  if(num<=element){
    continue;
  }
  num = element;
}
console.log(num);
// Smallest Number in an Array end