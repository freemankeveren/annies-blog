import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Recent BLogs</li>
          <li>All Blogs</li>
        </ul>
      </nav>
      <div>
        <header>
        <h1> "Annie's Blog"</h1>

        </header>
      </div>
      </div>
    );
  }
}

export default App;
