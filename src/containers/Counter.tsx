
import * as React from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions/counter';

type StateProps = {
  counter: number
}

type DispatchProps = {
  incrementCounter: () => void,
  decrementCounter: () => void
}

class Counter extends React.Component<StateProps & DispatchProps, any> {
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h2>{this.props.counter}</h2>
        <button onClick={this.props.incrementCounter}>+ 1</button>
        <button onClick={this.props.decrementCounter}>- 1</button>
      </div>
    )
  }
}

function stateToProps(state: any) {
  return {
    counter: state.get('counter')
  }
}

function dispatchToProps(dispatch: any) {
  return {
    incrementCounter: () => { dispatch(incrementCounter()) },
    decrementCounter: () => { dispatch(decrementCounter()) },
  }
}

export default connect(stateToProps, dispatchToProps)(Counter);
