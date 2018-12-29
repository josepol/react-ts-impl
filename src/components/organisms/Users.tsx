import { ISaveUser } from "interfaces";
import * as React from "react";

export interface Props {
  users: Array<ISaveUser>;
}

interface State {
}

type IProps = Props;
type IState = State;

class UsersComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { users } = this.props;
    return (
      <div>
        {users && users.map((user: ISaveUser, i: number) => (
            <div key={i}>
                <p>{user.name} with status code <span>{user.status}</span></p>
            </div>
        ))}
      </div>
    );
  }
}

export default UsersComponent;
