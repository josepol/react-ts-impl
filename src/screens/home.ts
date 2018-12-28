import Home, { DispatchProps, StateProps } from "../components/organisms/Home";
import { getUser } from "../actions/users";
import { IReduxState } from "../reducers";
import { connect } from "react-redux";
import { AnyAction, bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";

function mapStateToProps(state: IReduxState): StateProps {
  return {
    users: state.users.users
  };
}

function mapDispatchToProps(
  dispatch: ThunkDispatch<IReduxState, {}, AnyAction>
): DispatchProps {
  return bindActionCreators({ getUser }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
