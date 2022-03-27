(() => {
  const fullName = ( firstName:string, lastName?:string, upper:boolean = false ):string => {
    if (upper) {
      return `${firstName} ${lastName || ''.trim()}`.toUpperCase();  
    }
    return `${firstName} ${lastName || ''.trim()}`;
  }

  const name = fullName('Tony', 'Stark', true);
  const text = document.querySelector<HTMLDivElement>('#text')!;
  
  text.innerHTML = name;
  

})()