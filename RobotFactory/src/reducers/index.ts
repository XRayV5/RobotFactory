import { combineReducers } from 'redux';
import * as type from "../actions/type";
import { Robot, RobotState } from '../models'

const initialState: Robot[] = [];  

export const robotReducer = combineReducers<RobotState>({
    robots: (state: Robot[] = initialState, action) => {
      switch (action.type) {
        case type.FETCH_BOTS:
          return [...action.robots];
        default: return state;
      }
    },
  });

 