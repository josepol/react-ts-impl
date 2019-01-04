import Repository, { DispatchProps, StateProps } from "../components/organisms/Repository";
import { IReduxState } from "../reducers";
import { connect } from "react-redux";
import { AnyAction, bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { getUserRepos } from "../actions/users";

function mapStateToProps(state: IReduxState): StateProps {
  return {
      user: state.users.user!
  };
}

function mapDispatchToProps(
  dispatch: ThunkDispatch<IReduxState, {}, AnyAction>
): DispatchProps {
  return bindActionCreators({ getUserRepos }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repository);
