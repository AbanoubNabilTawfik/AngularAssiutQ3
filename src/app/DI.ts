class Tiers {
    constructor(numberOfTiers:any) {

    }
}

class Engine {
    constructor(engineType:any) {

    }

}

// class Car {
//     tiers: any;
//     engine: any;
//     constructor() {
//      this.tiers=new Tiers();
//      this.engine= new Engine();
//     }
// }

class Car {
    tiers: any;
    engine: any;
    constructor(tiers:any,engine:any) {
     this.tiers=tiers;
     this.engine= engine;
    }
}


//1-Create service
//2-Create logic inside our service
//3-Inject service in components
//4-Use service