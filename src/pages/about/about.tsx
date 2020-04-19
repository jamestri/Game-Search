import React from "react";
import { IonContent, IonPage, IonToolbar, IonHeader } from "@ionic/react";


/**
 * About page for holding some dev info and info about the project
 */
export default class About extends React.Component {
    public render(){
        return (
            <IonPage>
                <IonContent>
                    <IonToolbar className="bar">
                        <IonHeader>About</IonHeader>
                    </IonToolbar>
                    <div className="about">
                        <p>This site was made and created with the <a href="https://ionicframework.com/">Ionic Framework</a> and their React integration of it.</p>
                        <p>I really enjoy this framework because of its great documentation and relatively easy devlopment process. The only problem is TypeScript, which makes it much harder to accomplish anything.</p>
                        <p>This utilizes the <a href="https://www.cheapshark.com/api">CheapShark API</a> for gathering all of the game information from various stores.</p>
                        <p>I realized pretty soon that gathering all of the information from each store using their own APIs was going to be a huge task with their different ways of handling information, and especially with some of their requirements to use them (Amazon). Like you need to become an affiliate and make money with their affiliate links before they will give you access to their API. Ridiculous.</p>
                    </div>
                </IonContent>
            </IonPage>
        )
    }
}