import { ThunkAction } from "redux-thunk";
import { normalize } from "normalizr";
import { AppState, Robot, RobotLookUp } from "../models";
import { fetchRobotsAPI, extinguishFireAPI, recycleBotsAPI, sendShipmentAPI } from "./api";
import { receiveRobots, filterOnFire, extinguish, updateQAResult, flagRecycled, removeFromShipmentAction, clearShipList } from "./actionCreators";
import { robotsSchema } from "../reducers/schema";
import { removeId } from '../reducers/helpers'

export type Thunk = ThunkAction<void, AppState, void>;

export const fetchRobots = (): Thunk => (dispatch, getState) => {
  fetchRobotsAPI().then((robots: Robot[]) => {
    const { result, entities } = normalize(robots, robotsSchema);
    dispatch(receiveRobots({ robots: entities.robots, ids: result }));
    dispatch(filterOnFire(robots));
  });
};

export const extinguishFire = (id: string): Thunk => (dispatch, getState) => {
  extinguishFireAPI(id).then(() => {
    const onFires = getState().robots.onFires.filter(botId => botId !== id);
    const extinguishedStatus = getState().robots.factory[id].statuses.filter(
      status => status !== "on fire"
    );
    const extinguishedBot = {
      [id]: {
        ...getState().robots.factory[id],
        statuses: [...extinguishedStatus, "extinguished"]
      }
    };
    dispatch(extinguish(onFires, extinguishedBot));
  });
};

export const recycleBots = (): Thunk => (dispatch, getState) => {
  const { ids, factory } = getState().robots;
  const { recycle, seconds, passed } = pipelineQA(ids, factory);
  recycleBotsAPI(recycle).then(() => {
      dispatch(flagRecycled())
      dispatch(updateQAResult( { recycle, seconds, passed }))
  })
};

export interface QAResultType {
  recycle: string[];
  seconds: string[];
  passed: string[];
}

const pipelineQA = (ids: string[], robots: RobotLookUp) =>
  ids.reduce(
    ({ recycle, seconds, passed }: QAResultType, id: string) => {
      return failQA(robots[id])
        ? { seconds, passed, recycle: [...recycle, id] }
        : isSecondary(robots[id])
          ? { recycle, passed, seconds: [...seconds, id] }
          : { recycle, seconds, passed: [...passed, id] };
    },
    {
      recycle: [],
      seconds: [],
      passed: []
    }
  );

// const failQA = (robot: Robot) => {
//   const {
//     numberOfRotors,
//     Colour,
//     hasSentience,
//     hasWheels,
//     hasTracks
//   } = robot.configuration;
//   if (numberOfRotors > 8 || numberOfRotors < 3 || Colour === "blue")
//     return true;
//   if (hasWheels && hasTracks) return true;
//   if (hasWheels && robot.statuses.includes("rusty")) return true;
//   if (hasSentience && robot.statuses.includes("loose screws")) return true;
//   if (robot.statuses.includes("on fire")) return true;
// };

const failQA = (robot: Robot) => {
    const {
      numberOfRotors,
      Colour,
      hasSentience,
      hasWheels,
      hasTracks
    } = robot.configuration;
    return (numberOfRotors > 8 || numberOfRotors < 3 || Colour === "blue")
    || (hasWheels && hasTracks)
    || (hasWheels && robot.statuses.includes("rusty"))
    || (hasSentience && robot.statuses.includes("loose screws"))
    || (robot.statuses.includes("on fire"))
  };

const isSecondary = (robot: Robot) => {
    if(robot.statuses.length === 0) return false 
    return robot.statuses.some(
        status => ["rusty", "loose screws", "paint scratched"].includes(status)
      );
}

export const removeFromShipment = (id: string): Thunk => (dispatch, getState) => {
    const { factory, seconds, passed, toShip } = getState().robots
    const result = isSecondary(factory[id]) ? { seconds: [...seconds, id] } : { passed: [...passed, id] }
    const deducted = removeId(id, toShip)
    dispatch(removeFromShipmentAction({ ...result, toShip: deducted }))
}

export const sendShipment = (): Thunk => (dispatch, getState) => {
    sendShipmentAPI(getState().robots.toShip).then(() => dispatch(clearShipList()))
}