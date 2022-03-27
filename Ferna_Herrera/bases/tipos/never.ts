(() => {
  const error = (message:string):(never|number) => {
    //never = la función no debe terminar exitosamente
    if (false) {
      throw new Error(message);
    }

    return 1;
  }

  error('Auxilio');
  console.log('Hello');
  
})()