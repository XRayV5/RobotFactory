import { combineReducers } from "redux";
import { RobotState, AppState, AppStatusType } from "../models";
import { getType } from "typesafe-actions";
import * as actions from "../actions/actionCreators";
import { removeId } from "./helpers";

const initialState: RobotState = {
  factory: {},
  ids: [],
  onFires: [],
  recycle: [],
  seconds: [],
  passed: [],
  toShip: []
};

const initialAppState: AppStatusType = {
  recycled: false
};

export const robotReducer = combineReducers<AppState>({
  robots: (state: RobotState = initialState, action) => {
    switch (action.type) {
      case getType(actions.receiveRobots):
        return {
          ...state,
          factory: { ...action.robots },
          ids: [...action.ids]
        };
      case getType(actions.filterOnFire):
        return { ...state, onFires: [...action.onFires] };
      case getType(actions.extinguish):
        return {
          ...state,
          onFires: [...action.onFires],
          factory: { ...state.factory, ...action.extinguishedBot }
        };
      case getType(actions.updateQAResult):
        return { ...state, ...action.result };
      case getType(actions.addToShipment):
        return {
          ...state,
          passed: removeId(action.id, state.passed),
          seconds: removeId(action.id, state.seconds),
          toShip: [...state.toShip, action.id]
        };
      case getType(actions.removeFromShipmentAction):
        return { ...state, ...action.lists }
      case getType(actions.clearShipList):
        return { ...state, toShip: [] }
      default:
        return state;
    }
  },
  appStatus: (state: AppStatusType = initialAppState, action) => {
    switch (action.type) {
      case getType(actions.flagRecycled):
        return { ...state, recycled: true };
      default:
        return state;
    }
  }
});
