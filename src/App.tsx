import {useReducer} from 'react';
import './App.css';

type State = {
  count: number
}

type Action = {
  type: ACTION_TYPE;
}

enum ACTION_TYPE  {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT"
}

const stateReducer: React.Reducer<State, Action> = (
  state: State,
  action: Action
): State => {
  switch(action.type) {
    case ACTION_TYPE.INCREMENT:
      return {...state, count: state.count + 1};
    case ACTION_TYPE.DECREMENT:
      return {...state, count: state.count - 1};
    default:
      return state;
  }
};



const App: React.FC<{}> = () => {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>,
  State
  >(
    stateReducer,
    { count: 0},
    (state): State => ({
      ...state,
      count: 1,
    })
  );

    const handleClick = () => {
      dispatch({type: ACTION_TYPE.INCREMENT})
    }

  return (
    <div className="App">
      <header className="App-header">
        <p onClick={handleClick}>Count: {state.count}</p>
      </header>
    </div>
  );
}

export default App;
