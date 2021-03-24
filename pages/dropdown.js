import React from 'react';

export default class OuterClickExample extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { isOpen: false };
      this.toggleContainer = React.createRef();
  
      this.onClickHandler = this.onClickHandler.bind(this);
      this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
    }
  
    componentDidMount() {
      window.addEventListener('click', this.onClickOutsideHandler);
    }
  
    componentWillUnmount() {
      window.removeEventListener('click', this.onClickOutsideHandler);
    }
  
    onClickHandler() {
      this.setState(currentState => ({
        isOpen: !currentState.isOpen
      }));
    }
  
    onClickOutsideHandler(event) {
      if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
        this.setState({ isOpen: false });
      }
    }
  
    render() {
      return (
        <ul ref={this.toggleContainer}>
          <li>
              <button onClick={this.onClickHandler}>Select an option</button>
              {this.state.isOpen && (
                <ul>
                  <li><a href="#option-1">Option 1</a></li>
                  <li><a href="#option-2">Option 2</a></li>
                  <li><a href="#option-3">Option 3</a></li>
                </ul>
              )}
          </li>
        </ul>
      );
    }
  }