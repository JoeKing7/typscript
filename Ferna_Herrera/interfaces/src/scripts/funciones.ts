(() => {
  interface AddTwoNumbers {
    (a: number, b: number): number;
  }

  let addNumber: AddTwoNumbers;

  addNumber = (a: number, b: number) => {
    return a + b;
  };
})();
