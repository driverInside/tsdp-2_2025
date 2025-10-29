class Calculator {
  constructor() {}

  sum(a: number, b: number): number {
    return a + b;
  }

  divide(a: number, b: number): number {
    if(b === 0) {
      console.error('No se puede dividir por cero');
      throw new Error('División por cero');
    }
    return a / b;
  }
}

export default Calculator;
