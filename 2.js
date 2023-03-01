const obj = {
  a: "Petya",
  b: 2,
  c: "Vasya"
}
function keyChange (e, ob) {
 
  return ob.hasOwnProperty(e);
  
}

let l = keyChange("b", obj);
console.log(l);