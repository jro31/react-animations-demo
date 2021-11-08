import React from 'react';
import Transition from 'react-transition-group/Transition';

import './Modal.css';

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = props => {
  return (
    <Transition mountOnEnter unmountOnExit in={props.show} timeout={animationTiming}>
      {/* 'timeout' can also be an object, with the keys 'enter' and 'exit' (as well as 'appear', although we don't use that here) */}
      {/* 'enter' is the amount of time it is in the 'entering' state, 'exit' is the amount of time it's in the 'exiting' state */}
      {state => {
        const cssClasses = [
          'Modal',
          state === 'entering' ? 'ModalOpen' : state === 'exiting' ? 'ModalClosed' : null,
        ];

        return (
          <div className={cssClasses.join(' ')}>
            <h1>A Modal</h1>
            <button className='Button' onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
