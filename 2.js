const obj = {
  name: "Petya",
  age: 27,
  family: "Ivanov"
}
function keyChange (e, ob) {
 console.log(e in ob);
 return;
  
}
keyChange("age", obj)