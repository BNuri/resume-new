import React, { useReducer, createContext, Dispatch, useContext } from 'react';

type Mode = 'Dark' | 'Light';

type State = {
  mode: Mode;
};

type Action = { type: 'TOGGLE_MODE' };

type ModeDispatch = Dispatch<Action>;

const ModeStateContext = createContext<State | null>(null);
const ModeDispatchContext = createContext<ModeDispatch | null>(null);

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
    <ModeStateContext.Provider value={state}>
      <ModeDispatchContext.Provider value={dispatch}>
        {children}
      </ModeDispatchContext.Provider>
    </ModeStateContext.Provider>
  );
};

const useGlobalState = () => {
  const state = useContext(ModeStateContext);
  if (!state) throw new Error('Cannot find GlobalStateProvider');
  return state;
};

const useGlobalDispatch = () => {
  const dispatch = useContext(ModeDispatchContext);
  if (!dispatch) throw new Error('Cannot find GlobalDispatchProvider');
  return dispatch;
};

export { GlobalProvider, useGlobalState, useGlobalDispatch };
