import * as React from "react";
import { Robot } from "../models";
export interface AppProps {
  robots: Robot[];
  fetchRobots: () => any;
}
export class App extends React.Component<AppProps, {}> {
  public componentDidMount() {
    this.props.fetchRobots();
  }
  public render() {
    console.log("robots", this.props.robots);
    return <h1>Hello from {this.props.robots} and!</h1>;
  }
}
