import React, { Component } from 'react';
import './App.css';
import Service from './components/Service';

const styles = {
  backgroundColor: '#E11C4C',
  padding: '10px'
};

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h3 className="text-center mt-1 mb-3 text-light" style={styles}>¿En la escala del raccoon cómo te sientes hoy?</h3>
        <Service />
      </div>
    );
  }
}

export default App;
