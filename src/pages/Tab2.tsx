import { IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonCard,
        IonCardTitle,
        IonCardHeader,
        IonCardContent,
        IonGrid,
        IonRow,
        IonCol,
        IonButton} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Schedule</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol>Thur</IonCol>
                <IonCol>Mar 11</IonCol>
                <IonCol>9:00AM</IonCol>
                <IonCol>Morning swim</IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol>Thur</IonCol>
                <IonCol>Mar 11</IonCol>
                <IonCol>10:00AM</IonCol>
                <IonCol>Meeting with development</IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol>Thur</IonCol>
                <IonCol>Mar 11</IonCol>
                <IonCol>10:45AM</IonCol>
                <IonCol>Team building</IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol>Fri</IonCol>
                <IonCol>Mar 12</IonCol>
                <IonCol>9:30AM</IonCol>
                <IonCol>Team Meeting</IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol>Fri</IonCol>
                <IonCol>Mar 12</IonCol>
                <IonCol>10:30AM</IonCol>
                <IonCol>Review App Design</IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
