import React, { Component } from "react";
import { Message, Card, Container, Modal, Image } from "semantic-ui-react";
import gift from "./gift.jpeg";
import halfdome from "./halfdome.jpg";
import stitchfix from "./stitchfix.jpeg";

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Message style={{ flex: 1, alignItems: "center" }} size="huge">
          Happy Birthday Abby!!! 🎉 🎉 🎉
        </Message>
        <Container>
          <Modal
            trigger={
              <Card style={{ flex: 1, alignItems: "center" }}>
                <img style={styles.image} src={gift} alt="gift1" />
              </Card>
            }
          >
            <Modal.Content image>
              <Image wrapped size="medium" src={halfdome} />
            </Modal.Content>
          </Modal>

          <Modal
            trigger={
              <Card style={{ flex: 1, alignItems: "center" }}>
                <img style={styles.image} src={gift} alt="gift2" />{" "}
              </Card>
            }
          >
            <Modal.Content>Look Up</Modal.Content>
          </Modal>

          <Modal
            trigger={
              <Card style={{ flex: 1, alignItems: "center" }}>
                <img style={styles.image} src={gift} alt="gift3" />
              </Card>
            }
          >
            <Modal.Content image>
              <Image wrapped size="medium" src={stitchfix} />
            </Modal.Content>
          </Modal>
        </Container>
      </div>
    );
  }
}

const styles = {
  container: {
    width: "370px"
    // flex: 1,
    // alignItems: "center"
  },
  image: {
    width: "150px",
    textAlign: "center"
  }
};

export default App;
