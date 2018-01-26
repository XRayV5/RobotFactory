import { createAction } from "typesafe-actions";
import * as type from "./type";
import { Robot } from '../models/';

export const receiveRobots = createAction(type.FETCH_BOTS, (robots: Robot[]) => ({
  type: type.FETCH_BOTS,
  robots
}))
export const extinguish = createAction(type.EXTINGUISH);
export const recycle = createAction(
  type.RECYCLE,
  (recycleRobots: Robot[]) => ({
    type: type.RECYCLE,
    recycleRobots
  })
);