import React, { Component } from "react";
import { Message, Card, Container, Modal, Image } from "semantic-ui-react";
import gift from "./gift.jpeg";
import halfdome from "./halfdome.jpg";
import stitchfix from "./stitchfix.jpeg";

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Message size="huge">Happy Birthday Abby!!! 🎉 🎉 🎉</Message>
        <Container>
          <Card>
            <Modal
              trigger={<img style={styles.image} src={gift} alt="gift1" />}
            >
              <Modal.Content image>
                <Image wrapped size="medium" src={halfdome} />
              </Modal.Content>
            </Modal>
          </Card>
          <Card>
            <Modal
              trigger={<img style={styles.image} src={gift} alt="gift2" />}
            >
              <Modal.Content>Look Up</Modal.Content>
            </Modal>
          </Card>
          <Card>
            <Modal
              trigger={<img style={styles.image} src={gift} alt="gift3" />}
            >
              <Modal.Content image>
                <Image wrapped size="medium" src={stitchfix} />
              </Modal.Content>
            </Modal>
          </Card>
        </Container>
      </div>
    );
  }
}

const styles = {
  container: {
    width: "370px"
  },
  image: {
    width: "150px",
    textAlign: "center"
  }
};

export default App;
