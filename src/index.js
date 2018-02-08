import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Navbar from './components/Navbar';
import AppHeader from './components/AppHeader';

// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Extra
import registerServiceWorker from './registerServiceWorker';


// Redux
import { Provider } from 'react-redux';
import store from './store';

// Styles
import './assets/styles/index.scss';

ReactDOM.render(
	<Provider store={ store }>
		<Router>
			<section className="app-container">
				<Navbar />
				<main className="main">
					<AppHeader />
					<Switch>
						<Route exact path="/" component={ App } />
					</Switch>
				</main>
			</section>
		</Router>
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
