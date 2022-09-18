import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import { Box } from '../App/App.styled';

class App extends Component {
  static propTypes = {
    //
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackIncrement = e => {
    const currentBtn = e.currentTarget.dataset.action;
    this.setState(prevState => ({
      [currentBtn]: prevState[currentBtn] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (totalFeedback, feedbackItems) => {
        return totalFeedback + feedbackItems;
      },
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return ((good / totalFeedback) * 100).toFixed(0);
  };

  render() {
    return (
      <Box>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedbackIncrement}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </Box>
    );
  }
}

export default App;
