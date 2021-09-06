import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import { MyContext } from './context';

import StageOne from './components/stage_1';
import StageTwo from './components/stage_2';

class App extends Component {
  static contextType = MyContext;

  render() {
    return (
      <div className="wrapper">
        <div className="center-wrapper">
          <h1>Who pays the bill ?</h1>
          {this.context.state.stage === 1 ? <StageOne /> : <StageTwo />}
        </div>
      </div>
    );
  }
}

export default App;
