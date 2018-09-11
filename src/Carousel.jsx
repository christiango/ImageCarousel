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
      <div style={{ display: 'flex' }}>
        <button onClick={this.onPreviousClick}>{'<'}</button>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img src={this.props.heroImageUrl || ''} />
        </div>
        <button onClick={this.onNextClick}>{'>'}</button>
      </div>
    );
  }
}
