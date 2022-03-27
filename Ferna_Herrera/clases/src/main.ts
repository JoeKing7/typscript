(() => {
  // class Avenger {
  //   // private name: string ;
  //   // private team: string ;
  //   // public realName?: string;
  //   static avgAge: number = 35;
  //   static getAvgAge() {
  //     return `${this.name}`;
  //   }

  //   // constructor(name: string, team: string, realName?: string) {
  //   //   this.name = name;
  //   //   this.team = team;
  //   //   this.realName = realName;
  //   // }

  //   constructor(
  //     private name: string,
  //     private team: string,
  //     public realName?: string
  //   ) {}

  //   public bio() {
  //     return `${this.name} (${this.team})`;
  //   }
  // }

  // const antMan = new Avenger("Ant Man", "Team");
  // console.log(antMan, Avenger.avgAge);
  // console.log(antMan.bio());
  // console.log(Avenger.getAvgAge());

  //VIDEO 5 DE CLASES
  // class Avenger {
  //   constructor(public name: string, public realName: string) {
  //     console.log("Llamado a constructor de Avenger");
  //   }

  //   protected getFullName() {
  //     return `${this.name} ${this.realName}`;
  //   }
  // }

  // class Xmen extends Avenger {
  //   constructor(name: string, realName: string, public isMutant: boolean) {
  //     super(name, realName);
  //     console.log("Llamado a contructor de Xmen");
  //   }
  //   //VIDEO 6 CLASES -GETTERS AND SETTERS
  //   get fullName() {
  //     return `${this.name} - ${this.realName}`;
  //   }

  //   set fullName(name: string) {
  //     this.name = name;
  //   }
  //   //--------------------
  //   getFullNameFromXmen() {
  //     console.log(super.getFullName());
  //   }
  // }

  // const wolwerine = new Xmen("Wolwerine", "Logan", true);

  // wolwerine.fullName = "Juancho";
  // console.log(wolwerine.fullName);
  // wolwerine.getFullNameFromXmen();

  // VIDEO 7 CLASES ABSTRACTAS
  // abstract class Mutante {
  //   constructor(public name: string, public realName: string) {}
  // }

  // class Xmen extends Mutante {
  //   public salvarMundo() {
  //     return "Mundo a salvo!";
  //   }
  // }
  // class Villian extends Mutante {
  //   public conquistarMundo() {
  //     return "Mundo conquistado!";
  //   }
  // }

  // const wolwerine = new Xmen("Wolwerine", "Logan");
  // const villian = new Villian("Magneto", "Magnus");

  // // console.log(wolwerine.salvarMundo());
  // // console.log(villian.conquistarMundo());

  // const printName = (character: Mutante) => {
  //   console.log(character.realName);
  // };

  // printName(wolwerine);

  // VIDEO 8 CLASES, constructores privados

  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("Soy Apoca");
      }

      return Apocalipsis.instance;
    }

    changeName(newName: string): void {
      this.name = newName;
    }
  }
  const apoca1 = Apocalipsis.callApocalipsis();
  const apoca2 = Apocalipsis.callApocalipsis();
  const apoca3 = Apocalipsis.callApocalipsis();

  apoca1.changeName("Juancho");
  // const apocalipsis = new Apocalipsis("Es el Apoca");
  console.log(apoca1, apoca2, apoca3);
})();
