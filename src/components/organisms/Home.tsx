import { IUser } from "interfaces";
import * as React from "react";

export interface StateProps {
  users: Array<IUser>;
}

export interface DispatchProps {
  getUser: (name: string) => void;
}

export type IProps = StateProps & DispatchProps;

class ThankYouCard extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { getUser } = this.props;
    return (
      <div>
        <button onClick={() => getUser("gaearon")}>{"GO!"}</button>
      </div>
    );
  }
}

export default ThankYouCard;
