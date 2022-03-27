(() => {
  const fullName = ( firstName:string, lastName:string ):string => {
    return `${firstName} ${lastName}`;
  }

  const name = fullName('Tony', 'Stark');
  const text = document.querySelector<HTMLDivElement>('#text')!;
  console.log(text);
  
  text.innerHTML = name;
  

})()