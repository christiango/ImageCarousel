import * as React from 'react';

export class Carousel extends React.PureComponent {
  onPreviousClick = () => {
    this.props.onPreviousClick();
  };

  onNextClick = () => {
    this.props.onNextClick();
  };

  render() {
    return (
      <div>
        <button onClick={this.onPreviousClick}>{'<'}</button>
        <div />
        <button onClick={this.onNextClick}>{'>'}</button>
      </div>
    );
  }
}
