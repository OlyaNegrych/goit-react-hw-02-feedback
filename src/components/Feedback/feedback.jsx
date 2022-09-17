// import PropTypes from 'prop-types';
import React from 'react';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodIncrement = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleNeutralIncrement = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleBadIncrement = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    return (
      <>
        <div>
          <h2>Please leave feedback</h2>
          <button type="button" onClick={this.handleGoodIncrement}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutralIncrement}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBadIncrement}>
            Bad
          </button>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
        </div>
      </>
    );
  }
}

// Feedback.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     })
//   ),
// };

export default Feedback;
