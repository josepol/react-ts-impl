import * as React from "react";
import { IRepo } from "interfaces";

export interface Props {
    repos: Array<IRepo>
}

export interface DispatchProps {
}

interface State {
}

type IProps = Props;
type IState = State;

class ReposComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { repos } = this.props;
    return (
      <div>
        {repos && repos.map((repo: IRepo, i: number) => (
            <div key={i}>
                <h3>{repo.url}</h3>
            </div>
        ))}
      </div>
    );
  }
}

export default ReposComponent;
