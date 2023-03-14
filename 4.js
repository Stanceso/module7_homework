function Switch(name, turn, power) {
  this.name = name
  this.turn = turn
  this.power = power
  if(turn === "off") {
       this.power = 0;  
   }
  }
  
  Switch.prototype.tv = function () {
    console.log(` Tv ${this.name}, switch: ${this.turn}, power: ${this.power} кВт`)
  }
  
  const tv1 = new Switch("Philips", "on", 0.4);
  tv1.tv()
  
  Switch.prototype.pc = function () {
    console.log(` Pc ${this.name}, switch: ${this.turn}, power: ${this.power} кВт`)
  }
  const pc1 = new Switch("HP", "on", 0.6);
  pc1.pc()
  
  Switch.prototype.frosen = function () {
    console.log(` Fridge ${this.name}, switch: ${this.turn}, power: ${this.power} кВт`)
  }
  const frosen1 = new Switch("Bosh", "off", 0.8);
  frosen1.frosen()
  const powerSum = tv1.power + pc1.power + frosen1.power
  console.log(`Общая мощность включенных приборов равна ${powerSum} кВт`)
