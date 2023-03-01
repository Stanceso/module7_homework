function Switch() {

}
  Switch.prototype.philips = function (turn) {
    let  powerTv = 0.3
    if(turn === "off"){
       powerTv = 0;  
    }
  
     console.log(`Power TV ${powerTv} кВт, switch ${turn} `)
     return powerTv;
   }
  Switch.prototype.celeron = function (turn) {
    
     let powerPc = 0.8;
    
    if(turn === "off"){
       powerPc = 0;
    }
     console.log(`Power PC ${powerPc} кВт, switch ${turn}`)
     return powerPc;
   }
  Switch.prototype.fridge = function (turn) {
    let powerFrosen = 0.4;
    if (turn === "off"){
      powerFrosen = 0;
      
    }
    console.log(`Power Bosh ${powerFrosen} кВт, switch ${turn}`)
    return powerFrosen;
  }
  
const tv = new Switch();
const pc = new Switch();
const bosh = new Switch();

let powerSum = tv.philips("on") + pc.celeron("on") + bosh.fridge("on");

console.log(`Общая мощность включенных приборов равна ${powerSum} кВт`)