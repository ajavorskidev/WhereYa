import React, { useState } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonTextarea,
  IonItem,
  IonButton,
} from '@ionic/react';
import './Messages.css';
import { sendMessage, fetchMessages } from '../server';
import { getMessages } from '../store/store';
import messages from '../store/messages';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newMessage: '',
    };
    const socket = io('http://192.168.1.9:3000');
    socket.on('chat message', (message) => {
      this.props.getMessages(message);
    });
    this.handleChange = this.handleChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }
  handleChange(event) {
    this.setState({ newMessage: event.detail.value });
  }
  handleSend() {
    sendMessage(`${this.props.name}: ${this.state.newMessage}`);
    this.setState({ newMessage: '' });
  }
  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Messages</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Messages</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonGrid>
            {this.props.messages.length > 0
              ? this.props.messages.map((message) => {
                  return (
                    <IonRow key={1}>
                      <IonCol>{message}</IonCol>
                    </IonRow>
                  );
                })
              : ''}
            <IonRow id="messageRow">
              <IonCol>
                <IonItem id="messageInput">
                  <IonTextarea
                    expand="full"
                    value={this.state.newMessage}
                    onIonChange={(event) => this.handleChange(event)}
                  ></IonTextarea>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonButton
                  id="messageSend"
                  expand="full"
                  id="messageSubmit"
                  onClick={() => {
                    this.handleSend();
                  }}
                >
                  Send
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  }
}
const mapState = (state) => ({
  messages: state.messages,
  name: state.userSettings.name,
});
const mapDispatch = (dispatch) => ({
  getMessages(message) {
    dispatch(getMessages(message));
  },
});
export default connect(mapState, mapDispatch)(Messages);
