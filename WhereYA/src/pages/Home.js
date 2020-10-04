import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Home.css';
import { connectToServer, disconnect } from '../server';

const Home = (props) => {
  const [connection = 'disconnected', connecting] = useState();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Connection Status:</IonCardSubtitle>
            <IonCardTitle>{connection}</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonButton
          expand="block"
          onClick={() => {
            if (connection !== 'connected') {
              connectToServer(props.serverUrl);
              connecting(`Connected to ${props.serverUrl}`);
            } else {
              disconnect();
              connecting('disconnected');
            }
          }}
        >
          {connection === 'disconnected' ? 'Join' : 'Leave'}
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
const mapState = (state) => ({
  serverUrl: state.userSettings.serverUrl,
});
export default connect(mapState)(Home);
