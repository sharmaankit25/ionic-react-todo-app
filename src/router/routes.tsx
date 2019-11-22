import { AppPage } from '../declarations';
import { home, list, person } from 'ionicons/icons';

const appPages: AppPage[] = [
    {
      title: 'Home',
      url: '/home',
      icon: home
    },
    {
      title: 'Todos',
      url: '/home/list',
      icon: list
    },
    {
      title: 'About',
      url: '/about',
      icon: person
    }
  ];


export default appPages;