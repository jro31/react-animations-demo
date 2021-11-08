import React, { Component } from 'react';
// <TransitionGroup> can be used in places where you output lists
// The containing elements MUST be <Transition> or <CSSTransition> components
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

import './List.css';

class List extends Component {
  state = {
    items: [1, 2, 3],
  };

  addItemHandler = () => {
    this.setState(prevState => {
      return {
        items: prevState.items.concat(prevState.items.length + 1),
      };
    });
  };

  removeItemHandler = selIndex => {
    this.setState(prevState => {
      return {
        items: prevState.items.filter((item, index) => index !== selIndex),
      };
    });
  };

  render() {
    const listItems = this.state.items.map((item, index) => (
      <CSSTransition key={index} classNames='fade' timeout={300}>
        {/* <TransitionGroup> determines when an element in the list is added or removed */}
        {/* It will then manually set the 'in' prop on the wrapped <Transition> or <CSSTransition> component */}
        {/* So we DON'T set the 'in' prop here */}
        <li className='ListItem' onClick={() => this.removeItemHandler(index)}>
          {item}
        </li>
      </CSSTransition>
    ));

    return (
      <div>
        <button className='Button' onClick={this.addItemHandler}>
          Add Item
        </button>
        <p>Click Item to Remove.</p>
        <TransitionGroup className='List' component='ul'>
          {/* The default 'component' of <TransitionGroup> is a <div>. The 'component='ul'' prop updates it to be a <ul> */}
          {listItems}
        </TransitionGroup>
      </div>
    );
  }
}

export default List;
