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
      classNames='fade-slide'
    >
      {/* The <CSSTransition> 'classNames' prop (note the 's') defines which CSS classes should be added to the wrapped element (so to the '<div className='Modal'>' element below) */}
      {/* It will add the named className(s) prepended to 'enter', 'enter-active', 'exit' and 'exit-active' */}
      {/* For example, the 'fade-slide-enter' class is added right before the component starts 'entering' (but then removed almost immediately (after one frame) - this class is used to set the initial styling (for example, to set the opacity to 0)) */}
      {/* 'fade-slide-enter-active' is added immediately after 'fade-slide-enter', but remains for the duration of the 'entering' state */}
      {/* 'fade-slide-exit' and 'fade-slide-exit-active' are the same, but for 'exiting' */}
      {/* 'https://reactcommunity.org/react-transition-group/css-transition' has a good example of this */}
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
