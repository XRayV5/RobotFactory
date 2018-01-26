import { connect } from 'react-redux';
import { RobotState } from '../models';
import { App } from '../components';
import { fetchRobots } from '../actions/thunks' 

const mapStateToProps = (state: RobotState) => ({
  robots: state.robots,
});

export const AppContainer = connect(mapStateToProps, {
    fetchRobots
})(App);