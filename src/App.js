import React, { Component } from "react";
import { Message } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div style={styles}>
        <Message>Happy Birthday Abby!!! 🎉 🎉 🎉</Message>
      </div>
    );
  }
}

const styles = {
  width: "600px"
};

export default App;
