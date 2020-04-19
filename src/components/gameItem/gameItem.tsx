import React from "react";
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonImg, IonLabel } from "@ionic/react";


export interface GameItemProps {
    thumb: string
    name: string
    price: string
    saleprice: string
    savings: string
    id: string
    deal: string
    class?: string
}

/**
 * GameItem component for use in GameList, uses props and creates an IonCard
 * with game image and pricing information, with click to where deal is
 */
export default class GameItem extends React.Component<GameItemProps> {

    public render() {
        const {
            thumb, 
            name, 
            price, 
            saleprice, 
            savings, 
            id, 
            deal
        } = this.props
     
        return(
            <IonCard className={this.props.class} key={id} href={`http://www.cheapshark.com/redirect?dealID=${deal}`}>
                <IonCardHeader>
                    <IonCardTitle>{name}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonImg src={thumb} className="image"></IonImg>
                    {price != saleprice ? //only show deal info if there is one, otherwise just show price
                    <IonItem className="info" >
                        <IonLabel className="gamelabel price good" position="stacked">${price}</IonLabel>
                        <IonLabel className="gamelabel sale good" position="stacked">${saleprice}</IonLabel>
                        <IonLabel className="gamelabel save good" position="stacked">Savings: {savings.slice(0, savings.indexOf("."))}%</IonLabel>
                        <IonLabel position="stacked"></IonLabel>
                    </IonItem> 
                    : 
                    <IonItem className="info">
                        <IonLabel className="gamelabel price">${price}</IonLabel>
                    </IonItem>
                    }
                </IonCardContent>
            </IonCard>
        )
    }
}