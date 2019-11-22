import React, { useState } from 'react';
import {IonDatetime,IonLabel,IonCard,IonContent, IonCheckbox, IonIcon, IonItem, IonList, IonFab, IonFabButton, IonModal, IonButton, IonRow, IonCol, IonInput, IonListHeader } from '@ionic/react';
import { add, trash, create } from 'ionicons/icons';
import Layout from '../layouts/Layout'

const ListPage: React.FC = () => {
  

  const [showModal, setShowModal] = useState(false);

  return (
    <Layout header="Listings">
      <IonContent>
        <ListItems />
        <IonFab vertical="bottom" horizontal="end" slot="fixed" onClick={() => setShowModal(true)}>
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
      <IonModal isOpen={showModal}>
      <IonContent className="ion-padding">
          <h2>Add Todo </h2>  
          <IonItem>
          <IonLabel position="floating">Title</IonLabel>            
            <IonInput clearInput placeholder="Go to shop"></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel>Due Date</IonLabel>
            <IonDatetime displayFormat="MM DD YY" placeholder="Select Date"></IonDatetime>
          </IonItem>

          <IonItem>
            <IonLabel>HH:mm</IonLabel>
            <IonDatetime displayFormat="HH:mm"></IonDatetime>
          </IonItem>
          
        </IonContent>
          <IonRow>
          <IonCol>
            <IonButton expand="block" onClick={() => setShowModal(false)}>Save</IonButton>
          </IonCol>
          <IonCol>
            <IonButton expand="block" color="danger" onClick={() => setShowModal(false)}>Cancel</IonButton>
          </IonCol>
          </IonRow>
          
      </IonModal>
    </Layout>
  );
};

const ListItems = () => {
  const toggleTodo = () => {
    console.log("Toggle Todos")
  }
  const items = [1, 2, 3, 4, 5].map(x => {
    return (
      <IonCard key={x} onClick={toggleTodo}>
      <IonItem>
          <IonCheckbox color="primary" />
          <div className="ion-padding">
            <IonLabel>Item {x}</IonLabel>
          </div>
        <div className="ion-float-right">
            <IonIcon color="danger" icon={trash}></IonIcon>
            <IonIcon color="info" icon={create}></IonIcon>
        </div>
      </IonItem>
      </IonCard>
    );
  });

  return (<IonList>
            <IonListHeader>
                <IonLabel>Todo</IonLabel>
            </IonListHeader>
            {items}
          </IonList>);
};

export default ListPage;
