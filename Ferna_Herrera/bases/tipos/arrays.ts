(() => {
  // const number: (string | number | boolean) = [1,2,3,4,5,6,'7',8,9,10];
  const number: number[] = [1,2,3,4,5,6,7,8,9,10];
  number.push(11);
  
  const villians = ['Villano 1', 'Villano 2', 'Villano 3'];
  
  villians.forEach( v => console.log(v.toUpperCase()));
  
  console.log(number);
  
})()