import * as React from "react";
import { RobotState, AppStatusType } from "../models";
import { MainWrapper } from "./partials/MainWrapper";
import { List } from "./partials/List";
import {
  factoryStyle,
  recycleStyle,
  secondsStyle,
  passedStyle
} from "../style/";
export interface AppProps {
  robots: RobotState;
  appStatus: AppStatusType;
  fetchRobots: () => any;
  recycleBots: () => any;
  sendShipment: () => any;
}
export class App extends React.Component<AppProps, {}> {
  public componentDidMount() {
    this.props.fetchRobots();
  }
  public render() {
    const { factory, recycle, seconds, passed, toShip } = this.props.robots;
    const { recycled } = this.props.appStatus;
    return (
      <MainWrapper>
        <List
          title="Recycled"
          customStyle={recycleStyle}
          robots={factory}
          ids={recycle}
          recycled={recycled}
          listAction={this.props.recycleBots}
        />
        <List
          title="Factory Seconds"
          customStyle={secondsStyle}
          robots={factory}
          ids={seconds}
        />
        <List
          title="Passed QA"
          customStyle={passedStyle}
          robots={factory}
          ids={passed}
        />
        <List
          title="Ready To Ship"
          customStyle={factoryStyle}
          robots={factory}
          ids={toShip}
          listAction={this.props.sendShipment}
        />
      </MainWrapper>
    );
  }
}
