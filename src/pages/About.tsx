import React from 'react';
import { IonContent} from '@ionic/react';
import Layout from '../layouts/Layout'

const About: React.FC = () => {
  return (
    <Layout header="About">
      <IonContent>
        <p>About Us todos application built on ionic react.</p>
      </IonContent>
    </Layout>
  );
};


export default About;
