import { ISaveUser } from "interfaces";
import * as React from "react";
import { History } from 'history';
import { REPOSITORIES_URL } from "../../constants";

export interface Props {
  users: Array<ISaveUser>;
  history: History
}

export interface DispatchProps {
  setUser: (user: ISaveUser) => void;
}

interface State {
}

type IProps = Props & DispatchProps;
type IState = State;

class UsersComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  private navToUser(user: ISaveUser, $event: React.MouseEvent<HTMLElement>) {
    $event.preventDefault();
    this.props.setUser(user);
    this.props.history.push(REPOSITORIES_URL);
  }

  public render() {
    const { users } = this.props;
    return (
      <div>
        {users && users.map((user: ISaveUser, i: number) => (
            <div key={i}>
                <a href="" onClick={($event) => this.navToUser(user, $event)}>{user.name} with status code <span>{user.status}</span></a>
            </div>
        ))}
      </div>
    );
  }
}

export default UsersComponent;
