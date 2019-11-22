import React from 'react'
import { IonContent,IonPage } from '@ionic/react';
import Header from '../components/Header'

interface IProps  {
    header: string;
}

const Layout:React.FC<IProps> = ({children,header}) => (
    <IonPage>
        <Header>{header}</Header>
        <IonContent>
            {children}
        </IonContent>        
    </IonPage>
);

export default Layout;