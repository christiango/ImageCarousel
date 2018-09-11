import * as React from 'react';

export class SearchBox extends React.PureComponent {
  inputRef = React.createRef();

  onSubmit = () => {
    this.props.onSearchSubmit(this.inputRef.current.value);
  };

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input style={{ height: 40, fontSize: 20 }} ref={this.inputRef} />
        <button style={{ marginLeft: 10 }} onClick={this.onSubmit}>
          Search
        </button>
      </div>
    );
  }
}
