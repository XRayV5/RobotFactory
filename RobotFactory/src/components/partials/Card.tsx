import * as React from "react";
import { Card, CardTitle, CardActions, CardHeader } from "material-ui/Card";
import Android from "material-ui/svg-icons/action/android";
import { Robot } from "../../models";
import { ChipConf, ChipStatus } from "./Chip";
import { ActionButtonGroupContainer } from '../../containers/'

/* inline CSS */
const headerStyle = {
  padding: "8px 16px",
  background:"#ccc"
};

const headTextStyle = {
  paddingRight: 0
};

const titleStyle = {
  fontSize: "14px"
};

const titleRootStyle = {
  paddingTop: 0,
  paddingBottom: 0
};

const avatarStyle = {
  marginTop: "4px"
};

interface RobotCardProps extends Robot {
  avatar?: any;
}

export const RobotCard = (props: RobotCardProps) => (
  <Card style={{ marginBottom: "8px" }}>
    <CardHeader
      title={props.name}
      subtitle={`id: ${props.id}`}
      avatar={
        <Android style={avatarStyle} color={props.configuration.Colour} />
      }
      style={headerStyle}
      textStyle={headTextStyle}
    />
    <CardTitle
      title="Configurations"
      titleStyle={titleStyle}
      style={titleRootStyle}
    />
    <CardActions>
      {Object.entries(props.configuration).map((conf, i) => (
        <ChipConf key={i + conf[0]} value={conf[1]} property={conf[0]} />
      ))}
    </CardActions>
    <CardTitle
      title="Statuses"
      titleStyle={titleStyle}
      style={titleRootStyle}
    />
    <CardActions>
      {props.statuses.length === 0 ? (
        <ChipStatus />
      ) : (
        props.statuses.map((status, i) => (
          <ChipStatus key={i + status} status={status} />
        ))
      )}
    </CardActions>
    <CardTitle title="Actions" titleStyle={titleStyle} style={titleRootStyle} />
    <ActionButtonGroupContainer id={props.id}/>
  </Card>
);
