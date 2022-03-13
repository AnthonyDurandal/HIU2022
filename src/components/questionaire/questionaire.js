import Select from "react-select";
import "./questionaire.css";

export const Questionaire = ({ question, setState, checked, choix }) => {
  const aaaa = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

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
            <p>Lequels ?
            {/* <select className="show">
              {options.map((oneOption) => oneOption)}
            </select> */}
            <Select
              isMulti
              options={aaaa}
              onChange={(e) => {
                if (e.length == 0){

                } else {
                  var temp = []
                  e.map((res) => {
                    // temp.push(res.value)
                    console.log(res.value)
                  })
                  // changeIdTypeSignalement(temp)
                }
              }}
              on
              className='choixVaccin'
              placeholder={<div>Nom du vaccin </div>}
            />
            </p> 
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
