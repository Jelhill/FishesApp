import React, { Fragment } from 'react';
import Form from "./Form"
import './App.css';
import ListFishes from './ListFishes';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex">      
          <Form />
          <ListFishes />
        </div>
      </div>
    </div>
    
  );
}

export default App;
