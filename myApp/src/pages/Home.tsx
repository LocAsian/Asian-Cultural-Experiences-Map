import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonSearchbar, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import appLogo from '../assets/icons/AppLogo.svg';
import {personCircle} from 'ionicons/icons';

//emojis from https://openmoji.org/library/
import favorite from '../assets/icons/favorite.svg'
import restaurant from '../assets/icons/restaurant.svg'
import cart from '../assets/icons/cart.svg'
import temple from '../assets/icons/temple.svg';
import events from '../assets/icons/event.svg'

import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonIcon icon={appLogo} size="large" color="primary"></IonIcon>
          <IonSearchbar></IonSearchbar>
          <IonIcon icon={personCircle} size="large" color="primary"></IonIcon>
          <IonSegment scrollable={true}> {/* Setting size in css file */}
            <IonSegmentButton value="favorite">
              <IonIcon icon={favorite}></IonIcon>
              Favorite
            </IonSegmentButton>
            <IonSegmentButton value="restaurant">
              <IonIcon icon={restaurant}></IonIcon>
              Restaurant
            </IonSegmentButton>
            <IonSegmentButton value="cart">
              <IonIcon icon={cart}></IonIcon>
              Grocery Stores
            </IonSegmentButton>
            <IonSegmentButton value="cultural">
              <IonIcon icon={temple}></IonIcon>
              Cultural Spots
            </IonSegmentButton>
            <IonSegmentButton value="events">
              <IonIcon icon={events}></IonIcon>
              Events
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        {/* <IonButton routerLink="/search">Navigate</IonButton> */}
        {/* <ExploreContainer /> */}
      </IonContent>
    
    </IonPage>
  );
};

export default Home;
