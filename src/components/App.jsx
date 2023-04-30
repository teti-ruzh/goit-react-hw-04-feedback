import { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import css from './App.module.css';

export class App extends Component {

  static defaultProps = {
    initialValue: 0
  }

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  onLeaveFeedback = (value) => {
    this.setState((prevState) => ({
      [value]: prevState[value] + 1,
    }));
    
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => {
      return (total += value)
    })
  }

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() > 0
    ? `${Math.round((this.state.good / this.countTotalFeedback()) * 100)}%`
    : `0%`;
  }

  render() {
    const names = Object.keys(this.state);
    const options = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.container}>
      <Section title="Please leave feedback">
      <FeedbackOptions
          options={names}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      </Section>
        <Section title="Statistics">
        {total ? <Statistics
          options={options}
          total={total}
          positivePercentage={positivePercentage}
        /> : <Notification message="There is no feedback" /> }
        </Section>       
      </div>
    );
  }
}
