import React from 'react';
import {createRoot} from 'react-dom/client';
import history from './history';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import MyProvider from './context/MyProvider';

createRoot(document.getElementById('root')).render(
	<BrowserRouter history={history}>
		<MyProvider>
			<App />
		</MyProvider>
	</BrowserRouter>,
);
