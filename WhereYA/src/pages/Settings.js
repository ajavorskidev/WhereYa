import React from 'react';
import { connect } from 'react-redux';
import {
  IonCardContent,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
} from '@ionic/react';
import { changeSettings } from '../store/userSettings';
import './Settings.css';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      serverUrl: this.props.serverUrl,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event, eventName) {
    this.setState({ ...this.state, [eventName]: event.detail.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.changeSetting(this.state);
  }
  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Settings</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Server Url:</IonCardSubtitle>
              <IonCardTitle>{this.props.serverUrl}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonInput
                value={this.state.serverUrl}
                onIonChange={(event) => this.handleChange(event, 'serverUrl')}
              ></IonInput>
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Name:</IonCardSubtitle>
              <IonCardTitle>{this.props.name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonInput
                value={this.state.name}
                onIonChange={(event) => this.handleChange(event, 'name')}
              ></IonInput>
            </IonCardContent>
          </IonCard>
          <IonButton expand="full" onClick={this.handleSubmit}>
            Submit Changes
          </IonButton>
        </IonContent>
      </IonPage>
    );
  }
}
const mapState = (state) => ({
  serverUrl: state.userSettings.serverUrl,
  name: state.userSettings.name,
});
const mapDispatch = (dispatch) => ({
  changeSetting(updatedSettings) {
    dispatch(changeSettings(updatedSettings));
  },
});
export default connect(mapState, mapDispatch)(Settings);
