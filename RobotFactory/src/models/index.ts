export type Configuration = Readonly<{
    hasSentience: boolean, 
    hasWheels: boolean, 
    hasTracks: boolean, 
    numberOfRotors: number, 
    Colour: string
}>

export type Statuses = ReadonlyArray<string>

export interface Robot{
    readonly id: string;
    readonly name: string;
    readonly configuration: Configuration;
    readonly statuses: Statuses;
};

export interface RobotLookUp {
    readonly [id:string]: Robot
}

export interface RobotState {
    readonly factory: RobotLookUp;
    readonly ids: string[];
    readonly onFires: string[];
    readonly recycle: string[];
    readonly seconds: string[];
    readonly passed: string[];
    readonly toShip: string[];
};

export interface AppStatusType
    { [key: string]: boolean }

export interface AppState {
    robots: RobotState;
    appStatus: AppStatusType;
}

