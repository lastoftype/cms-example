import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// Router
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Extra
import registerServiceWorker from './registerServiceWorker';


// Redux
import { Provider } from 'react-redux';
import store from './store';

// Styles
import './assets/styles/index.css';

ReactDOM.render(
	<Provider store={ store }>
		<Router>
			<section>
				<nav className="nav">
					<Link to="/">Home</Link>
					<span> | </span>
					<Link to="/thing">Thing</Link>
				</nav>
				<main className="main">
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
