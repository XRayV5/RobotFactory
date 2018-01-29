import { connect } from "react-redux";
import { AppState } from "../models";
import { ActionButtonGroup } from "../components/partials/ActionButtonGroup";
import { extinguishFire, addToShipment, removeFromShipment } from "../actions/";

const mapStateToProps = ({
  robots: { onFires, seconds, passed, toShip }
}: AppState) => ({ onFires, seconds, passed, toShip });

export const ActionButtonGroupContainer = connect(mapStateToProps, {
  extinguishFire,
  addToShipment,
  removeFromShipment
})(ActionButtonGroup);
