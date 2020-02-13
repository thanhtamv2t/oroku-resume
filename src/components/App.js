import React from "react";
import Aside from "./Aside";
import Home from "./Home";
import { Swipeable } from "react-swipeable";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleAside = isOpen => {
    return this.setState({ isOpen });
  };
  render() {
    const { isOpen } = this.state;
    return (
      <Swipeable
        onSwipedRight={() => this.handleAside(true)}
        onSwipedLeft={() => this.handleAside(false)}
      >
        <div className="container fluid">
          <Aside isOpen={isOpen} />
          <Home />
        </div>
      </Swipeable>
    );
  }
}

export default App;
