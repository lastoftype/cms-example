import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import Input from './Input';

class App extends Component {
  render() {
    return (
      <div className="app-home">
          <HomeHeader />
          <section className="editor">
          	<div className="tile">
          		<div className="form-group">
	          		<label>Content</label>
	          		<textarea className="form-control" />
	          	</div>
	          	<button className="button button-primary">Submit</button>
          	</div>
          </section>
      </div>
    );
  }
}

export default App;
