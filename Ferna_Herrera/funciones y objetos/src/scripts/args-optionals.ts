(() => {
  const fullName = ( firstName:string, lastName?:string ):string => {
    return `${firstName} ${lastName || ''.trim()}`;
  }

  const name = fullName('Tony');
  const text = document.querySelector<HTMLDivElement>('#text')!;
  
  text.innerHTML = name;
  

})()