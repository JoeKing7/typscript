
(() => {

  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  }

  let myCustomVariable: string|number|Hero = 'Gercho';
  console.log(typeof myCustomVariable);

  myCustomVariable = 7;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: 'JoeKing',
    age: 20,
    powers: [1]
  }

  console.log(typeof myCustomVariable);
  
  
  

})()