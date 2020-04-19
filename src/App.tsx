import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonMenu, IonItem, IonToolbar, IonContent, IonTitle, IonHeader, IonList, IonMenuButton, IonButtons, IonItemGroup, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/home/Home';
import About from './pages/about/about'
import Search from './pages/search/search'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


/**
 * Main Application for Game Saver, handles all routing and component generation
 */
const App: React.FC = () => (
  
  <IonApp>
    <IonMenu side="start" swipeGesture={true} menuId="menu" contentId="main">
      <IonHeader>
      <IonToolbar>
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemGroup>
            <IonLabel className="label">Deals</IonLabel>
            <IonList>
              <IonItem href="/deal" className="default">Best Deals</IonItem>
              <IonItem href="/save" className="default">Best Savings</IonItem>
              <IonItem href="/low" className="default">Lowest Price</IonItem>
            </IonList>
          </IonItemGroup>
          <IonItem href="/search">Search</IonItem>
          <IonItem href="/about">About</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>

    <IonContent id="main">
    <IonToolbar id="toolbar">
          <IonButtons slot="start">
            <IonMenuButton menu="menu"></IonMenuButton>
          </IonButtons>
        </IonToolbar>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/deal" component={() => <Home type="Deal"/>} />
        <Route path="/low" component={() => <Home type="Lowest"/>} />
        <Route path="/save" component={() => <Home type="Savings"/>} />
        <Route path="/about" component={About} exact={true}/>
        <Route path="/search" component={Search} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/deal" />} />
      </IonRouterOutlet>
    </IonReactRouter>
    </IonContent>
  </IonApp>
);

export default App;
