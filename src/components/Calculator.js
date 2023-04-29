// Calculator.js
import { useState } from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

function Calculator() {
  const [calculation, setCalculation] = useState({ total: null, next: null, operation: null });

  const handleClick = (buttonName) => {
    const result = calculate(calculation, buttonName);
    setCalculation(result);
  };

  const handleEqual = () => {
    const { total, next, operation } = calculation;
    if (total && next && operation) {
      const result = operate(total, next, operation);
      setCalculation({ total: result, next: null, operation: null });
    }
  };

  return (
    <div className="calculator">
      <div className="result">{calculation.next || calculation.total || '0'}</div>
      <div className="column">
        <button type="button" className="button" onClick={() => handleClick('AC')}>AC</button>
        <button type="button" className="button" onClick={() => handleClick('+/-')}>+/-</button>
        <button type="button" className="button" onClick={() => handleClick('%')}>%</button>
        <button type="button" className="button operation" onClick={() => handleClick('÷')}>÷</button>
      </div>
      <div className="column">
        <button type="button" className="button" onClick={() => handleClick('7')}>7</button>
        <button type="button" className="button" onClick={() => handleClick('8')}>8</button>
        <button type="button" className="button" onClick={() => handleClick('9')}>9</button>
        <button type="button" className="button operation" onClick={() => handleClick('x')}>x</button>
      </div>
      <div className="column">
        <button type="button" className="button" onClick={() => handleClick('4')}>4</button>
        <button type="button" className="button" onClick={() => handleClick('5')}>5</button>
        <button type="button" className="button" onClick={() => handleClick('6')}>6</button>
        <button type="button" className="button operation" onClick={() => handleClick('-')}>-</button>
      </div>
      <div className="column">
        <button type="button" className="button" onClick={() => handleClick('1')}>1</button>
        <button type="button" className="button" onClick={() => handleClick('2')}>2</button>
        <button type="button" className="button" onClick={() => handleClick('3')}>3</button>
        <button type="button" className="button operation" onClick={() => handleClick('+')}>+</button>
      </div>
      <div className="column">
        <button type="button" className="button zero" onClick={() => handleClick('0')}>0</button>
        <button type="button" className="button decimal" onClick={() => handleClick('.')}>.</button>
        <button type="button" className="button operation" onClick={handleEqual}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
