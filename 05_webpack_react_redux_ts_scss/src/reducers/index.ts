import { combineReducers } from 'redux';

import ValueAReducer from './reducer_value_a';
import ValueBReducer from './reducer_value_b';

type GlobalState = {
  valueA: number,
  valueB: number,
};

const rootReducer = combineReducers<GlobalState>({
  valueA: ValueAReducer,
  valueB: ValueBReducer,
});

export { rootReducer, GlobalState };