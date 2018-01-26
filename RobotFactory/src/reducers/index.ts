import { combineReducers } from 'redux';
import { getType } from 'typesafe-actions';

export type State = {
    readonly robots: Robot[]
};

export type Configuration = Readonly<{
    hasSentience: boolean, 
    hasWheels: boolean, 
    hasTracks: boolean, 
    numberOfRotors: number, 
    Colour: string
}>

export type statuses = ReadonlyArray<string>

export type Robot = {
    readonly id: string;
    readonly name: string;
    readonly configuration: Configuration;
    readonly statuses: statuses;
};