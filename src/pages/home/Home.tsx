import { IonContent, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';
import GameList from '../../components/gamelist/gamelist';


export type HomeType = "Deal" | "Lowest" | "Savings" | "Search"

export interface HomeProps{
  type: HomeType
}

/**
 * Home component for holding lists of games and the different types of lists
 */
export default class Home extends React.Component<HomeProps> {

  public render() {
    const { type } = this.props
    let title = ""
    if (type === "Deal"){
      title = "Best Deals"
    } else if (type === "Lowest") {
      title = "Lowest Price"
    } else if (type === "Savings") {
      title = "Best Savings"
    }
    return (
      <IonContent>
        <IonToolbar className="bar">
          <IonTitle size="large" className="title">{title}</IonTitle>
        </IonToolbar>
        <GameList type={type}/>
      </IonContent>
    )
  }
}