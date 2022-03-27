(() => {
  class Avenger {
    name: string;
    power: number;

    constructor(name: string, power: number) {
      this.name = name;
      this.power = power;
    }
  }

  class FlyAvenger extends Avenger {
    flying: boolean;

    constructor(name: string, power: number) {
      super(name, power);
      this.flying = true;
    }
  }

  const hulk = new Avenger("Hulk", 123);
  const falcon = new FlyAvenger("Falcon", 50);
  console.log(hulk);
  console.log(falcon);
})();
