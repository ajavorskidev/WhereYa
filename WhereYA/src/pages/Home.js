import React, { useState } from 'react';
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
import { connect } from '../server';

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
            connect();
            connecting('connected');
          }}
        >
          Join
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
