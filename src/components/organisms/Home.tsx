import { IUser, ISaveUser } from "interfaces";
import * as React from "react";
import UsersComponent from "./Users";

export interface StateProps {
  users: Array<ISaveUser>;
  httpError: boolean;
  httpSuccess: boolean;
}

export interface DispatchProps {
  getUser: (name: string) => void;
}

interface State {
  user: string;
  btnDisabled: boolean;
}

type IProps = StateProps & DispatchProps;
type IState = State;

class ThankYouCard extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      user: '',
      btnDisabled: true
    }
  }

  public userInputChanged = ($event: React.ChangeEvent<HTMLInputElement>) => {
    const user = $event.target.value;
    this.setState({
      btnDisabled: user.length < 3,
      user
    });
  }

  public render() {
    const { getUser, users } = this.props;
    return (
      <div>
        <input type="text" name="user" onChange={($event) => this.userInputChanged($event)} />
        <button disabled={this.state.btnDisabled} onClick={() => getUser(this.state.user)}>"GO!"</button>
        <p>{this.props.httpError && <span className="App-error-msg">HTTP Request KO</span>}</p>
        <p>{this.props.httpSuccess && <span className="App-success-msg">HTTP Request OK</span>}</p>
        <UsersComponent users={users} />
      </div>
    );
  }
}

export default ThankYouCard;
