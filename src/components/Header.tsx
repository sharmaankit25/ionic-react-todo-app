import React from 'react'
import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';

const Header:React.FC = ({children}) => (
    <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{children}</IonTitle>
        </IonToolbar>
      </IonHeader>
);

export default Header;