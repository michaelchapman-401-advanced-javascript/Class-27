import React from 'react';

/**
 * The Counter component which renders the counting mechanism and number
 */
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

/**
 * Increment count state
 *
 * @param {event} event object
 * @public
 */
  handleUp = e => {
    let count = this.state.count + 1;
    this.updateCounter(count);
  };

/**
 * Decrement count state
 *
 * @param {event} event object
 * @public
 */
  handleDown = e => {
    let count = this.state.count - 1;
    this.updateCounter(count);
  };

/**
 * Handes determining whether count is negative or positive and then creates and assigns those values to the polarity state
 *
 * @param {count}  integer
 * @public
 */
  updateCounter(count) {
    let polarity = '';
    if (count > 0) {
      polarity = 'positive';
    } else if (count < 0) {
      polarity = 'negative';
    }
    this.setState({ count, polarity });
  }

  render() {
    let classes = ['count', this.state.polarity].join(' ');
    return (
      <section className="counter">
        <a href="#" className="down clicker" onClick={this.handleDown}>
          -
        </a>
        <span className={classes}>{this.state.count}</span>
        <a href="#" className="up clicker" onClick={this.handleUp}>
          +
        </a>
      </section>
    );
  }
}

export default Counter;
