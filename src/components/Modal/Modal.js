import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = props => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: '',
        enterActive: 'ModalOpen',
        exit: '',
        exitActive: 'ModalClosed',
      }}
    >
      {/* This instead uses custom CSS classes, instead of 'fade-slide-enter', 'fade-slide-enter-active' etc */}
      {/* You also get 'appear:' and 'appearActive:' classNames. These are for when an element is first mounted to ths DOM (I think just when the page loads, although not too sure about these) */}
      <div className='Modal'>
        <h1>A Modal</h1>
        <button className='Button' onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
