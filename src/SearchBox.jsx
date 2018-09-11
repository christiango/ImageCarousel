import * as React from 'react';

export class SearchBox extends React.PureComponent {
  inputRef = React.createRef();

  onSubmit = () => {
    this.props.onSearchSubmit(this.inputRef.current.value);
  };

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input ref={this.inputRef} />
        <button onClick={this.onSubmit}>Search</button>
      </div>
    );
  }
}
