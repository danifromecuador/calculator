// Calculator.js
import { useState } from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';
import Button from './Button';

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
        <Button character="AC" className="button" fn={handleClick} />
        <Button character="+/-" className="button" fn={handleClick} />
        <Button character="%" className="button" fn={handleClick} />
        <Button character="÷" className="button operation" fn={handleClick} />
      </div>
      <div className="column">
        <Button character="7" className="button" fn={handleClick} />
        <Button character="8" className="button" fn={handleClick} />
        <Button character="9" className="button" fn={handleClick} />
        <Button character="x" className="button operation" fn={handleClick} />
      </div>
      <div className="column">
        <Button character="4" className="button" fn={handleClick} />
        <Button character="5" className="button" fn={handleClick} />
        <Button character="6" className="button" fn={handleClick} />
        <Button character="-" className="button operation" fn={handleClick} />
      </div>
      <div className="column">
        <Button character="1" className="button" fn={handleClick} />
        <Button character="2" className="button" fn={handleClick} />
        <Button character="3" className="button" fn={handleClick} />
        <Button character="+" className="button operation" fn={handleClick} />
      </div>
      <div className="column">
        <Button character="0" className="button zero" fn={handleClick} />
        <Button character="." className="button decimal" fn={handleClick} />
        <Button character="=" className="button operation" fn={handleEqual} />
      </div>
    </div>
  );
}

export default Calculator;
