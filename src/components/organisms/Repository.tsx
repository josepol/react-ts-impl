import * as React from "react";
import moment from 'moment';
import { History } from 'history';
import { ISaveUser } from "interfaces";
import ReposComponent from "../repos/repos";

export interface StateProps {
    history?: History;
    user: ISaveUser
}

export interface DispatchProps {
    getUserRepos: (name: string) => void
}

interface State {
}

type IProps = StateProps & DispatchProps;
type IState = State;

class RepositoryComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.user) {
        this.props.history!.push('');
        return;
    }
    this.props.getUserRepos(this.props.user.name);
  }

  public render() {
    const { user } = this.props;
    return (
      <div>
        <button onClick={this.props.history!.goBack}>Go back</button>
        <h1>REPOSITORY</h1>
        {user && 
        <div>
            <h2>Name: { user.name }</h2>
            <h2>Created at: { user && moment(user.createdAt).format('MM-DD-YYYY') }</h2>
            {user.bio && <h2>Bio: { user && user.bio }</h2>}
            <ReposComponent repos={user.repos!} />
        </div>}
      </div>
    );
  }
}

export default RepositoryComponent;
