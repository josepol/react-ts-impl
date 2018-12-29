import * as React from 'react';
import SpinnerImg from '../../assets/imgs/Spin.png';
import { IReduxState } from '../../reducers';
import { connect } from 'react-redux';

interface StateProps {
    isSpinnerLoading: boolean
}

interface DispatchProps {
    getIsSpinnerLoading: () => boolean;
}

type IProps = StateProps;

function mapStateToProps(state: IReduxState): StateProps {
    return {
        isSpinnerLoading: state.layout.isSpinnerLoading
    };
}

class Spinner extends React.Component<IProps, StateProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { isSpinnerLoading } = this.props;
    return (
        <React.Fragment>
            {isSpinnerLoading && <div className="App-logo-container"><img src={SpinnerImg} className="App-logo" /></div>}
        </React.Fragment>
    )
  }
}

export default connect(
    mapStateToProps
)(Spinner);