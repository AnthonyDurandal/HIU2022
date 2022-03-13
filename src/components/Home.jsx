import AppContext from "../AppContext";
import { Child } from "./Child";

export const Home = () => {
  return (
    <>
      <AppContext.Consumer>
        {({ count, setCount }) => (
          <div>
            <h1>This is the mother</h1>
            <h1>This is the actual counter:{count}</h1>
            <button onClick={() => setCount(count + 1)}>
              Increment from mother
            </button>
          </div>
        )}
      </AppContext.Consumer>
      <Child text={"home second layer"}>

      </Child>
    </>
  );
};
