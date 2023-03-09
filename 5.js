class PowerBuild {
constructor(turn, energy) {
this.power = energy
this.turn = turn

  }
  Powerbuild = () => {
    const energy = this.power;
  
    if  (this.turn === "off") {
    const energy = 0; 
    this.power = energy;
    }
  }
}

class powerPhilips  extends PowerBuild {
  constructor(turn, energy) {
    super(turn, energy)
    this.turn = turn
    this.power = energy
  }
}

class powerPc extends PowerBuild {
    constructor(turn, energy) {
    super(turn, energy)
    this.turn = turn
    this.power = energy
   }
 }
  
class powerFrosen  extends PowerBuild {
   constructor(turn, energy) {
    super(turn, energy)
    this.turn = turn
    this.power = energy
   }    
 }

const powerPc1 = new powerPc ("on", 0.8)
const tvPhilips1 = new powerPhilips ("on", 0.3)
const powerFrosen1 = new powerFrosen ("on", 0.4)
powerPc1.Powerbuild();
tvPhilips1.Powerbuild();
powerFrosen1.Powerbuild ();

console.log(` Pc  , ${powerPc1.turn}, ${powerPc1.power},  кВт`)
console.log(` TV  , ${tvPhilips1.turn}, ${tvPhilips1.power},  кВт`)
console.log(` Frosen , ${powerFrosen1.turn}, ${powerFrosen1.power},  кВт`)

const powerSum = tvPhilips1.power + powerPc1.power + powerFrosen1.power;

console.log(`Общая мощность включенных приборов равна ${powerSum} кВт`)