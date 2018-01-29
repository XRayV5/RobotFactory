import { createAction } from "typesafe-actions";
import * as type from "./type";
import { Robot, RobotLookUp } from "../models/";
import { QAResultType } from './thunks'
export const receiveRobots = createAction(
  type.FETCH_BOTS,
  (payload: { robots: RobotLookUp, ids: string[] }) => ({
    type: type.FETCH_BOTS,
    ...payload
  })
);

export const filterOnFire = createAction(
  type.FILTER_ONFIRE,
  (robots: Robot[]) => {
    const onFires = robots.reduce(
      (onfires: string[], bot: Robot) =>
        bot.statuses.includes("on fire") ? [...onfires, bot.id] : onfires,
      []
    );
    return {
      type: type.FILTER_ONFIRE,
      onFires
    }
  }
);

export const extinguish = createAction(type.EXTINGUISH, (onFires: string[], extinguishedBot: RobotLookUp) => ({
  type: type.EXTINGUISH,
  onFires,
  extinguishedBot
}));



export const updateQAResult = createAction(type.QA, (result: QAResultType) => ({
  type: type.QA,
  result
}));

export const flagRecycled = createAction(type.RECYCLE)

export const addToShipment = createAction(type.ADD_TO_SHIP, (id: string) => ({
  type: type.ADD_TO_SHIP,
  id
}))


export const removeFromShipmentAction = createAction(type.REMOVE_SHIPMENT, (lists: { [list: string]: string[] }) => ({
  type: type.REMOVE_SHIPMENT,
  lists
}))

export const clearShipList = createAction(type.CLEAR_SHIPMENT)