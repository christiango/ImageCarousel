import * as React from 'react';
import { SearchBox } from './SearchBox';
import { Carousel } from './Carousel';
import { FlickrApiKey } from '../apiKey';

export class App extends React.PureComponent {
  /**
   * Callback that gets invoked when the user submits a new keyword search
   */
  onSearchSubmit = async searchTerm => {
    let response = await fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=${searchTerm}&api_key=${FlickrApiKey}&format=json&nojsoncallback=1`
    );
    const json = await response.json();

    console.log(json);
  };

  onPreviousPicture = () => {};

  onNextPicture = () => {};

  render() {
    return (
      <div>
        <SearchBox onSearchSubmit={this.onSearchSubmit} />
        <Carousel
          onPreviousClick={this.onPreviousPicture}
          onNextClick={this.onNextPicture}
        />
      </div>
    );
  }
}
