import { createAction } from "typesafe-actions";
import * as type from './type'
export const qaActions = {
  extinguish: createAction(type.EXTINGUISH),
  recycle: createAction(type.RECYCLE, (recycleRobots:  string[]) => ({
    type: type.RECYCLE,
    recycleRobots
  }))
};
