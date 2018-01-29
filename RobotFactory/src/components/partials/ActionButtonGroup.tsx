import * as React from "react";
import { CardActions } from "material-ui/Card";
import IconButton from "material-ui/IconButton";
import ExtinguishIcon from "material-ui/svg-icons/editor/bubble-chart";
import ShipmentIcon from 'material-ui/svg-icons/maps/local-shipping'
import RemoveIcon from 'material-ui/svg-icons/content/undo'
import { blue500 } from "material-ui/styles/colors";
interface ActionButtonProps {
  id: string;
  onFires: string[];
  seconds: string[];
  passed: string[];
  toShip: string[];
  extinguishFire: (id: string) => any;
  addToShipment: (id: string) => any;
  removeFromShipment: (id: string) => any;
}

export const ActionButtonGroup = (props: ActionButtonProps) => (
  <CardActions>
    {props.onFires.includes(props.id) && (
      <IconButton
        tooltip="Extinguish Fire"
        onClick={props.extinguishFire.bind(null, props.id)}
      >
        <ExtinguishIcon color={blue500} />
      </IconButton>
    )}
    {props.seconds.concat(props.passed).includes(props.id) && (
      <IconButton tooltip="Add To Shipment" onClick={props.addToShipment.bind(null, props.id)}>
        <ShipmentIcon color={blue500} />
      </IconButton>
    )}
    {props.toShip.includes(props.id) && (
      <IconButton
        tooltip="Remove From Shipment"
        onClick={props.removeFromShipment.bind(null, props.id)}
      >
        <RemoveIcon color={blue500} />
      </IconButton>
    )}
  </CardActions>
);
