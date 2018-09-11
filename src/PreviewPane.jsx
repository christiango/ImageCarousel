import * as React from 'react';

const PreviewCard = props => (
  <div
    style={{
      padding: 10,
      border: props.isSelected ? '4px solid blue' : 'none'
    }}
    onClick={props.onPreviewClick}
  >
    <img src={props.photoUrl} style={{ height: '100%' }} />
  </div>
);

export class PreviewPane extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'absolute',
          height: '100%',
          width: '100%'
        }}
      >
        {this.props.items.map((item, index) => (
          <PreviewCard
            key={index}
            photoUrl={item.photoUrl}
            isSelected={index === this.props.selectedIndex}
            onPreviewClick={() => this.props.onPreviewClick(index)}
          />
        ))}
      </div>
    );
  }
}
