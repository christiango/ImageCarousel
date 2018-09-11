import * as React from 'react';
import { SearchBox } from './SearchBox';
import { Carousel } from './Carousel';
import { FlickrApiKey } from '../apiKey';
import { PreviewPane } from './PreviewPane';

export class App extends React.PureComponent {
  state = {
    selectedIndex: undefined,
    pictures: undefined
  };

  /**
   * Callback that gets invoked when the user submits a new keyword search
   */
  onSearchSubmit = async searchTerm => {
    // Request images with the keyword matching the user search term
    let response = await fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=${searchTerm}&per_page=4&api_key=${FlickrApiKey}&format=json&nojsoncallback=1`
    );
    const json = await response.json();

    // Reset the current selected index and generate the url for each image
    this.setState({
      selectedIndex: 0,
      pictures: json.photos.photo.map(photo => ({
        photoUrl: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${
          photo.id
        }_${photo.secret}.jpg`
      }))
    });
  };

  onPreviousPicture = () => {
    const { selectedIndex } = this.state;

    if (selectedIndex > 0) {
      this.navigateToPicture(this.state.selectedIndex - 1);
    }
  };

  onNextPicture = () => {
    const { selectedIndex } = this.state;

    if (selectedIndex < this.state.pictures.length - 1) {
      this.navigateToPicture(this.state.selectedIndex + 1);
    }
  };

  navigateToPicture = index => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { selectedIndex, pictures } = this.state;

    return (
      <div>
        <SearchBox onSearchSubmit={this.onSearchSubmit} />
        <Carousel
          heroImageUrl={
            selectedIndex !== undefined && pictures[selectedIndex].photoUrl
          }
          onPreviousClick={this.onPreviousPicture}
          onNextClick={this.onNextPicture}
        />
        <PreviewPane
          onPreviewClicked={this.navigateToPicture}
          items={pictures || []}
          selectedIndex={selectedIndex}
        />
      </div>
    );
  }
}
