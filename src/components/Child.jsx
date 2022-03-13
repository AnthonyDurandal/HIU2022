import AppContext from "../AppContext";

export const Child = ({ text }) => {
  return (
    <>
      <AppContext.Consumer>
        {({ count, setCount }) => (
          <div>
            <h1>{text}</h1>
            <button onClick={() => setCount(count + 1)}>
              Increment from {text}
            </button>
          </div>
        )}
      </AppContext.Consumer>
    </>
  );
};
