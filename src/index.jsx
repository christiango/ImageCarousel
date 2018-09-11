import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import { FlickrApiKey } from '../apiKey';

ReactDOM.render(<App />, document.getElementById('root'));

fetch(
  `https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=cats&api_key=${FlickrApiKey}&format=json&nojsoncallback=1`
).then(async response => {
  const json = await response.json();
  console.log(json);
});
