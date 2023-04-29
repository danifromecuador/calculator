// Calculator.js
function CalcDesign() {
  return (
    <div className="calculator">
      <div className="result">0</div>
      <div className="column">
        <input type="button" value="AC" className="button" />
        <input type="button" value="+/-" className="button" />
        <input type="button" value="%" className="button" />
        <input type="button" value="/" className="button operation" />
      </div>
      <div className="column">
        <input type="button" value="7" className="button" />
        <input type="button" value="8" className="button" />
        <input type="button" value="9" className="button" />
        <input type="button" value="x" className="button operation" />
      </div>
      <div className="column">
        <input type="button" value="4" className="button" />
        <input type="button" value="5" className="button" />
        <input type="button" value="6" className="button" />
        <input type="button" value="-" className="button operation" />
      </div>
      <div className="column">
        <input type="button" value="1" className="button" />
        <input type="button" value="2" className="button" />
        <input type="button" value="3" className="button" />
        <input type="button" value="+" className="button operation" />
      </div>
      <div className="column">
        <input type="button" value="0" className="button zero" />
        <input type="button" value="." className="button" />
        <input type="button" value="=" className="button operation" />
      </div>
    </div>
  );
}

export default CalcDesign;
