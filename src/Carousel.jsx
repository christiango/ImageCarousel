import * as React from 'react';

export class Carousel extends React.PureComponent {
  onPreviousClick = () => {
    this.props.onPreviousClick();
  };

  onNextClick = () => {
    this.props.onNextClick();
  };

  render() {
    const { heroImageUrl } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      >
        <button onClick={this.onPreviousClick}>{'<'}</button>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          {heroImageUrl && (
            <img src={heroImageUrl} style={{ height: '100%' }} />
          )}
        </div>
        <button onClick={this.onNextClick}>{'>'}</button>
      </div>
    );
  }
}
