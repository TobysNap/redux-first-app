import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CreatePost from './routes/CreatePost';
import Posts from './routes/Posts';
import Root from './routes/Root';
import { Provider } from 'react-redux';
import store from './store/store';

const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/create',
				element: <CreatePost />,
			},
			{
				path: '/posts',
				element: <Posts />,
			},
		],
	},
]);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
