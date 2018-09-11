import * as React from 'react';

const PreviewCard = props => (
  <div style={{ padding: 10 }}>
    <img src={props.photoUrl} style={{ height: '100%' }} />
  </div>
);

export class PreviewPane extends React.PureComponent {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', height: 200 }}>
        {this.props.items.map((item, index) => (
          <PreviewCard
            key={index}
            photoUrl={item.photoUrl}
            isSelected={index === this.props.selectedIndex}
          />
        ))}
      </div>
    );
  }
}
