import { IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonCard,
        IonCardHeader,
        IonCardContent,
        IonCardSubtitle,
        IonGrid,
        IonRow,
        IonCol} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Suggestions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Thurs Mar 11</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol>9:00AM</IonCol>
                <IonCol>Move Meeting to 9:30 and Walk Before Work</IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Thurs Mar 12</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol>5:30PM</IonCol>
                <IonCol>Add a Run After Work</IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
