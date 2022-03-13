import "./questionaire.css";

export const Questionaire = ({ question, setState, checked, choix }) => {
  const listeChoix = () => {
    let options = [];
    if (choix != null) {
      if (checked) {
        console.log(listeChoix);
        options = choix.map((opt, index) => {
          return <option key={index}>{opt}</option>;
        });
        return (
          <div className="choix show">
            Lequels ?
            <select className="show">
              {options.map((oneOption) => oneOption)}
            </select>
          </div>
        );
      }
    }
    return options;
  };
  const checkBox = () => {
    if (checked != null) {
      return (
        <>
          <div className="checkBox">
            <div className="checkBoxContainer">
              {checked ? (
                <input
                  onChange={() => setState(false)}
                  type={"checkbox"}
                  checked
                ></input>
              ) : (
                <input onChange={() => setState(true)} type={"checkbox"} />
              )}
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="checkBox">
            <div className="checkBoxContainer">
              <input onChange={() => setState(true)} type={"checkbox"} />
            </div>
          </div>
        </>
      );
    }
  };
  return (
    <div className="questionaire">
      <div className="textQuestion">{question}</div>
      {checkBox()}
      {listeChoix()}
    </div>
  );
};
