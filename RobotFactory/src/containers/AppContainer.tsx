import { connect } from 'react-redux';
import { AppState } from '../models';
import { App } from '../components';
import { fetchRobots, recycleBots, sendShipment } from '../actions/' 

const mapStateToProps = ({robots, appStatus}: AppState) => ({
  robots, appStatus
});

export const AppContainer = connect(mapStateToProps, {
    fetchRobots,
    recycleBots,
    sendShipment
})(App);