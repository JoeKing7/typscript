// Crear interfaces

interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

interface Emociones {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

interface City {
  (ciudadanos: string[]): number;
}

interface Person {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}
// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = (auto: Auto): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
};

const batimovil: Auto = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log("...... gogogo!!!");
  },
};

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

const guason: Emociones = {
  reir: true,
  comer: true,
  llorar: false,
};

const reir = (guason: Emociones): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
};

// Cree una interfaz para la siguiente funcion

const ciudadGotica: City = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Person {
  public nombre: string;
  public edad: number;
  public sexo: string;
  public estadoCivil: string;

  constructor(nombre: string, edad: number, sexo: string, estadoCivil: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.estadoCivil = estadoCivil;
  }

  public imprimirBio(): void {
    console.log(`
      Bio de la persona ${this.nombre}: \n
      Edad: ${this.edad}
      Sexo: ${this.sexo}
      Estado Civil: ${this.estadoCivil}
    `);
  }
}

const persona = new Persona("Aquiles", 21, "M", "S");

persona.imprimirBio();

//REANUDAR EN SECTION 10 - NAMESPACES
