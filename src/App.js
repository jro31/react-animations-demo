import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

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
        <Transition
          in={this.state.showBlock}
          timeout={300}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('onEnter')}
        >
          {/* <Transition> has 6 callback props: 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting' and 'onExited' */}
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
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        {this.state.modalIsOpen && <Backdrop show />}
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

// Some alternatives to 'react-transition-group'
// React-Motion (https://github.com/chenglou/react-motion) - Has impressive animations such as solar system and water ripples
// React-Move (https://github.com/sghall/react-move)
// React Router Transition (https://github.com/maisano/react-router-transition) - Builds on React Router, where you replace the <Switch> component with an <AnimatedSwitch> component to add animation when you switch between pages
