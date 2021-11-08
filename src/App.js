import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition'; // Can be named anything, but 'Transition' makes sense

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className='App'>
        <h1>React Animations</h1>
        <button
          className='Button'
          onClick={() => this.setState(prevState => ({ showBlock: !prevState.showBlock }))}
        >
          Toggle
        </button>
        <br />
        {/* The 'in' prop determines whether the contained element(s) should be visible or not */}
        {/* The 'timeout' prop determines how long the animation should be (in milliseconds) */}
        {/* 'mountOnEnter' says that if the 'in' prop is true, the contained element should be added to the DOM */}
        {/* 'unmountOnExit' says that if the 'in' prop is false, the contained element should be removed from the DOM */}
        <Transition in={this.state.showBlock} timeout={300} mountOnEnter unmountOnExit>
          {/* Within the <Transition> component you create a function, which has a 'state' argument */}
          {/* This 'state' argument will be 'entering', 'entered', 'exiting' or 'exited' */}
          {state => (
            <div
              style={{
                backgroundColor: 'red',
                width: 100,
                height: 100,
                margin: 'auto',
                transition: 'opacity 0.3s ease-out',
                opacity: state === 'exiting' ? 0 : 1,
              }}
            ></div>
          )}
        </Transition>
        {this.state.modalIsOpen && <Modal show={this.state.modalIsOpen} closed={this.closeModal} />}
        {this.state.modalIsOpen && <Backdrop show={this.state.modalIsOpen} />}
        <button className='Button' onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
