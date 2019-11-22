import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  } from '@ionic/react';
import './Home.css';
import Layout from '../layouts/Layout'

const HomePage: React.FC = () => {
  return (
    <Layout header="Home">
        <IonCard className="welcome-card">
          <img src="/assets/shapes.svg" alt=""/>
          <IonCardHeader>
            <IonCardSubtitle>Get Started</IonCardSubtitle>
            <IonCardTitle>Welcome to Todos App</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.
            </p>
          </IonCardContent>
        </IonCard>
    </Layout>
  );
};

export default HomePage;
