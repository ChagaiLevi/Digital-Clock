import Dot from "./Components/Dot"

function App() {

  return (
    <div className="clock">
      <div className="digit">
        <div className="segment a hours0-up"></div>
        <div className="segment b hours0-upRight"></div>
        <div className="segment c hours0-downRight"></div>
        <div className="segment d hours0-down"></div>
        <div className="segment e hours0-downLeft"></div>
        <div className="segment f hours0-upLeft"></div>
        <div className="segment g hours0-center"></div>
      </div>
      <div className="digit">
        <div className="segment a hours1-up"></div>
        <div className="segment b hours1-upRight"></div>
        <div className="segment c hours1-downRight"></div>
        <div className="segment d hours1-down"></div>
        <div className="segment e hours1-downLeft"></div>
        <div className="segment f hours1-upLeft"></div>
        <div className="segment g hours1-center"></div>
      </div>

      <Dot />

      <div className="digit">
        <div className="segment a minutes0-up"></div>
        <div className="segment b minutes0-upRight"></div>
        <div className="segment c minutes0-downRight"></div>
        <div className="segment d minutes0-down"></div>
        <div className="segment e minutes0-downLeft"></div>
        <div className="segment f minutes0-upLeft"></div>
        <div className="segment g minutes0-center"></div>
      </div>
      <div className="digit">
        <div className="segment a minutes1-up"></div>
        <div className="segment b minutes1-upRight"></div>
        <div className="segment c minutes1-downRight"></div>
        <div className="segment d minutes1-down"></div>
        <div className="segment e minutes1-downLeft"></div>
        <div className="segment f minutes1-upLeft"></div>
        <div className="segment g minutes1-center"></div>
      </div>

      <Dot />

      <div className="digit">
        <div className="segment a seconds0-up"></div>
        <div className="segment b seconds0-upRight"></div>
        <div className="segment c seconds0-downRight"></div>
        <div className="segment d seconds0-down"></div>
        <div className="segment e seconds0-downLeft"></div>
        <div className="segment f seconds0-upLeft"></div>
        <div className="segment g seconds0-center"></div>
      </div>
      <div className="digit">
        <div className="segment a seconds1-up"></div>
        <div className="segment b seconds1-upRight"></div>
        <div className="segment c seconds1-downRight"></div>
        <div className="segment d seconds1-down"></div>
        <div className="segment e seconds1-downLeft"></div>
        <div className="segment f seconds1-upLeft"></div>
        <div className="segment g seconds1-center"></div>
      </div>
    </div>
  )
}

export default App