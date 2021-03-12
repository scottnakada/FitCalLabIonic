import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>FitCalLab</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Good Afternoon, John Smith</IonCardTitle>
            <IonCardSubtitle>Saturday, March 6</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonCardTitle>Today</IonCardTitle>
                </IonCol>
                <IonCol>
                  <IonButton href="/tab2">More...</IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardHeader>
          <IonCardContent>
          <IonGrid>
            <IonRow>
              <IonCol>9:00AM</IonCol>
              <IonCol>Morning swim</IonCol>
            </IonRow>
            <IonRow>
              <IonCol>10:00AM</IonCol>
              <IonCol>Meeting with development</IonCol>
            </IonRow>
            <IonRow>
              <IonCol>10:45AM</IonCol>
              <IonCol>Team building</IonCol>
            </IonRow>
          </IonGrid>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonCardTitle>Suggestions</IonCardTitle>
                </IonCol>
                <IonCol>
                  <IonButton href="/tab3">More...</IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardHeader>
          <IonCardContent>
            We found 3 meetings that could be moved to better times.
            <IonButton href="/tab3">See more &gt;</IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonCardTitle>Workouts</IonCardTitle>
                </IonCol>
                <IonCol>
                  <IonButton>More...</IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardHeader>
          <IonCardContent>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
