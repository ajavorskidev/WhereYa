import React, { useState } from 'react';
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

const Messages = () => {
  const [textVal, setVal] = useState();
  const [messages, fetch] = useState();
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
          {messages
            ? messages.map((message) => {
                return (
                  <IonRow>
                    <IonCol>{message}</IonCol>
                  </IonRow>
                );
              })
            : ''}
          <IonRow id="messageRow">
            <IonCol>
              <IonItem id="messageInput">
                <IonTextarea
                  value={textVal}
                  onIonChange={(event) => setVal(event.detail.value)}
                ></IonTextarea>
              </IonItem>
            </IonCol>
            <IonCol>
              <IonButton
                id="messageSubmit"
                onClick={() => {
                  sendMessage(textVal);
                  setVal('');
                  fetch(fetchMessages());
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
};

export default Messages;
