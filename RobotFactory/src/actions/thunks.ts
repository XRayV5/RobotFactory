import { ThunkAction } from 'redux-thunk'
import { RobotState, Robot } from '../models'
import { fetchRobotsAPI } from './api'
import { receiveRobots } from './actionCreators'

export type Thunk = ThunkAction<void, RobotState, void>;

export const fetchRobots = (): Thunk =>
    (dispatch, getState) => {
        fetchRobotsAPI()
            .then((rebots: Robot[]) => {
                dispatch(receiveRobots(rebots))
            })
    }