import * as React from 'react';

const PreviewCard = props => (
  <div>
    <img src={props.photoUrl} />
  </div>
);

export class PreviewPane extends React.PureComponent {
  render() {
    return (
      <div>
        {this.props.items.map((item, index) => (
          <PreviewCard
            photoUrl={item.photoUrl}
            isSelected={index === this.props.selectedIndex}
          />
        ))}
      </div>
    );
  }
}
