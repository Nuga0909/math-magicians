const Calculator = () => (
  <div className="container flex">
    <div className="Output-bar flex button-container"> 0</div>
    <div className="buttons">
      <div className="col-1 button-container flex">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="colored">÷</button>
      </div>
      <div className="col-2 button-container flex">
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button">x</button>
      </div>

      <div className="col-3 button-container flex">
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button">-</button>
      </div>
      <div className="col-4 button-container flex">
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button">+</button>
      </div>
      <div className="col-5 button-container flex">
        <button type="button">0</button>
        <button type="button">
          .
        </button>
        <button type="button">=</button>
      </div>
    </div>
  </div>

);

export default Calculator;
