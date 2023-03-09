const obj = {
  name: "Alexey",
  family: "Ivanov",
  age: 37
}

function keyChange (e, ob) {
 let l = ob.hasOwnProperty(e)
   if (l === true) {
   console.log(`value ${e} , own value ${ob[e]}`)
   }
   else {
    console.log(`value ${e} , not own value`)
  }
   return; 
};
keyChange("age", obj)