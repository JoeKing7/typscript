(() => {

  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  }


  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ['Super velocidad', 'Viajar en el tiempo']
  }

  let superman: Hero = {
    name: "Clark Kent",
    age: 35,
    powers: ['Super velocidad'],
    getName () {
      return this.name;
    }
  }
  
  console.log(flash);
  console.log(superman.getName!());
  
  

})()