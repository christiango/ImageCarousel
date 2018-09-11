import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import { FlickrApiKey } from '../apiKey';

ReactDOM.render(<App />, document.getElementById('root'));

console.log(FlickrApiKey);
