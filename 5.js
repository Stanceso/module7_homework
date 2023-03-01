class TvPhilips {
    constructor(turnTv) {
      this.turnTv = turnTv;
      this.powerTv = 0.3
    }
      Powerbuild = () => {
      const power = this.powerTv;
      if  (this.turnTv === "off") {
      const power = 0; 
        this.powerTv = power;
      }
    }
  }
  class powerPc {
     constructor(turnPc) {
      this.turnPc = turnPc;
      this.powerPc = 0.8
     }
      Powerbuild = () => {
      const power = this.powerPC;
      if  (this.turnPc === "off") {
      const power = 0; 
        this.powerPc = power;
      }
    }
  }
    
  
  class powerFrosen {
     constructor(turnBosh) {
      this.turnBosh = turnBosh;
      this.powerFrosen = 0.4
     }    
      Powerbuild = () => {
      const power = this.powerFrosen
      if  (this.turnBosh === "off") {
      const power = 0;
        this.powerFrosen = power;
      } 
     }   
   }
  
      
  const powerPc1 = new powerPc ("off")
  const tvPhilips1 = new TvPhilips ("off")
  const powerFrosen1 = new powerFrosen ("off")
  powerPc1.Powerbuild();
  tvPhilips1.Powerbuild();
  powerFrosen1.Powerbuild ();
  
  console.log(` Pc, ${powerPc1.turnPc} мощность, ${powerPc1.powerPc} кВт`)
  console.log(` TV, ${tvPhilips1.turnTv} мощность, ${tvPhilips1.powerTv} кВт`)
  console.log(` Frosen, ${powerFrosen1.turnBosh} мощность, ${powerFrosen1.powerFrosen} кВт`)
  
  const powerSum = tvPhilips1.powerTv + powerPc1.powerPc + powerFrosen1.powerFrosen;
  
  console.log(`Общая мощность включенных приборов равна ${powerSum} кВт`)