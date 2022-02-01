import React, { useReducer, createContext, Dispatch, useContext } from 'react';

type Mode = 'Dark' | 'Light';

type State = {
  mode: Mode;
};

type Action = { type: 'TOGGLE_MODE' };

type ModeDispatch = Dispatch<Action>;

const GlobalStateContext = createContext<State | null>(null);
const GlobalDispatchContext = createContext<ModeDispatch | null>(null);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'TOGGLE_MODE':
      const newMode = state.mode === 'Dark' ? 'Light' : 'Dark';
      window.localStorage.setItem('MODE', newMode);
      return {
        mode: newMode,
      };
    default:
      throw new Error('Unhandled action');
  }
};

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    mode: window.localStorage.getItem('MODE') as Mode | 'Light',
  });
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  const state = useContext(GlobalStateContext);
  if (!state) throw new Error('Cannot find GlobalStateProvider');
  return state;
};

const useGlobalDispatch = () => {
  const dispatch = useContext(GlobalDispatchContext);
  if (!dispatch) throw new Error('Cannot find GlobalDispatchProvider');
  return dispatch;
};

export { GlobalProvider, useGlobalState, useGlobalDispatch };
