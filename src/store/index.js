import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';
import ApiClient from '../api/client';

const api = new ApiClient();

const middleware = applyMiddleware(
	thunk.withExtraArgument(api),
	createLogger({ level: 'info', collapsed: true })
);

const store = createStore(
	reducers,
	compose(middleware)
);

export default store;